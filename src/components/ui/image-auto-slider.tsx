"use client";

import Image from "next/image";
import { useMemo } from "react";

/** Fallback strip when no `images` prop is passed (Unsplash; includes plus.unsplash entries). */
export const IMAGE_AUTO_SLIDER_DEFAULT_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export type ImageAutoSliderProps = {
  /** Photo URLs; duplicated internally for a seamless loop. */
  images?: string[];
  /** Used in each image `alt` (e.g. package title). */
  altPrefix?: string;
  className?: string;
  /** Full loop duration in seconds (larger = slower). */
  durationSec?: number;
  gapClassName?: string;
};

/**
 * Horizontal infinite auto-scroll gallery with edge fade mask.
 * Styles: `globals.css` (`.image-auto-slider__*`).
 */
export function ImageAutoSlider({
  images,
  altPrefix = "Gallery",
  className = "",
  durationSec = 32,
  gapClassName = "gap-4 md:gap-6",
}: ImageAutoSliderProps) {
  const source = images?.length ? images : IMAGE_AUTO_SLIDER_DEFAULT_IMAGES;

  const loop = useMemo(() => [...source, ...source], [source]);

  return (
    <div
      className={`image-auto-slider-root relative w-full overflow-hidden ${className}`}
      style={
        {
          "--image-auto-slider-duration": `${durationSec}s`,
        } as React.CSSProperties
      }
    >
      <div className="image-auto-slider__mask py-2 md:py-3">
        <div className={`image-auto-slider__track flex w-max ${gapClassName}`}>
          {loop.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-44 w-44 shrink-0 overflow-hidden rounded-xl border border-[#CAF0F8] shadow-lg shadow-[#0077B6]/10 transition duration-300 [transition-property:transform,filter] hover:z-10 hover:scale-105 hover:brightness-110 md:h-56 md:w-56 lg:h-72 lg:w-72"
            >
              <Image
                src={src}
                alt={`${altPrefix} — photo ${(index % source.length) + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 176px, (max-width: 1024px) 224px, 288px"
                loading={index < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Alias matching the snippet export name for demos or quick tests. */
export const Component = ImageAutoSlider;
