const guarantees = [
  "90-day money-back guarantee",
  "Cancel anytime. No lock-in contract.",
  "Your Google Ads account stays yours, always.",
];

export function PriceCluster() {
  return (
    <section className="w-full bg-[var(--color-vellum)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-14 text-center sm:px-10 sm:py-20">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[32px] leading-[1.2] font-bold tracking-[-0.6px] text-[var(--color-slate-900)] sm:text-[40px]">
            All-in-One Done-For-You System.
          </span>
          <span className="text-[18px] leading-[1.5] text-[var(--color-slate-600)]">
            Get 10 New Roofing Jobs Every Single Month.
          </span>
        </div>

        <ul className="flex flex-col gap-2">
          {guarantees.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-2 text-[15px] leading-[1.4] text-[var(--color-slate-700)]"
            >
              <span aria-hidden className="text-[var(--color-vermillion-signal)]">
                &#10003;
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#booking-form"
          className="w-fit rounded-[8px] bg-[var(--color-vermillion-signal)] px-8 py-4 text-[16px] font-medium tracking-[0.025em] text-white uppercase transition-opacity hover:opacity-90"
        >
          Book My Strategy Call
        </a>

        <p className="text-[13px] leading-[1.5] text-[var(--color-slate-600)]">
          We only work with one roofing business per area.
        </p>
      </div>
    </section>
  );
}
