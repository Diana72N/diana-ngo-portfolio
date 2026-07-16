'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function TimelineBadge({ number, last = false }: { number: number; last?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setSettled(true), 260);
    return () => clearTimeout(t);
  }, [inView]);

  const cls = [
    'timeline-badge',
    inView && (last ? 'lit-last' : 'lit'),
    inView && settled && 'settled'
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      className={cls}
      style={{ position: 'absolute', left: -58, top: 0, width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--cream)' }}>{number}</span>
    </div>
  );
}
