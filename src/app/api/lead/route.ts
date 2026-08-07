import { createHash } from "crypto";
import { NextResponse } from "next/server";

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;
const META_DATASET_ID = process.env.META_DATASET_ID;
const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const META_API_VERSION = "v21.0";

interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  business: string;
  eventId: string;
  eventSourceUrl: string;
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

// Meta wants digits-only phone numbers with country code, no leading 0.
// The form only ever collects Australian shop owners, so a 10-digit
// local number starting with 0 is normalised to +61. Anything else
// (already has a country code, or is a landline in another shape) is
// hashed as-is rather than guessed at.
function normalizePhone(rawDigits: string): string {
  if (rawDigits.length === 10 && rawDigits.startsWith("0")) {
    return `61${rawDigits.slice(1)}`;
  }
  return rawDigits;
}

async function forwardToMake(payload: LeadPayload): Promise<void> {
  if (!MAKE_WEBHOOK_URL) {
    console.error("MAKE_WEBHOOK_URL is not configured");
    return;
  }

  const response = await fetch(MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      business: payload.business,
    }),
  });

  if (!response.ok) {
    throw new Error(`Make webhook responded with ${response.status}`);
  }
}

async function sendMetaConversionEvent(
  payload: LeadPayload,
  clientIp: string,
  userAgent: string,
): Promise<void> {
  if (!META_DATASET_ID || !META_ACCESS_TOKEN) {
    console.error("META_DATASET_ID or META_ACCESS_TOKEN is not configured");
    return;
  }

  const url = `https://graph.facebook.com/${META_API_VERSION}/${META_DATASET_ID}/events?access_token=${META_ACCESS_TOKEN}`;

  const body = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: payload.eventId,
        event_source_url: payload.eventSourceUrl,
        action_source: "website",
        user_data: {
          em: [sha256(payload.email.trim().toLowerCase())],
          ph: [sha256(normalizePhone(payload.phone))],
          client_ip_address: clientIp,
          client_user_agent: userAgent,
        },
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Meta CAPI responded with ${response.status}: ${errorBody}`);
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!payload.fullName || !payload.email || !payload.phone || !payload.business) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";

  // Make and Meta are independent: one failing must never block the other,
  // and neither should block the visitor from seeing the confirmation
  // screen. Failures are logged server-side for now (no lead is lost
  // silently in the sense that it still reaches whichever channel works).
  const [makeResult, metaResult] = await Promise.allSettled([
    forwardToMake(payload),
    sendMetaConversionEvent(payload, clientIp, userAgent),
  ]);

  if (makeResult.status === "rejected") {
    console.error("Failed to forward lead to Make:", makeResult.reason);
  }
  if (metaResult.status === "rejected") {
    console.error("Failed to send Meta Conversions API event:", metaResult.reason);
  }

  return NextResponse.json({ received: true });
}
