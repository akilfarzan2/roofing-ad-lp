"use client";

import { useState, type FormEvent } from "react";

// TODO: replace with your real Make.com webhook URL once created
const MAKE_WEBHOOK_URL = "https://hook.us1.make.com/REPLACE_WITH_YOUR_WEBHOOK_ID";

const revenueOptions = ["Under $20k", "$20k - $50k", "$50k - $100k", "$100k+"];

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  business: string;
  revenue: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  business: "",
  revenue: "",
};

export function BookingForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  function updateField(field: keyof FormState, value: string) {
    setFormState((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div
        id="booking-form"
        className="flex w-full flex-col items-center gap-2 rounded-[8px] border border-[var(--color-frost)] bg-white/95 p-8 text-center"
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
      className="flex w-full flex-col gap-3 rounded-[8px] border border-[var(--color-frost)] bg-white/95 p-6 text-left sm:p-8"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          required
          value={formState.fullName}
          onChange={(event) => updateField("fullName", event.target.value)}
          className="h-12 w-full rounded-[8px] border border-[var(--color-cloud)] bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formState.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="h-12 w-full rounded-[8px] border border-[var(--color-cloud)] bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)]"
        />
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
          required
          value={formState.phone}
          onChange={(event) => updateField("phone", event.target.value.replace(/[^0-9]/g, ""))}
          className="h-12 w-full rounded-[8px] border border-[var(--color-cloud)] bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="business" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          Website or Business Name
        </label>
        <input
          id="business"
          type="text"
          required
          value={formState.business}
          onChange={(event) => updateField("business", event.target.value)}
          className="h-12 w-full rounded-[8px] border border-[var(--color-cloud)] bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="revenue" className="text-[13px] leading-[1.4] text-[var(--color-slate-600)]">
          What is your current monthly revenue?
        </label>
        <select
          id="revenue"
          required
          value={formState.revenue}
          onChange={(event) => updateField("revenue", event.target.value)}
          className="h-12 w-full rounded-[8px] border border-[var(--color-cloud)] bg-white px-4 text-[16px] text-[var(--color-slate-900)] outline-none focus:border-[var(--color-slate-900)]"
        >
          <option value="" disabled>
            Select a range
          </option>
          {revenueOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-full rounded-[8px] bg-[var(--color-vermillion-signal)] px-6 py-4 text-[16px] font-medium tracking-[0.025em] text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Book My Strategy Call"}
      </button>

      {status === "error" && (
        <p className="text-[13px] leading-[1.4] text-[var(--color-vermillion-signal)]">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
