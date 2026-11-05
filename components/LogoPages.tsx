'use client';

import Image from 'next/image';
import { useAutoAdvance } from '@/hooks/useAutoAdvance';
import { SlideDots } from './ImageSlideshow';

export type Logo = { src: string; name: string };

/**
 * App icons with names, in pages of `perPage`. Icons pop in one by one when a
 * page appears; with more than one page it auto-advances like ImageSlideshow
 * (same timing, dots, and pausing).
 */
export default function LogoPages({ items, caption, perPage = 3 }: { items: Logo[]; caption?: string; perPage?: number }) {
  const pages = Array.from({ length: Math.ceil(items.length / perPage) }, (_, p) => items.slice(p * perPage, (p + 1) * perPage));
  const count = pages.length;
  const { ref, index, setIndex, seen, pauseHandlers } = useAutoAdvance<HTMLElement>(count);
  const prev = (index - 1 + count) % count;

  return (
    <figure ref={ref} className="cs-figure" {...pauseHandlers}>
      <div className="logo-row">
        {pages.map((page, p) => (
          <div
            key={p}
            className={`logo-page${seen && p === index ? ' is-active' : count > 1 && p === prev ? ' is-leaving' : ''}`}
            aria-hidden={p !== index}
          >
            {page.map((l) => (
              <div key={l.src} className="logo-row__item">
                {/* The name is printed underneath, so the icon itself is decorative. */}
                <Image src={l.src} alt="" width={96} height={96} />
                <span className="label">{l.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {(count > 1 || caption) && (
        <div className="slideshow__footer">
          {count > 1 && <SlideDots count={count} index={index} onSelect={setIndex} />}
          {caption && <figcaption className="body-sm muted">{caption}</figcaption>}
        </div>
      )}
    </figure>
  );
}
