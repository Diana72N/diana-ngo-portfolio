'use client';

import { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * When the group scrolls into view, its children fade/pop in quickly one at a
 * time, left to right (timing in app/globals.css under "Stagger in").
 */
export default function StaggerIn({ as: Tag = 'div', className = '', children }: { as?: ElementType; className?: string; children: ReactNode }) {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  return (
    <Tag ref={ref} className={`stagger${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  );
}
