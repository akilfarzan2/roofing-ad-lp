import {
  Sparkle,
  MapPinLine,
  Storefront,
  ListChecks,
  MagnifyingGlass,
  GlobeSimple,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

interface IncludedItem {
  heading: string;
  copy: string;
  icon: Icon;
}

const coreItems: IncludedItem[] = [
  {
    heading: "AI Recommendation Setup",
    copy: "We get your business structured so ChatGPT and Google's AI can confidently say your name. Not guess. Say it.",
    icon: Sparkle,
  },
  {
    heading: "AI Map Pack Ranking",
    copy: "Top of the map AI shows when someone nearby asks. Covers your local pack and map pack too.",
    icon: MapPinLine,
  },
  {
    heading: "Google Business Profile, Fully Built Out",
    copy: "The listing AI reads before it recommends anyone.",
    icon: Storefront,
  },
  {
    heading: "Same Details Everywhere",
    copy: "Same name, same number, same address on your site, your listing, every directory. When they don't match, AI skips you — doesn't trust you.",
    icon: ListChecks,
  },
  {
    heading: "Monthly AI Check",
    copy: "Every month we ask the AIs who they're recommending. If it's not you, we know before you do.",
    icon: MagnifyingGlass,
  },
];

const bonusItems: IncludedItem[] = [
  {
    heading: "Brand New Website, Built For AI",
    copy: "Not a redesign. Rebuilt so ChatGPT and Google AI can actually read what you do. You keep the website — whether you stay with us or not.",
    icon: GlobeSimple,
  },
  {
    heading: "Call Tracking + Traffic Tracking",
    copy: "Comes with the new site. You see exactly what's coming in.",
    icon: ChartLineUp,
  },
];

function IncludedRow({ item }: { item: IncludedItem }) {
  const IconComponent = item.icon;
  return (
    <div className="flex items-start gap-4 text-left">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-vellum)]">
        <IconComponent size={20} weight="bold" className="text-[var(--color-vermillion-signal)]" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="text-[18px] leading-[1.4] font-semibold text-[var(--color-slate-900)]">
          {item.heading}
        </h3>
        <p className="text-[14px] leading-[1.5] text-[var(--color-slate-600)]">{item.copy}</p>
      </div>
    </div>
  );
}

export function DeepProcess() {
  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col gap-10 px-6 py-12 sm:px-10 sm:py-16">
        <Reveal className="text-center">
          <h2 className="text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
            What&apos;s Included
          </h2>
        </Reveal>

        <RevealGroup className="flex w-full flex-col gap-7">
          {coreItems.map((item) => (
            <RevealItem key={item.heading}>
              <IncludedRow item={item} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="flex w-full flex-col gap-6 rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-vellum)] p-6 sm:p-8">
          <p className="text-center text-[13px] leading-[1.4] font-medium tracking-[0.3px] text-[var(--color-vermillion-signal)] uppercase">
            Bonus — Included. Limited Time Offer.
          </p>
          <div className="flex flex-col gap-6">
            {bonusItems.map((item) => (
              <IncludedRow key={item.heading} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
