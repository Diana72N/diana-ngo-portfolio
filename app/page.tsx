import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Squiggle from '@/components/Squiggle';

export default function Home() {
  const tickerText = "UX Research · UI Design · AI Builder · Figma · Prototyping · A/B Testing · Accessibility · Information Architecture · Stakeholder Management · User Testing · ";

  return (
    <div>
      <div style={{ minHeight: '100vh', background: 'var(--maroon)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', paddingTop: 64 }}>
        <div style={{ position: 'absolute', top: -140, right: -100, width: 480, height: 480, borderRadius: '50%', background: 'var(--pink)', opacity: 0.05, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -80, width: 360, height: 360, borderRadius: '50%', background: 'var(--pink)', opacity: 0.05, pointerEvents: 'none' }} />

        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', borderTop: '1px solid rgba(255,241,208,0.07)', borderBottom: '1px solid rgba(255,241,208,0.07)', padding: '11px 0', flexShrink: 0 }}>
          <div style={{ display: 'inline-block', animation: 'marquee 22s linear infinite', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,241,208,0.2)', padding: '0 48px' }}>
              {tickerText}{tickerText}
            </span>
          </div>
        </div>

        <Reveal style={{ padding: '0 56px' }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 20 }}>Portfolio · 2026</div>
          <div style={{ fontSize: 'clamp(80px,11vw,148px)', fontWeight: 900, color: 'var(--cream)', lineHeight: 0.88, letterSpacing: '-5px', marginBottom: 0 }}>DIANA</div>
          <div style={{ fontSize: 'clamp(80px,11vw,148px)', fontWeight: 900, color: 'var(--pink)', lineHeight: 0.88, letterSpacing: '-5px' }}>NGO</div>
        </Reveal>

        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, padding: '48px 56px 56px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', animation: 'blink 2s ease infinite' }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,241,208,0.45)', letterSpacing: 0.3 }}>
                Open to full-time · Currently Interning <b style={{ color: '#FFF2D0' }}>@ PayLocity</b>
              </span>
            </div>
            <p style={{ fontSize: 16, color: 'rgba(255,241,208,0.48)', maxWidth: 420, lineHeight: 1.72 }}>Boxer · UIUC Senior · Women&apos;s Boxing Captain · Design Innovation President · Chicago, IL</p>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexShrink: 0 }}>
            <Link href="/projects" className="btn-filled-pink">View Work →</Link>
            <Link href="/contact" className="btn-outline-cream">Get In Touch</Link>
          </div>
        </Reveal>
      </div>

      <div style={{ background: 'var(--offwhite)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <Reveal>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Currently</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--maroon)', marginBottom: 10, lineHeight: 1.18, letterSpacing: '-1px' }}>Interning at PayLocity</h2>
            <Squiggle size="lg" style={{ marginBottom: 16 }} />
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.65, lineHeight: 1.82, marginBottom: 32 }}>
              <b>Web Design &amp; Marketing Intern 2026<br /></b>
              Building AI-powered tools for workflow automation, conducting user testing, designing website components.
            </p>
            <Link href="/projects" className="btn-filled-pink-sm">See All Projects →</Link>
          </Reveal>
          <Reveal style={{ background: 'var(--maroon)', borderRadius: 16, padding: 36 }}>
            <div style={{ display: 'flex', gap: 14, marginBottom: 28, alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--pink)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--cream)' }}>P</span>
              </div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--cream)' }}>PayLocity</div>
                <div style={{ fontSize: 13, color: 'rgba(255,241,208,0.52)' }}>Web Design &amp; Marketing Intern</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {[
                'Claude-powered AI tool selected by CEO',
                '30% improvement in conversion rates via A/B testing',
                'AI-driven smoke testing & QA automation'
              ].map((line) => (
                <div key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', marginTop: 6, flexShrink: 0 }} />
                  <div style={{ fontSize: 14, color: 'rgba(255,241,208,0.78)', lineHeight: 1.55 }}>{line}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
