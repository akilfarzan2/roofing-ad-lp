import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";

/*
 * The hero deliberately does NOT use <Reveal>. Reveal is a Framer Motion
 * client component that server-renders its children at opacity:0, so the
 * headline stayed invisible until ~220KB of JS had downloaded, parsed and
 * hydrated — a 2.8s first contentful paint on mobile. Entrance motion here
 * is CSS-only (see .hero-rise in globals.css) so the page paints instantly.
 */
export function Hero() {
  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col items-center justify-center gap-8 px-6 py-16 text-center sm:px-10">
        <div className="hero-rise flex max-w-[720px] flex-col items-center gap-4">
          {/* Logo */}
          {/* Renders ~73px wide at most, so cap what the optimiser serves —
              this is preloaded and competes directly with LCP. */}
          <Image
            src="/monarc-logo.png"
            alt="Monarc Labs"
            width={182}
            height={159}
            sizes="87px"
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
        </div>

        <div className="hero-rise-delayed w-full max-w-[420px]">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
