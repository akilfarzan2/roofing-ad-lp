import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const otherAgenciesItems = [
  "Separate vendor for Ads",
  "Separate vendor for SEO",
  "AEO not offered",
  "$2–3k/month, plus setup fees",
];

const monarcLabsItems = ["Ads included", "SEO included", "AEO included"];

export function ComparisonTable() {
  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <h2 className="text-center text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
            Other Agencies vs. Monarc Labs
          </h2>
        </Reveal>

        <RevealGroup className="grid w-full max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
          <RevealItem className="flex flex-col gap-3 rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-paper)] p-6">
            <span className="text-[12px] font-medium tracking-[0.3px] text-[var(--color-iron)] uppercase">
              Other Agencies
            </span>
            <ul className="flex flex-col gap-2">
              {otherAgenciesItems.map((item) => (
                <li key={item} className="text-[15px] leading-[1.4] text-[var(--color-iron)]">
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>

          <RevealItem className="flex flex-col gap-3 rounded-[8px] border-2 border-[var(--color-slate-900)] bg-[var(--color-vellum)] p-6">
            <span className="text-[12px] font-medium tracking-[0.3px] text-[var(--color-vermillion-signal)] uppercase">
              Monarc Labs
            </span>
            <ul className="flex flex-col gap-2">
              {monarcLabsItems.map((item) => (
                <li key={item} className="text-[15px] leading-[1.4] font-semibold text-[var(--color-slate-900)]">
                  {item}
                </li>
              ))}
              <li className="text-[16px] leading-[1.4] font-bold text-[var(--color-slate-900)]">
                One System - No Setup Cost
              </li>
            </ul>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
