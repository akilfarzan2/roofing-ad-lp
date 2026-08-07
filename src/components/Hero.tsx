import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-10">
        <Reveal className="flex max-w-[720px] flex-col items-center gap-4">
          {/* Logo */}
          <Image
            src="/monarc-logo.png"
            alt="Monarc Labs"
            width={910}
            height={794}
            priority
            className="h-[64px] w-auto sm:h-[76px]"
          />

          {/* Eyebrow line */}
          <p className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
Aussie Auto Repair Shop Owners — You Don't Know This Yet

          </p>

          {/* Headline */}
          <h1 className="text-[32px] leading-[1.15] font-bold tracking-[-0.6px] text-[var(--color-slate-900)] sm:text-[44px] sm:tracking-[-1px] lg:text-[56px] lg:leading-[1.1] lg:tracking-[-1.3px]">
            You're losing customers to the workshop down the road because{" "}
            <span className="text-[var(--color-vermillion-signal)]">ChatGPT is telling people to call them</span>, not you 
          </h1>

          {/* Subheadline */}
          <p className="max-w-[480px] text-[14px] leading-[1.5] text-[var(--color-slate-600)] italic">
            They're not a better mechanic than you. That's not why.
          </p>
        </Reveal>

        <Reveal className="w-full max-w-[420px]" delay={0.15}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
