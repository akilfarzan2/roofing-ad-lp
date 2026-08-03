"use client";

import { useState } from "react";

interface ClickableImageProps {
  src: string;
  alt: string;
  caption?: string;
  fit?: "contain" | "cover";
  cropPosition?: "center" | "left";
  aspectRatio?: string;
}

export function ClickableImage({
  src,
  alt,
  caption,
  fit = "contain",
  cropPosition = "center",
  aspectRatio = "4/3",
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-[8px] border border-[var(--color-frost)] bg-[var(--color-vellum)] p-1.5"
      >
        {fit === "cover" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className={`w-full object-cover ${cropPosition === "left" ? "object-left" : "object-center"}`}
            style={{ aspectRatio }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="max-h-[600px] w-full object-contain" />
        )}
      </button>
      {caption && (
        <span className="text-center text-[14px] leading-[1.43] text-[var(--color-slate-700)]">{caption}</span>
      )}

      {isOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close enlarged image"
          onClick={() => setIsOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape" || event.key === "Enter") setIsOpen(false);
          }}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-[var(--color-slate-900)]/90 p-6"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded-[8px] object-contain"
          />
        </div>
      )}
    </div>
  );
}
