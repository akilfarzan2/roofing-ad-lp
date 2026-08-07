import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-paper)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4 px-6 py-10 sm:px-10">
        <Image
          src="/monarc-logo.png"
          alt="Monarc Labs"
          width={910}
          height={794}
          className="h-[52px] w-auto sm:h-[60px]"
        />
        <p className="text-[13px] leading-[1.5] text-[var(--color-slate-600)]">
          &copy; Copyright Monarc Labs 2026
        </p>
      </div>
    </footer>
  );
}
