const urgencyPoints = [
  "Homeowners are already searching Google AI and ChatGPT for roofers.",
  "Google's search bar is turning into an AI search bar in the next 12 months.",
  "ChatGPT alone gets 2.5 billion questions a day.",
  "If you're not optimised for AI, another roofer will be recommended instead.",
  "We're including it free of charge - for a limited time only",
];

export function AeoUrgency() {
  return (
    <section className="w-full bg-[var(--color-vellum)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-12 text-center sm:px-10 sm:py-16">
        <div className="flex w-fit flex-col items-center gap-2">
          <span className="w-fit rounded-[8px] border border-[var(--color-cloud)] px-3 py-1 text-[12px] font-medium tracking-[0.3px] text-[var(--color-slate-600)] uppercase">
            AEO
          </span>
          <h2 className="text-[20px] leading-[1.3] font-bold text-[var(--color-slate-900)] sm:text-[24px]">
            Why This Matters For You
          </h2>
        </div>

        <ul className="flex flex-col gap-2">
          {urgencyPoints.map((point) => (
            <li
              key={point}
              className="flex items-center justify-center gap-2 text-[15px] leading-[1.4] text-[var(--color-slate-700)]"
            >
              <span aria-hidden className="text-[var(--color-vermillion-signal)]">
                &#10003;
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
