'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SELECTOR = 'main section:not([data-no-scroll-fade]), main header:not([data-no-scroll-fade])';
const MIN_OPACITY = 0.2;
// Fraction of the window a section's top travels (up from the bottom edge) to reach full opacity.
const FADE_DISTANCE = 0.6;

/**
 * Sections below the fold start faint and brighten as they scroll up into view.
 * One-way: once a section is fully visible it stays that way. Sections already
 * on screen at load are left alone (no flash), and nothing happens without JS
 * or under prefers-reduced-motion. Mounted once in app/layout.tsx.
 */
export default function ScrollFade() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let pending = [...document.querySelectorAll<HTMLElement>(SELECTOR)].filter(
      (el) => el.getBoundingClientRect().top > innerHeight * 0.85
    );
    if (!pending.length) return;

    for (const el of pending) {
      el.style.opacity = String(MIN_OPACITY);
      el.style.transition = 'opacity .25s linear';
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      // Sections near the end can't scroll far enough up, so finish everything at the bottom of the page.
      const atBottom = scrollY + innerHeight >= document.documentElement.scrollHeight - 2;
      pending = pending.filter((el) => {
        const progress = atBottom ? 1 : Math.min(1, Math.max(0, (innerHeight - el.getBoundingClientRect().top) / (innerHeight * FADE_DISTANCE)));
        const opacity = Math.max(Number(el.style.opacity), MIN_OPACITY + (1 - MIN_OPACITY) * progress);
        el.style.opacity = String(opacity);
        if (opacity < 1) return true;
        el.style.removeProperty('opacity');
        el.style.removeProperty('transition');
        return false;
      });
      if (!pending.length) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      for (const el of pending) { el.style.removeProperty('opacity'); el.style.removeProperty('transition'); }
    };
  }, [pathname]);

  return null;
}
