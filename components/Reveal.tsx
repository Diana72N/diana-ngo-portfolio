'use client';

import { ReactNode, ElementType } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({ children, as: Tag = 'div', className = '', style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const cls = `reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`;

  return (
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  );
}
