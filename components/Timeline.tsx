import { ReactNode } from 'react';
import Reveal from './Reveal';
import TimelineBadge from './TimelineBadge';

export function TimelineList({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 58 }}>
      <div style={{ position: 'absolute', left: 17, top: 6, bottom: 6, width: 2, background: 'rgba(72,22,32,0.15)' }} />
      {children}
    </div>
  );
}

export function TimelineStep({
  number,
  title,
  children,
  last = false,
  marginBottom = 64
}: {
  number: number;
  title: string;
  children: ReactNode;
  last?: boolean;
  marginBottom?: number;
}) {
  return (
    <Reveal style={{ position: 'relative', marginBottom: last ? 0 : marginBottom }}>
      <TimelineBadge number={number} last={last} />
      <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--maroon)', marginBottom: 8 }}>{title}</div>
      <p style={{ fontSize: 15, color: 'var(--maroon)', opacity: 0.65, lineHeight: 1.7 }}>{children}</p>
    </Reveal>
  );
}
