"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/Reveal";

interface FaqItem {
  question: string;
  paragraphs: string[];
}

const faqItems: FaqItem[] = [
  {
    question: "I already rank well on Google. Don't I already come up?",
    paragraphs: [
      "Two different systems. Ranking on Google and being recommended by AI aren't the same thing, and plenty of shops sit at the top of Google and never get named by ChatGPT.",
      "Google shows you a list. AI picks one or two and skips everyone else. ChatGPT, Google AI, Claude etc. have their own criteria to determine which workshop to suggest to the user, which does not necessarily equal Google's algorithmic criteria.",
    ],
  },
  {
    question: "I'm already flat out. Why do I need this?",
    paragraphs: [
      "Then it's not about more jobs now - it's about making sure your bays aren't empty in 2027.",
      "In 12 months, the number of people using AI (ChatGPT etc.) to find businesses went from 6 people per 100 people to 45 people per 100 people.",
      "What this means is that, in the coming year(s) it's going to be almost everyone. And if AI isn't choosing your business to send those customers to, then you're already months behind.",
      "It's about getting ahead right now, and staying there before the whole internet search changes.",
    ],
  },
  {
    question: "How long until I see something?",
    paragraphs: [
      "This isn't ads — it doesn't switch on overnight. It builds and it compounds.",
      "That's why we work for a minimum 6 months. The goal isn't to get you there once. It's to get you there and keep you there.",
    ],
  },
  {
    question: 'What does "one shop per area" mean?',
    paragraphs: [
      "Exactly what it says. If we're working with you, we won't take your competitor down the road.",
      "The exclusivity allows us to protect your position at the top.",
    ],
  },
  {
    question: "Is AI search even real?",
    paragraphs: [
      "Yes. A year ago, 6 people in 100 used AI to find a local business. Today it's 45. That's not a prediction — that's what already happened, in twelve months.",
      "— BrightLocal, 2026 Local Consumer Review Survey",
    ],
  },
  {
    question: "What if AI changes and this stops working?",
    paragraphs: [
      "The tools change. What they look for doesn't.",
      "Google is changing the traditional search into AI Search in the future, permanently. Meaing that AI is going to be choosing which business to recommend for which person's problem. That's a near guaranteed change that's going to happen, even by Google's own omission",
      "Every one of them wants the same things: your details right everywhere, real reviews, a site that's clear about what you do. That was true before ChatGPT and it'll be true after whatever's next.",
    ],
  },
  {
    question: "Why not just use one of those cheap AI tools?",
    paragraphs: [
      "Those tools are dashboards. They tell you what's broken — they don't fix it.",
      "You'd still be rewriting your pages, fixing your details, and checking it every month. Forever. That's the actual job.",
      "We do the work. And we rebuild your site so it's built for this from the ground up — which no subscription can do.",
      "If you've got someone on staff with time to learn this and stay on it, a tool is genuinely cheaper. Most shops don't.",
    ],
  },
  {
    question: "What do I actually have to do?",
    paragraphs: [
      "Almost nothing. We need access to your Google listings (GBP etc.) and we'll build a brand new AI friendly website as well",
      "After that we build it, we run it, we track it, and you just take the calls.",
    ],
  },
  {
    question: "Do I really keep the website?",
    paragraphs: [
      "Yes. It's built for you, it's yours, and you keep it whether you stay with us or not.",
      "No hostage situation, no handover fee.",
    ],
  },
  {
    question: "What happens on the free AI check?",
    paragraphs: [
      "We look at what ChatGPT and Google AI currently say when someone asks for a shop like yours in your area.",
      "We'll see how your website's current ability to be recommended is like.",
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
            Questions Auto Shop Owners Ask Us
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
                          <p
                            key={paragraph}
                            className={
                              paragraph.startsWith("—")
                                ? "text-[13px] leading-[1.4] text-[var(--color-slate-500)] italic"
                                : "text-[16px] leading-[1.5] text-[var(--color-slate-600)]"
                            }
                          >
                            {paragraph}
                          </p>
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
