import { ClickableImage } from "@/components/ClickableImage";
import { Reveal } from "@/components/Reveal";

export function MechanismGap() {
  return (
    <>
      <section className="w-full bg-[var(--color-paper)]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 py-10 sm:px-10 sm:py-16">
          <Reveal className="max-w-[640px]">
            <h2 className="text-center text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
              70% Of Roofers Have A Lead Source Problem, Here&apos;s Why
            </h2>
          </Reveal>

          {/* Block 1: search demand claim + proof */}
          <Reveal className="flex w-full max-w-[640px] flex-col items-center gap-4">
            <p className="text-center text-[18px] leading-[1.5] text-[var(--color-slate-900)]">
              Up to 10,000 people are searching for roofers near them on Google - every month
            </p>
            <ClickableImage
              src="/proof/keyword-planner.png"
              alt="Google Keyword Planner data for roof replacement searches"
            />
          </Reveal>

          {/* Block 2: who wins claim + proof */}
          <Reveal className="flex w-full max-w-[640px] flex-col items-center gap-4">
            <p className="text-center text-[18px] leading-[1.5] font-semibold text-[var(--color-slate-900)]">
              Other roofers get these jobs because they show up first.
            </p>
            <ClickableImage
              src="/proof/sponsored-ads.png"
              alt="Sponsored ads for roofing on Google search"
            />
          </Reveal>
        </div>
      </section>

      {/* Payoff beat: carbon panel */}
      <section className="w-full bg-[var(--color-carbon)]">
        <Reveal className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-2 px-6 py-14 text-center sm:px-10 sm:py-16">
          <p className="text-[18px] leading-[1.5] text-white/70">
            We make sure you&apos;re the one they find - and the one they call.
          </p>
          <p className="text-[24px] leading-[1.3] font-bold text-white sm:text-[30px]">
            Done-For-You.
          </p>
        </Reveal>
      </section>
    </>
  );
}
