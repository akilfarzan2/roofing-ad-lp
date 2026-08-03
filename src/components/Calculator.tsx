"use client";

import { useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Reveal } from "@/components/Reveal";

const INDUSTRY_AVERAGE_JOB_VALUE = 800;
const EXTRA_JOBS_PER_MONTH = 10;

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function Calculator() {
  const [jobValue, setJobValue] = useState<number>(1000);

  const safeJobValue = Number.isFinite(jobValue) && jobValue > 0 ? jobValue : 0;
  const monthlyExtra = safeJobValue * EXTRA_JOBS_PER_MONTH;
  const yearlyExtra = monthlyExtra * 12;

  const baselineMonthly = INDUSTRY_AVERAGE_JOB_VALUE * EXTRA_JOBS_PER_MONTH;
  const baselineYearly = baselineMonthly * 12;

  const barMax = Math.max(monthlyExtra, baselineMonthly, 1);
  const industryBarWidth = (baselineMonthly / barMax) * 100;
  const yourBarWidth = (monthlyExtra / barMax) * 100;

  return (
    <section id="calculator" className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-6 py-12 sm:px-10 sm:py-16">
        <Reveal>
          <h2 className="max-w-[560px] text-center text-[24px] leading-[1.3] font-bold tracking-[-0.4px] text-[var(--color-slate-900)] sm:text-[30px] sm:leading-[1.33]">
            See What Just 10 More Jobs A Month Could Mean For You.
          </h2>
        </Reveal>

        <div className="flex w-full max-w-[320px] flex-col gap-2">
          <label
            htmlFor="job-value"
            className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]"
          >
            Type in your average job value
          </label>
          <div className="flex h-12 items-center gap-1 rounded-[8px] border border-[var(--color-cloud)] bg-[var(--color-paper)] px-4 focus-within:border-[var(--color-slate-900)]">
            <span className="text-[16px] text-[var(--color-mist)]">$</span>
            <input
              id="job-value"
              type="number"
              min={0}
              step={100}
              value={jobValue}
              onChange={(event) => setJobValue(Number(event.target.value))}
              className="w-full bg-transparent text-[16px] leading-[1.5] text-[var(--color-slate-900)] outline-none"
            />
          </div>
        </div>

        <div className="grid w-full max-w-[480px] grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-[12px] font-medium tracking-[0.3px] text-[var(--color-vermillion-signal)] uppercase">
              Your extra revenue
            </span>
            <AnimatedNumber
              value={monthlyExtra}
              format={formatCurrency}
              className="text-[36px] leading-[1.1] font-light tracking-[-0.8px] text-[var(--color-slate-900)] sm:text-[48px]"
            />
            <span className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
              extra per month
            </span>
            <AnimatedNumber
              value={yearlyExtra}
              format={formatCurrency}
              className="mt-2 text-[24px] leading-[1.3] font-normal text-[var(--color-slate-900)]"
            />
            <span className="text-[14px] leading-[1.43] text-[var(--color-slate-600)]">
              per year
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <span className="text-[12px] font-medium tracking-[0.3px] text-[var(--color-slate-600)] uppercase">
              Industry average (${INDUSTRY_AVERAGE_JOB_VALUE}/job)
            </span>
            <span className="text-[28px] leading-[1.1] font-light tracking-[-0.6px] text-[var(--color-slate-600)] sm:text-[32px]">
              {formatCurrency(baselineMonthly)}
            </span>
            <span className="text-[13px] leading-[1.43] text-[var(--color-slate-600)]">
              extra per month
            </span>
            <span className="mt-2 text-[16px] leading-[1.3] text-[var(--color-slate-600)]">
              {formatCurrency(baselineYearly)}
            </span>
            <span className="text-[13px] leading-[1.43] text-[var(--color-slate-600)]">
              per year
            </span>
          </div>
        </div>

        <div className="flex w-full max-w-[420px] flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between text-[14px] text-[var(--color-slate-600)]">
              <span>Industry average revenue per month</span>
              <span>{formatCurrency(baselineMonthly)}</span>
            </div>
            <div className="h-3 w-full rounded-[8px] bg-[var(--color-frost)]">
              <div
                className="h-3 rounded-[8px] bg-[var(--color-cloud)] transition-[width] duration-500 ease-out"
                style={{ width: `${Math.max(industryBarWidth, 2)}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between text-[14px] text-[var(--color-slate-600)]">
              <span>Your revenue per month</span>
              <span>{formatCurrency(monthlyExtra)}</span>
            </div>
            <div className="h-3 w-full rounded-[8px] bg-[var(--color-frost)]">
              <div
                className="h-3 rounded-[8px] bg-[var(--color-vermillion-signal)] transition-[width] duration-500 ease-out"
                style={{ width: `${Math.max(yourBarWidth, 2)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
