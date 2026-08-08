import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";

interface Tick {
  heading: string;
  sub?: string;
}

const ticks: Tick[] = [
  { heading: "Complete AI Recommendation System", sub: "Free AI Check included" },
  { heading: "Free Brand New Website, Built For AI", sub: "Limited time" },
  { heading: "Only One Shop Per Area", sub: "We work with you, not your competitor" },
  { heading: "Australian owned", sub: "Made and run locally" },
];

export function PriceCluster() {
  return (
    <section className="w-full bg-[var(--color-carbon)]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-8 px-6 py-14 text-center sm:px-10 sm:py-20">
        <Reveal className="flex flex-col items-center gap-1">
          <span className="text-[28px] leading-[1.2] font-bold tracking-[-0.6px] text-white sm:text-[36px]">
          Our Done-For-You System.
          </span>
          <span className="text-[16px] leading-[1.5] text-white/70">
            Be the shop ChatGPT tells people to call.
          </span>
        </Reveal>

        <Reveal className="flex w-full flex-col items-center" delay={0.1}>
          <div className="flex max-w-full flex-col gap-3 text-left">
            {ticks.map((tick) => (
              <div key={tick.heading} className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 text-[var(--color-vermillion-signal)]">
                  &#10003;
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[16px] leading-[1.4] font-semibold text-white sm:text-[17px]">
                    {tick.heading}
                  </span>
                  {tick.sub && (
                    <span className="text-[13px] leading-[1.4] text-white/60">{tick.sub}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="flex w-full flex-col items-center gap-3" delay={0.15}>
          <div className="w-full max-w-[420px]">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
