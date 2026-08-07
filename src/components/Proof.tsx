import { Reveal } from "@/components/Reveal";

function StatBlock() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-[8px] border border-[var(--color-frost)] px-4 py-8 text-center">
      <span className="text-[32px] leading-[1.1] font-bold tracking-[-0.6px] text-[var(--color-vermillion-signal)] sm:text-[36px]">
        729 visitors. 329 calls.
      </span>
      <span className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
        In the last 90 days.
      </span>
    </div>
  );
}

export function Proof() {
  return (
    <>
      <section className="w-full bg-[var(--color-vellum)]">
        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-6 px-6 py-12 sm:px-10 sm:py-16">
          <Reveal className="flex flex-col items-center gap-2 text-center">
            <p className="text-[12px] leading-[1.5] text-[var(--color-slate-600)]">
              We make sure you&apos;re the one they find - and the one they call.
            </p>
            <h2 className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
              Our Done-For-You System In Action
            </h2>
            <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)] italic">
              Recent project: All Clutch &amp; Brake Service.
            </p>
          </Reveal>

          <Reveal className="flex w-full flex-col items-center gap-3" delay={0.1}>
            <StatBlock />
            <p className="max-w-[480px] text-center text-[13px] leading-[1.4] text-[var(--color-slate-500)] italic">
              That's phone activity. Not clicks. Actual calls.


            </p>
          </Reveal>

          <Reveal className="text-center" delay={0.15}>
            <p className="text-[18px] leading-[1.5] font-semibold text-[var(--color-slate-900)]">
            
            </p>
          </Reveal>

          <Reveal className="text-center" delay={0.2}>
            <p className="text-[16px] leading-[1.5] font-medium text-[var(--color-slate-900)]">
              So how do we actually do it? Here&apos;s exactly what&apos;s included.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
