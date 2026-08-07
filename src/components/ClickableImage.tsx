"use client";

import { useState } from "react";
import Image from "next/image";

// Proof screenshots sit inside a max-w-[640px] column with 24px side padding,
// so they never render wider than ~592px. Telling the optimiser this keeps
// phones from downloading desktop-sized variants.
const IMAGE_SIZES = "(max-width: 640px) 100vw, 592px";

// These screenshots are the proof — text inside them has to stay readable,
// so we trade a little file size for legibility.
const IMAGE_QUALITY = 90;

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  fit?: "contain" | "cover";
  cropPosition?: "center" | "left";
  aspectRatio?: string;
}

export function ClickableImage({
  src,
  alt,
  width,
  height,
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
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={IMAGE_SIZES}
            quality={IMAGE_QUALITY}
            className={`w-full object-cover ${cropPosition === "left" ? "object-left" : "object-center"}`}
            style={{ aspectRatio }}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={IMAGE_SIZES}
            quality={IMAGE_QUALITY}
            className="h-auto max-h-[600px] w-full object-contain"
          />
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
          {/* Same src, sizes and quality as the thumbnail so the enlarged view
              is served from cache and opens instantly. */}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={IMAGE_SIZES}
            quality={IMAGE_QUALITY}
            className="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-[8px] object-contain"
          />
        </div>
      )}
    </div>
  );
}
