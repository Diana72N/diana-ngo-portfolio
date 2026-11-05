'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Shared timing for auto-advancing slideshows: steps through `count` items every
 * `interval` ms while at least 40% on screen, pauses on hover/focus, and never
 * auto-advances under prefers-reduced-motion. `seen` turns true the first time
 * it scrolls into view (use it to hold entrance animations until then).
 */
export function useAutoAdvance<T extends HTMLElement>(count: number, interval = 3500) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [seen, setSeen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<T>(null);

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
    const io = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
      if (entry.isIntersecting) setSeen(true);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // A fresh timer per slide, so clicking a dot always gets a full interval before the next change.
  useEffect(() => {
    if (count < 2 || paused || !onScreen || reducedMotion) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(t);
  }, [index, count, interval, paused, onScreen, reducedMotion]);

  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false)
  };

  return { ref, index, setIndex, seen, pauseHandlers };
}
