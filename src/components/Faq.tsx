"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/Reveal";

interface FaqSection {
  heading: string;
  items: string[];
}

interface FaqItem {
  question: string;
  paragraphs: string[];
  sections?: FaqSection[];
}

const faqItems: FaqItem[] = [
  {
    question: "What if I'm not satisfied with the results?",
    paragraphs: [
      "That's exactly why we offer a 90-day money-back guarantee. Not happy? You get your money back — no lock-in contract, and you keep your Google Ads account either way.",
    ],
  },
  {
    question: "How long does it take to get results?",
    paragraphs: [
      "You can expect leads within the first 2-3 weeks with Google Ads. The first 2 months are spent optimising your campaigns and landing page — targeting, budget, and messaging — until the flow of leads is consistent.",
      "Local SEO and AEO take longer — around 6 months to reach their best results. Once optimised, you'll sit near the top of search results and stay there for years, not just while you're paying for ads.",
    ],
  },
  {
    question: "Will this actually work for my area or my kind of business?",
    paragraphs: [
      "Ads target your specific suburb and service area, not a generic national campaign. SEO and AEO build around your actual business listing and reviews — not a template. This isn't one-size-fits-all; it's built around wherever you're based and whatever jobs you actually want more of.",
    ],
  },
  {
    question: "Is AI search even real?",
    paragraphs: [
      "Yes — and it's growing fast. Google is turning its own search bar into an AI interface, not just adding AI on the side. Soon, AI decides who gets recommended, not just search rankings. If your business isn't ready for that, you lose the job to whoever is.",
    ],
  },
  {
    question: "Why not just run Ads alone?",
    paragraphs: [
      "Ads get you seen the moment you turn them on — and disappear the moment you turn them off. SEO and AEO build visibility that sticks around, so you're not starting from zero every time you pause your spend. Running all three together covers you short-term and long-term, not just one or the other.",
    ],
  },
  {
    question: "What exactly is included?",
    paragraphs: [],
    sections: [
      {
        heading: "Google Ads",
        items: [
          'High-intent keyword targeting ("roof replacement near me," "[suburb] roofer") — not broad, wasteful terms',
          "Competitor-differentiated offer crafting",
          "A dedicated campaign landing page, not your homepage",
          "Call tracking",
        ],
      },
      {
        heading: "Local SEO",
        items: [
          "Google Business Profile optimisation — categories, services, photos, posting cadence",
          "Citation building — consistent listings across the directories AI and search pull from",
          "Review-content strategy — customers mentioning specific jobs, not just star ratings",
        ],
      },
      {
        heading: "AEO",
        items: [
          "Schema markup — structured data AI models read directly",
          "Entity consistency — your name, address, and phone matched everywhere AI cross-checks",
          "Answer-first content — FAQ-style pages written to directly answer what people ask ChatGPT and Google AI",
          "AI-mention tracking — checking whether you're actually showing up, and fixing it if not",
        ],
      },
    ],
  },
  {
    question: "Why are you different from other agencies?",
    paragraphs: [
      "Other agencies only offer Ads or SEO — sometimes one after the other. None offer AEO right now.",
      "We run all three together from day one, backed by a 90-day money-back guarantee and no lock-in contract. That means results now with Google Ads, and lasting visibility with Local SEO long after you stop running ads.",
    ],
  },
  {
    question: "Do I need to do anything on my end?",
    paragraphs: [
      "We require access to your Google Ads account, Website and Google Business Profile. We handle setup, campaigns, content, and reporting from there. You don't need to learn SEO, write anything, or manage a single ad - it's all done-for-you",
    ],
  },
  {
    question: "What happens on the strategy call?",
    paragraphs: [
      "We look at your business, your area, and what you're currently doing — then tell you honestly whether this fits. No script, no pressure. If it's not a fit, we'll tell you that too instead of trying to close you anyway.",
    ],
  },
  {
    question: "What if I need to cancel?",
    paragraphs: [
      "Cancel anytime. No contract, no exit fee, no runaround. Your Google Ads account is yours — you keep full access and history even if you leave.",
    ],
  },
  {
    question: "We've been burned by an agency before.",
    paragraphs: [
      'We get it — a lot of roofers have been burned by agencies that overpromised and went quiet. That\'s exactly why everything\'s laid out upfront: what we do, itemized, every month, with real reporting — not a vague "trust us." You\'ll always know exactly what\'s being done and why.',
    ],
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <h2 className="text-center text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
            Questions Roofers Ask Us
          </h2>
        </Reveal>

        <Reveal className="flex flex-col gap-2">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-[var(--color-frost)]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-[16px] leading-[1.4] font-semibold text-[var(--color-slate-900)] sm:text-[18px]">
                  {item.question}
                </span>
                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[20px] leading-none text-[var(--color-slate-600)]"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 pb-4">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-[16px] leading-[1.5] text-[var(--color-slate-600)]">
                          {paragraph}
                        </p>
                      ))}
                      {item.sections?.map((section) => (
                        <div key={section.heading} className="flex flex-col gap-2">
                          <h4 className="text-[15px] leading-[1.4] font-semibold text-[var(--color-slate-900)]">
                            {section.heading}
                          </h4>
                          <ul className="flex flex-col gap-1.5">
                            {section.items.map((sectionItem) => (
                              <li
                                key={sectionItem}
                                className="flex gap-2 text-[15px] leading-[1.5] text-[var(--color-slate-600)]"
                              >
                                <span aria-hidden>&ndash;</span>
                                <span>{sectionItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        </Reveal>
      </div>
    </section>
  );
}
