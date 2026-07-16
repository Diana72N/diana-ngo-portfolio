import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Squiggle from '@/components/Squiggle';

const skills = [
  {
    title: 'User Research',
    body: 'From user interviews to A/B testing, understanding who we are building for is the first step to a useful design.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#FFF1D0" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="#FFF1D0" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  },
  {
    title: 'UI/UX Design',
    body: 'Experienced in creating end-to-end design, from building wireframes to polished high fidelity prototypes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#FFF1D0" strokeWidth="2" /><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#FFF1D0" strokeWidth="2" /><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#FFF1D0" strokeWidth="2" /><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#FFF1D0" strokeWidth="2" /></svg>
    )
  },
  {
    title: 'AI Builder',
    body: 'Specialized in Claude and able optimize a diverse range of AIs to automate workflow processes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4 2.4-7.3L2 9.2h7.6L12 2z" stroke="#FFF1D0" strokeWidth="1.8" strokeLinejoin="round" /></svg>
    )
  }
];

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

      <div style={{ background: 'var(--maroon)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 48, textAlign: 'center' }}>What I Do</Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {skills.map((s) => (
              <Reveal key={s.title} className="skill-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--cream)', marginBottom: 12 }}>{s.title}</div>
                <p style={{ fontSize: 15, color: 'rgba(255,241,208,0.56)', lineHeight: 1.78 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
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
