'use client';

import { useInView } from '@/hooks/useInView';

export default function Squiggle({ size = 'lg', style }: { size?: 'lg' | 'sm'; style?: React.CSSProperties }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const width = size === 'lg' ? 160 : 140;
  const d =
    size === 'lg'
      ? 'M0,6 C13,0 26,12 39,6 C52,0 65,12 78,6 C91,0 104,12 117,6 C130,0 143,12 156,6'
      : 'M0,6 C12,0 23,12 35,6 C46,0 58,12 70,6 C81,0 93,12 105,6 C116,0 128,12 140,6';

  return (
    <div ref={ref} style={style}>
      <svg viewBox={`0 0 ${width} 12`} width={width} height={12} style={{ display: 'block', overflow: 'visible' }}>
        <path d={d} className={`squiggle-path${inView ? ' drawn' : ''}`} />
      </svg>
    </div>
  );
}
