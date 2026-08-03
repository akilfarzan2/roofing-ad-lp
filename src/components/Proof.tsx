import { ClickableImage } from "@/components/ClickableImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

function ProofBadge({ label }: { label: string }) {
  return (
    <span className="absolute -top-3 right-4 z-10 rounded-[8px] bg-[var(--color-carbon)] px-3 py-1.5 text-[12px] leading-[1.4] font-medium tracking-[0.3px] whitespace-nowrap text-white shadow-[var(--shadow-subtle)]">
      {label}
    </span>
  );
}

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
    <section className="w-full bg-[var(--color-vellum)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 py-12 sm:px-10 sm:py-16">
        {/* Sub-2: Case study (All Clutch & Brake Service) */}
        <div className="flex w-full max-w-[640px] flex-col gap-6">
          <Reveal className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
              Our System In Action
            </h2>
            <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)] italic">
              Recent project: All Clutch &amp; Brake Service.
            </p>
          </Reveal>

          <RevealGroup className="flex w-full flex-col gap-8">
            <RevealItem className="relative mt-3">
              <ProofBadge label="Brings In Customers" />
              <StatBlock />
            </RevealItem>
            <RevealItem className="relative mt-3">
              <ProofBadge label="Recommended By AI" />
              <ClickableImage
                src="/proof/chatgpt-recommendation.png"
                alt="ChatGPT recommending All Clutch & Brake Service"
              />
            </RevealItem>
            <RevealItem className="relative mt-3">
              <ProofBadge label="Ranks Top Of Google" />
              <ClickableImage
                src="/proof/google-search-result.png"
                alt="All Clutch & Brake Service ranking #1 on Google Search"
              />
            </RevealItem>
          </RevealGroup>
        </div>

        {/* CTA #1 — anchor-scroll to calculator */}
        <a
          href="#booking-form"
          className="w-fit rounded-[8px] bg-[var(--color-vermillion-signal)] px-6 py-4 text-center text-[14px] font-medium tracking-[0.025em] text-white uppercase transition-opacity hover:opacity-90 active:scale-[0.98] sm:text-[16px]"
        >
          Get My New Lead System
        </a>
      </div>
    </section>
  );
}
