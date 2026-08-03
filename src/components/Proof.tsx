import { ClickableImage } from "@/components/ClickableImage";

function StatBlock() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-vellum)] px-4 py-8 text-center">
      <span className="text-[32px] leading-[1.1] font-light tracking-[-0.6px] text-[var(--color-slate-900)] sm:text-[36px]">
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
        <div className="flex w-full max-w-[900px] flex-col gap-6 rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-paper)] p-6 sm:p-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-[16px] leading-[1.5] font-semibold text-[var(--color-slate-900)]">
              Our system brings in customers, gets you to the top of Google, and gets you recommended by AI.
            </p>
            <p className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
              Here&apos;s a recent project - All Clutch &amp; Brake Service.
            </p>
          </div>

          <div className="flex w-full flex-col gap-6">
            <StatBlock />
            <ClickableImage
              src="/proof/chatgpt-recommendation.png"
              alt="ChatGPT recommending All Clutch & Brake Service"
              caption="ChatGPT recommends them first."
            />
            <ClickableImage
              src="/proof/google-search-result.png"
              alt="All Clutch & Brake Service ranking #1 on Google Search"
              caption="Ranks #1 on Google Search."
            />
          </div>
        </div>

        {/* CTA #1 — anchor-scroll to calculator */}
        <a
          href="#booking-form"
          className="w-fit rounded-[8px] bg-[var(--color-vermillion-signal)] px-6 py-4 text-center text-[14px] font-medium tracking-[0.025em] text-white uppercase transition-opacity hover:opacity-90 sm:text-[16px]"
        >
          Get My New Lead System
        </a>
      </div>
    </section>
  );
}
