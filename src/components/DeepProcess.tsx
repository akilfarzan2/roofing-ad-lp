interface Pillar {
  heading: string;
  copy: string;
}

const pillars: Pillar[] = [
  {
    heading: "Google Ads",
    copy: "Puts you first when someone searches for a roofer — so they call you, not your competitor.",
  },
  {
    heading: "Local SEO",
    copy: "Builds trust so people pick you before they even call anyone else.",
  },
  {
    heading: "AEO (AI Engine Optimization)",
    copy: "Gets ChatGPT to recommend you — so the next job comes straight to you.",
  },
];

const connectorGroup = ["Ads", "SEO", "AEO"];
const connectorOutcome = "Booked Calls";

export function DeepProcess() {
  return (
    <>
      <section className="w-full bg-[var(--color-paper)]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 pt-12 pb-8 sm:px-10 sm:pt-16">
          <h2 className="text-center text-[20px] leading-[1.4] font-semibold text-[var(--color-slate-900)] sm:text-[24px]">
            Here&apos;s How We Get You More Of The Right Jobs
          </h2>

          <div className="flex w-full max-w-[900px] flex-col divide-y divide-[var(--color-frost)] lg:grid lg:grid-cols-3 lg:gap-8 lg:divide-y-0">
            {pillars.map((pillar) => (
              <div key={pillar.heading} className="flex flex-col gap-2 py-6 text-center first:pt-0 last:pb-0 lg:py-0">
                <h3 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-slate-900)] sm:text-[20px]">
                  {pillar.heading}
                </h3>
                <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)]">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-vellum)]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {connectorGroup.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-paper)] px-3 py-1 text-[12px] font-medium tracking-[0.3px] text-[var(--color-slate-600)] uppercase">
                  {step}
                </span>
                {index < connectorGroup.length - 1 && (
                  <span aria-hidden className="text-[var(--color-mist)]">
                    +
                  </span>
                )}
              </div>
            ))}
            <span aria-hidden className="text-[var(--color-mist)]">
              &rarr;
            </span>
            <span className="rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-paper)] px-3 py-1 text-[12px] font-medium tracking-[0.3px] text-[var(--color-slate-600)] uppercase">
              {connectorOutcome}
            </span>
          </div>

          <p className="max-w-[560px] text-center text-[18px] leading-[1.5] font-semibold text-[var(--color-slate-900)]">
            We build it, run it, and get you customers every month 
            <br></br>you don&apos;t worry about a thing.
          </p>
        </div>
      </section>
    </>
  );
}
