import { ReactNode } from 'react';
import Reveal from './Reveal';
import Squiggle from './Squiggle';

type Stat = { value: string; label: ReactNode };

export default function OutcomesSection({
  eyebrow = 'As a Result…',
  title,
  paragraph,
  stats,
  bg = 'var(--offwhite)',
  cta,
  rightContent
}: {
  eyebrow?: string;
  title: string;
  paragraph: ReactNode;
  stats?: Stat[];
  bg?: string;
  cta?: { href: string; label: string };
  rightContent?: ReactNode;
}) {
  return (
    <div style={{ background: bg, padding: '72px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <Reveal>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>{eyebrow}</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: 'var(--maroon)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 8 }}>{title}</h2>
          <Squiggle size="sm" style={{ marginBottom: 22 }} />
          <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.68, lineHeight: 1.82 }}>{paragraph}</p>
          {cta && (
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="figma-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, fontSize: 15, fontWeight: 600, background: 'var(--maroon)', color: 'var(--cream)', padding: '14px 26px', borderRadius: 8, textDecoration: 'none' }}
            >
              {cta.label}
            </a>
          )}
        </Reveal>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {stats?.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: '#fff', borderRadius: 12, padding: 20, border: '1px solid rgba(72,22,32,0.07)' }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--pink)', letterSpacing: '-1.5px', minWidth: 72 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: 'var(--maroon)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
          {rightContent}
        </Reveal>
      </div>
    </div>
  );
}
