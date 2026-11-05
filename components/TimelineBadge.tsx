'use client';

import { useInView } from '@/hooks/useInView';

export default function TimelineBadge({ number }: { number: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`timeline__badge${inView ? ' lit' : ''}`}>
      {number}
    </div>
  );
}
