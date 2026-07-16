import { ReactNode } from 'react';
import Reveal from './Reveal';
import Squiggle from './Squiggle';

export default function BackgroundSection({
  eyebrow = 'Background',
  title,
  paragraph,
  problem,
  goal,
  bg = 'var(--offwhite)',
  extra
}: {
  eyebrow?: string;
  title: string;
  paragraph: ReactNode;
  problem?: string;
  goal?: string;
  bg?: string;
  extra?: ReactNode;
}) {
  const twoCol = Boolean(problem && goal);
  return (
    <div style={{ background: bg, padding: '72px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: twoCol ? 'grid' : 'block', gridTemplateColumns: twoCol ? '1fr 1fr' : undefined, gap: 64, alignItems: 'start' }}>
        <Reveal>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>{eyebrow}</div>
          <h2 style={{ fontSize: 34, fontWeight: 800, color: 'var(--maroon)', marginBottom: 8, letterSpacing: '-1px', lineHeight: 1.1 }}>{title}</h2>
          <Squiggle size="sm" style={{ marginBottom: 22 }} />
          <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.68, lineHeight: 1.82, maxWidth: twoCol ? undefined : 760 }}>{paragraph}</p>
          {extra}
        </Reveal>
        {twoCol && (
          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'var(--maroon)', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--pink)', marginBottom: 8, letterSpacing: 0.5 }}>The Problem</div>
              <p style={{ fontSize: 14, color: 'rgba(255,241,208,0.72)', lineHeight: 1.65 }}>{problem}</p>
            </div>
            <div style={{ background: 'var(--pink)', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--cream)', marginBottom: 8, letterSpacing: 0.5, opacity: 0.7 }}>The Goal</div>
              <p style={{ fontSize: 14, color: 'var(--cream)', lineHeight: 1.65 }}>{goal}</p>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
