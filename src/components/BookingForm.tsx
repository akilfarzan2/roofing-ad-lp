"use client";

import { useState, type FormEvent } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  business: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  business: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getFieldError(field: keyof FormState, value: string): string | null {
  if (!value.trim()) return "Required";
  if (field === "email" && !EMAIL_PATTERN.test(value)) return "Enter a valid email";
  return null;
}

export function BookingForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  function updateField(field: keyof FormState, value: string) {
    setFormState((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  }

  function validateField(field: keyof FormState) {
    const error = getFieldError(field, formState[field]);
    setErrors((previous) => ({ ...previous, [field]: error ?? undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    (Object.keys(formState) as (keyof FormState)[]).forEach((field) => {
      const error = getFieldError(field, formState[field]);
      if (error) nextErrors[field] = error;
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");

    // Shared between the browser Pixel call below and the server-side
    // Meta Conversions API call in /api/lead, so Meta can dedupe the two
    // into a single counted conversion instead of double-counting.
    const eventId = crypto.randomUUID();

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          eventId,
          eventSourceUrl: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(`/api/lead responded with ${response.status}`);
      }

      window.fbq?.("track", "Lead", {}, { eventID: eventId });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div
        id="booking-form"
        className="form-success-in flex w-full flex-col items-center gap-2 rounded-[8px] border border-[var(--color-frost)] bg-white/95 p-8 text-center"
      >
        <p className="text-[20px] leading-[1.3] font-bold text-[var(--color-slate-900)]">
          Thanks — we&apos;ve got your details.
        </p>
        <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)]">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      id="booking-form"
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col gap-3 rounded-[8px] border border-[var(--color-frost)] bg-white/95 p-6 text-left sm:p-8"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={formState.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          onBlur={() => validateField("fullName")}
          aria-invalid={Boolean(errors.fullName)}
          className={`h-12 w-full rounded-[8px] border bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)] ${errors.fullName ? "border-[var(--color-vermillion-signal)]" : "border-[var(--color-cloud)]"}`}
        />
        {errors.fullName && (
          <p className="text-[12px] leading-[1.4] text-[var(--color-vermillion-signal)]">{errors.fullName}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onChange={(event) => updateField("email", event.target.value)}
          onBlur={() => validateField("email")}
          aria-invalid={Boolean(errors.email)}
          className={`h-12 w-full rounded-[8px] border bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)] ${errors.email ? "border-[var(--color-vermillion-signal)]" : "border-[var(--color-cloud)]"}`}
        />
        {errors.email && (
          <p className="text-[12px] leading-[1.4] text-[var(--color-vermillion-signal)]">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={formState.phone}
          onChange={(event) => updateField("phone", event.target.value.replace(/[^0-9]/g, ""))}
          onBlur={() => validateField("phone")}
          aria-invalid={Boolean(errors.phone)}
          className={`h-12 w-full rounded-[8px] border bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)] ${errors.phone ? "border-[var(--color-vermillion-signal)]" : "border-[var(--color-cloud)]"}`}
        />
        {errors.phone && (
          <p className="text-[12px] leading-[1.4] text-[var(--color-vermillion-signal)]">{errors.phone}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="business" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Website or Business Name
        </label>
        <input
          id="business"
          type="text"
          value={formState.business}
          onChange={(event) => updateField("business", event.target.value)}
          onBlur={() => validateField("business")}
          aria-invalid={Boolean(errors.business)}
          className={`h-12 w-full rounded-[8px] border bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)] ${errors.business ? "border-[var(--color-vermillion-signal)]" : "border-[var(--color-cloud)]"}`}
        />
        {errors.business && (
          <p className="text-[12px] leading-[1.4] text-[var(--color-vermillion-signal)]">{errors.business}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-full rounded-[8px] bg-[var(--color-vermillion-signal)] px-6 py-4 text-[16px] font-medium tracking-[0.025em] text-white uppercase transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:active:scale-100"
      >
        {status === "submitting" ? "Submitting..." : "Make AI Recommend Me"}
      </button>

      <p className="text-center text-[13px] leading-[1.5] text-[var(--color-slate-600)]">
        Free 30-minute call. We show you how to keep your bays full going into 2027.
      </p>

      {status === "error" && (
        <p className="text-[13px] leading-[1.4] text-[var(--color-vermillion-signal)]">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
