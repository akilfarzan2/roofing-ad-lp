import { BookingForm } from "@/components/BookingForm";

export function Hero() {
  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-10">
        <div className="flex max-w-[720px] flex-col items-center gap-4">
          {/* Eyebrow line */}
          <p className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
            Roofing Businesses Still Relying On Word Of Mouth In 2026
          </p>

          {/* Headline */}
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-[-0.6px] text-[var(--color-slate-900)] sm:text-[44px] sm:tracking-[-1px] lg:text-[56px] lg:leading-[1.1] lg:tracking-[-1.3px]">
            We&apos;ll get you 10 additional roofing jobs every month. If you're not satisfied in 90 days. We&apos;ll give you your money back.
          </h1>

          {/* Subheadline */}
          <p className="max-w-[480px] text-[18px] leading-[1.5] text-[var(--color-slate-600)] italic">
            Get the right work, every month, without relying on word-of-mouth or paying for leads.
          </p>
        </div>

        <div className="w-full max-w-[420px]">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
