import { MapPinLine, Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

interface Pillar {
  heading: string;
  copy: string;
  icon?: Icon;
  logoSlug?: string;
}

const pillars: Pillar[] = [
  {
    heading: "Google Ads",
    copy: "Puts you first when someone searches for a roofer — so they call you, not your competitor.",
    logoSlug: "google",
  },
  {
    heading: "Local SEO",
    copy: "Builds trust so people pick you before they even call anyone else.",
    icon: MapPinLine,
  },
  {
    heading: "AEO (AI Engine Optimization)",
    copy: "Gets ChatGPT to recommend you — so the next job comes straight to you.",
    icon: Sparkle,
  },
];

function PillarGlyph({ pillar, size }: { pillar: Pillar; size: number }) {
  if (pillar.logoSlug) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${pillar.logoSlug}/e42b0c`}
        alt=""
        aria-hidden
        style={{ width: size, height: size }}
      />
    );
  }
  const IconComponent = pillar.icon!;
  return <IconComponent size={size} weight="bold" className="text-[var(--color-vermillion-signal)]" />;
}

const connectorGroup = ["Ads", "SEO", "AEO"];
const connectorOutcome = "Booked Calls";

export function DeepProcess() {
  return (
    <>
      <section className="w-full bg-[var(--color-paper)]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 pt-12 pb-8 sm:px-10 sm:pt-16">
          <Reveal>
            <h2 className="text-center text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
              Here&apos;s How We Get You More Of The Right Jobs
            </h2>
          </Reveal>

          {/* Mobile: vertical timeline */}
          <RevealGroup className="flex w-full max-w-[560px] flex-col lg:hidden">
            {pillars.map((pillar, index) => {
              const isLast = index === pillars.length - 1;
              return (
                <RevealItem key={pillar.heading} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-vellum)]">
                      <PillarGlyph pillar={pillar} size={20} />
                    </span>
                    {!isLast && <span aria-hidden className="mt-1 w-px flex-1 bg-[var(--color-frost)]" />}
                  </div>

                  <div className={`flex flex-col gap-1.5 text-left ${isLast ? "pb-0" : "pb-8"}`}>
                    <h3 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-slate-900)]">
                      {pillar.heading}
                    </h3>
                    <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)]">{pillar.copy}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Desktop: 3-column grid with icon chips */}
          <RevealGroup className="hidden w-full max-w-[900px] lg:grid lg:grid-cols-3 lg:gap-8">
            {pillars.map((pillar) => {
              return (
                <RevealItem key={pillar.heading} className="flex flex-col items-center gap-3 text-center">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-vellum)]">
                    <PillarGlyph pillar={pillar} size={22} />
                  </span>
                  <h3 className="text-[20px] leading-[1.4] font-semibold text-[var(--color-slate-900)]">
                    {pillar.heading}
                  </h3>
                  <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)]">{pillar.copy}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="w-full bg-[var(--color-carbon)]">
        <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 py-14 sm:px-10 sm:py-16">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {connectorGroup.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-[8px] border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium tracking-[0.3px] text-white uppercase">
                  {step}
                </span>
                {index < connectorGroup.length - 1 && (
                  <span aria-hidden className="text-white/40">
                    +
                  </span>
                )}
              </div>
            ))}
            <span aria-hidden className="text-white/40">
              &rarr;
            </span>
            <span className="rounded-[8px] border border-[var(--color-vermillion-signal)] bg-white/5 px-3 py-1 text-[12px] font-medium tracking-[0.3px] text-[var(--color-vermillion-signal)] uppercase">
              {connectorOutcome}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-white sm:text-[30px]">
              Completely Done-For-You.
            </p>
            <p className="text-[18px] leading-[1.5] text-white/70">
              We build it, we run it, you just take the calls.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
