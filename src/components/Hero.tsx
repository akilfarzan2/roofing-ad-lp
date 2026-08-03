import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-10">
        <Reveal className="flex max-w-[720px] flex-col items-center gap-4">
          {/* Eyebrow line */}
          <p className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
            Roofing Businesses Still Relying On Word Of Mouth In 2026
          </p>

          {/* Headline */}
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-[-0.6px] text-[var(--color-slate-900)] sm:text-[44px] sm:tracking-[-1px] lg:text-[56px] lg:leading-[1.1] lg:tracking-[-1.3px]">
            We&apos;ll get you{" "}
            <span className="text-[var(--color-vermillion-signal)]">10 additional roofing jobs every month</span>. 100% money back if you&apos;re not satisfied within 90 days.
          </h1>

          {/* Subheadline */}
          <p className="max-w-[480px] text-[18px] leading-[1.5] text-[var(--color-slate-600)] italic">
            Get the right work, every month, without relying on word-of-mouth or paying for leads.
          </p>
        </Reveal>

        <Reveal className="w-full max-w-[420px]" delay={0.15}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
