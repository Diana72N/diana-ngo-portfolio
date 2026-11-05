'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export type PhoneStackImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Short name shown under the stack while this screen is in front, e.g. "Profile". */
  label?: string;
};

const INTERVAL = 3200;

/**
 * Fanned stack of phone screens: one in front, the next tilted behind it on the
 * right and the previous on the left; any others wait hidden behind the front.
 * Every few seconds everything shifts one place left: the right screen comes to
 * the front, the front moves to the left, and the next hidden one appears on the right. Clicking a screen brings it to the front. Pauses on hover/focus and
 * when scrolled off-screen; stays still under prefers-reduced-motion.
 * Screens should share an aspect ratio (the first image sets the shape).
 */
export default function PhoneStack({ images, label }: { images: PhoneStackImage[]; label: string }) {
  const [front, setFront] = useState(0);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const count = images.length;

  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !onScreen || reducedMotion) return;
    const t = setInterval(() => setFront((f) => (f + 1) % count), INTERVAL);
    return () => clearInterval(t);
  }, [paused, onScreen, reducedMotion, count]);

  return (
    <figure
      ref={ref}
      className="phone-stack"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="phone-stack__stage">
        {images.map((img, i) => {
          // front / right (next) / left (previous) / hidden (everything else)
          const offset = (i - front + count) % count;
          const pos = offset === 0 ? 'front' : offset === 1 ? 'right' : offset === count - 1 ? 'left' : 'hidden';
          return (
            <button
              key={img.src}
              type="button"
              className="phone-stack__phone"
              data-pos={pos}
              style={{ aspectRatio: `${images[0].width} / ${images[0].height}` }}
              aria-label={`Show ${img.label ?? `screen ${i + 1}`}`}
              aria-pressed={pos === 'front'}
              tabIndex={pos === 'hidden' ? -1 : undefined}
              aria-hidden={pos === 'hidden' || undefined}
              onClick={() => setFront(i)}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 860px) 50vw, 340px" priority={i === 0 || i === 1 || i === count - 1} />
            </button>
          );
        })}
      </div>
      {images[front].label && <figcaption className="label muted">{images[front].label}</figcaption>}
    </figure>
  );
}
