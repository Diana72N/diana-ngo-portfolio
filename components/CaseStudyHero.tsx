import Link from 'next/link';
import Reveal from './Reveal';

export default function CaseStudyHero({
  badge,
  meta,
  title,
  subtitle,
  metaFields,
  titleSize = 76
}: {
  badge: string;
  meta: string;
  title: React.ReactNode;
  subtitle: string;
  metaFields: { label: string; value: string }[];
  titleSize?: number;
}) {
  return (
    <div style={{ background: 'var(--maroon)', padding: '88px 56px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'var(--pink)', opacity: 0.06, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <Link href="/projects" className="btn-back">← Back to Projects</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--pink)', borderRadius: 8, padding: '6px 14px', display: 'inline-block' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--cream)' }}>{badge}</span>
          </div>
          <span style={{ fontSize: 12, color: 'rgba(255,241,208,0.35)', letterSpacing: 1 }}>{meta}</span>
        </div>
        <Reveal>
          <h1 style={{ fontSize: titleSize, fontWeight: 900, color: 'var(--cream)', letterSpacing: '-3.5px', lineHeight: 0.92, marginBottom: 16 }}>
            {title}<span style={{ color: 'var(--pink)' }}>.</span>
          </h1>
          <p style={{ fontSize: 22, fontWeight: 400, color: 'rgba(255,241,208,0.6)', maxWidth: 640, lineHeight: 1.65, marginBottom: 0 }}>{subtitle}</p>
        </Reveal>
        <div style={{ display: 'flex', gap: 48, marginTop: 52, padding: '28px 0', borderTop: '1px solid rgba(255,241,208,0.08)', flexWrap: 'wrap' }}>
          {metaFields.map((f) => (
            <div key={f.label}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,241,208,0.35)', marginBottom: 6 }}>{f.label}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--cream)' }}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
