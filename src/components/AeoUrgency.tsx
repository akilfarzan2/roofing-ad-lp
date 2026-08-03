import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const urgencyPoints = [
  "Homeowners are already searching Google AI and ChatGPT for roofers.",
  "Google's search bar is turning into an AI search bar in the next 12 months.",
  "ChatGPT alone gets 2.5 billion questions a day.",
  "If you're not optimised for AI, another roofer will be recommended instead.",
  "We're including it free of charge - for a limited time only",
];

export function AeoUrgency() {
  return (
    <section className="w-full bg-[var(--color-carbon)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-14 text-center sm:px-10 sm:py-16">
        <Reveal className="flex w-fit flex-col items-center gap-2">
          <span className="w-fit rounded-[8px] border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium tracking-[0.3px] text-white uppercase">
            AEO
          </span>
          <h2 className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-white sm:text-[30px] sm:leading-[1.33]">
            Why This Matters For You
          </h2>
        </Reveal>

        <RevealGroup className="flex flex-col gap-2">
          {urgencyPoints.map((point) => (
            <RevealItem
              key={point}
              className="flex items-center justify-center gap-2 text-[15px] leading-[1.4] text-white/70"
            >
              <span aria-hidden className="text-[var(--color-vermillion-signal)]">
                &#10003;
              </span>
              {point}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
