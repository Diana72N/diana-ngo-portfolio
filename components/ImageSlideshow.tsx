'use client';

import Image from 'next/image';
import { useAutoAdvance } from '@/hooks/useAutoAdvance';

export type SlideshowImage = { src: string; alt: string; width: number; height: number; caption?: string };

/**
 * Shows one image at a time and auto-advances with a quick fade-and-slide.
 * Images are letterboxed (never cropped) on an ink background, so dark images
 * of slightly different shapes sit cleanly in one frame. Square dots switch
 * slides. Timing/pausing: hooks/useAutoAdvance.ts.
 */
export default function ImageSlideshow({ images, label }: { images: SlideshowImage[]; label: string }) {
  const count = images.length;
  const { ref, index, setIndex, pauseHandlers } = useAutoAdvance<HTMLElement>(count);
  const prev = (index - 1 + count) % count;

  return (
    <figure ref={ref} className="cs-figure slideshow" aria-label={label} aria-roledescription="slideshow" {...pauseHandlers}>
      <div className="frame slideshow__frame">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`slideshow__slide${i === index ? ' is-active' : i === prev ? ' is-leaving' : ''}`}
            aria-hidden={i !== index}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 860px) 100vw, 700px" />
          </div>
        ))}
      </div>
      <div className="slideshow__footer">
        <SlideDots count={count} index={index} onSelect={setIndex} />
        {images[index].caption && <figcaption className="body-sm muted">{images[index].caption}</figcaption>}
      </div>
    </figure>
  );
}

export function SlideDots({ count, index, onSelect }: { count: number; index: number; onSelect: (i: number) => void }) {
  return (
    <div className="slideshow__dots">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`slideshow__dot${i === index ? ' is-active' : ''}`}
          aria-label={`Show ${i + 1} of ${count}`}
          aria-current={i === index ? 'true' : undefined}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
