import { ReactNode } from 'react';
import Reveal from './Reveal';
import TimelineBadge from './TimelineBadge';

export function TimelineList({ children }: { children: ReactNode }) {
  return <div className="timeline">{children}</div>;
}

export function TimelineStep({
  number,
  title,
  children,
  marginBottom = 64
}: {
  number: number;
  title: string;
  children: ReactNode;
  last?: boolean;
  marginBottom?: number;
}) {
  // The gap lines each step up with its screenshot on desktop; CSS collapses it when stacked.
  return (
    <Reveal className="timeline__step" style={{ '--step-gap': `${marginBottom}px` } as React.CSSProperties}>
      <TimelineBadge number={number} />
      <h3 className="subheading timeline__title">{title}</h3>
      <p className="body-sm muted">{children}</p>
    </Reveal>
  );
}
