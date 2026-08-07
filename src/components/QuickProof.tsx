import { ClickableImage } from "@/components/ClickableImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

function ProofBadge({ label }: { label: string }) {
  return (
    <span className="absolute -top-3 right-4 z-10 rounded-[8px] bg-[var(--color-carbon)] px-3 py-1.5 text-[12px] leading-[1.4] font-medium tracking-[0.3px] whitespace-nowrap text-white shadow-[var(--shadow-subtle)]">
      {label}
    </span>
  );
}

export function QuickProof() {
  return (
    <>
      <section className="w-full bg-[var(--color-vellum)]">
        <div className="mx-auto flex w-full max-w-[640px] flex-col gap-8 px-6 py-12 sm:px-10 sm:py-16">
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
            This Actually Happened
          </h2>
          <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)] italic">
            A real ChatGPT conversation. Nobody paid for this.
          </p>
        </Reveal>

        <RevealGroup className="flex w-full flex-col gap-8">
          <RevealItem className="relative mt-3">
            <ProofBadge label="Recommended By ChatGPT" />
            <ClickableImage
              src="/proof/cgpt-phone-number.png"
              alt="ChatGPT naming All Clutch & Brake Service as its top recommendation"
              width={547}
              height={602}
              fit="contain"
              caption="It didn't list ten shops. It picked one."
            />
          </RevealItem>
          <RevealItem className="relative mt-3">
            <ProofBadge label="Provides Phone Number To Call" />
            <ClickableImage
              src="/proof/cgpt-recommended.png"
              alt="ChatGPT ranking All Clutch & Brake Service first and providing their phone number"
              width={561}
              height={632}
              fit="contain"
              caption="This is the number it hands out. Every time someone asks."
            />
          </RevealItem>
          <RevealItem className="relative mt-3">
            <ProofBadge label="Gives Directions To The Door" />
            <ClickableImage
              src="/proof/cgpt-directions.png"
              alt="ChatGPT giving turn-by-turn directions straight to All Clutch & Brake Service"
              width={547}
              height={596}
              fit="contain"
              caption="It doesn't just recommend them. It walks the customer to their door."
            />
          </RevealItem>
        </RevealGroup>

        <Reveal className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-[20px] leading-[1.3] font-bold tracking-[-0.3px] text-[var(--color-slate-900)] sm:text-[24px]">
            And It&apos;s Not Just ChatGPT
          </h3>
          <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)] italic">
            Google&apos;s own AI says the same thing.
          </p>
        </Reveal>

        <Reveal className="relative mt-3">
          <ProofBadge label="Also Recommended By Google AI" />
          <ClickableImage
            src="/proof/google-ai-overview.png"
            alt="Google AI Overview naming All Clutch & Brake Service as a top local clutch repair option"
            width={955}
            height={572}
            fit="contain"
            caption="Same shop. Different AI. Still picked first."
          />
        </Reveal>

        <Reveal className="mt-4 flex w-full flex-col items-center gap-4 rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-paper)] px-6 py-10 text-center sm:px-10">
          <h3 className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
            Here&apos;s What That&apos;s Costing You
          </h3>

          <div className="flex flex-col gap-1">
            <p className="text-[18px] leading-[1.5] text-[var(--color-slate-900)]">
              Say a clutch job is <strong>$800</strong>.
            </p>
            <p className="text-[18px] leading-[1.5] text-[var(--color-slate-900)]">
              Say only <strong>three</strong> people a month ask AI and get sent somewhere else.
            </p>
          </div>

          <p className="text-[28px] leading-[1.15] font-bold tracking-[-0.6px] text-[var(--color-vermillion-signal)] sm:text-[36px]">
            That&apos;s $2,400 a month.
            <br />
            $28,800 a year.
          </p>

          <p className="text-[18px] leading-[1.5] text-[var(--color-slate-900)]">
            Gone. To a shop that isn&apos;t better than yours.
          </p>

          <p className="text-[16px] leading-[1.5] text-[var(--color-slate-600)] italic">
            And that&apos;s if it&apos;s only three.
          </p>
        </Reveal>
        </div>
      </section>

      <section className="w-full bg-[var(--color-carbon)]">
        <Reveal className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-2 px-6 py-14 text-center sm:px-10 sm:py-16">
          <p className="text-[22px] leading-[1.4] font-bold text-white sm:text-[28px]">
            A year ago, 6 people in 100 used AI to find a local business. Today, it&apos;s 45 out of 100.
          </p>
          <p className="text-[13px] leading-[1.4] text-white/50 italic">
            — BrightLocal, 2026 Local Consumer Review Survey
          </p>

          <a
            href="#booking-form"
            className="mt-4 w-fit rounded-[8px] bg-[var(--color-vermillion-signal)] px-6 py-4 text-center text-[14px] font-medium tracking-[0.025em] text-white uppercase transition-opacity hover:opacity-90 active:scale-[0.98] sm:text-[16px]"
          >
            Make AI Recommend Me 
          </a>
        </Reveal>
      </section>
    </>
  );
}
