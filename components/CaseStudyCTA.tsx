import Link from 'next/link';

export default function CaseStudyCTA({ dark = false }: { dark?: boolean }) {
  return (
    <div style={{ background: dark ? 'var(--maroon)' : 'var(--offwhite)', padding: '64px 56px', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: dark ? 'var(--cream)' : 'var(--maroon)', letterSpacing: '-1px', marginBottom: 14 }}>
          Like what you see?
        </h2>
        <p style={{ fontSize: 16, color: dark ? 'rgba(255,241,208,0.55)' : 'var(--maroon)', opacity: dark ? 1 : 0.6, marginBottom: 32, lineHeight: 1.7 }}>
          Let&apos;s talk about how I can bring this same impact to your team.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className={dark ? 'btn-filled-pink-cta' : 'btn-filled-pink-cta invert-dark'}>Get In Touch →</Link>
          <Link href="/projects" className={dark ? 'btn-outline-cream-cta' : 'btn-outline-maroon-cta'}>View All Projects</Link>
        </div>
      </div>
    </div>
  );
}
