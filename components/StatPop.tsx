'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

export default function StatPop({ children, className = '', style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`stat-pop${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`} style={style}>
      {children}
    </div>
  );
}
