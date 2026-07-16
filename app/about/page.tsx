import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Squiggle from '@/components/Squiggle';
import { skillsList } from '@/lib/data';

const leadershipCards = [
  {
    bg: '#D45671',
    iconBg: '#481621',
    title: "Women's Boxing Captain",
    body: 'UIUC. Leading with discipline, assertive step-by-step coaching, and resilience after every hit',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M8 2.5L11 8.5H8.5L6 3.2z" fill="#FFF1D0" opacity="0.85" /><path d="M16 2.5L13 8.5H15.5L18 3.2z" fill="#FFF1D0" opacity="0.85" /><circle cx="12" cy="14.5" r="6.5" fill="#FFF1D0" /><circle cx="12" cy="14.5" r="4.6" fill="none" stroke="#D55672" strokeWidth="1.3" /><path d="M12 11.3l1 2.05 2.25.33-1.63 1.6.38 2.24L12 16.4l-2 1.12.38-2.24-1.63-1.6 2.25-.33z" fill="#D55672" /></svg>
    )
  },
  {
    bg: 'var(--pink)',
    iconBg: '#481621',
    title: 'President, Design Innovation',
    body: 'UIUC. Building campus-wide design culture and community across disciplines',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.5 3.5l6 6L9 21H3v-6l11.5-11.5z" stroke="#FFF1D0" strokeWidth="1.8" strokeLinejoin="round" /><path d="M13 5l6 6" stroke="#FFF1D0" strokeWidth="1.8" /></svg>
    )
  },
  {
    bg: '#D45671',
    iconBg: '#481621',
    title: 'Usability Researcher',
    body: 'Collaborative research with UIUC professors on usability and constructing projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#FFF1D0" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="#FFF1D0" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  }
];

export default function About() {
  return (
    <div>
      <div style={{ position: 'relative', textAlign: 'center', overflow: 'hidden', minHeight: 560, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, zIndex: 0 }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/about-dancing.jpeg" alt="Diana dancing" fill sizes="33vw" style={{ objectFit: 'cover', objectPosition: 'center 22%', filter: 'saturate(0.7)' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/about-boxing.jpg" alt="Diana boxing" fill sizes="33vw" style={{ objectFit: 'cover', objectPosition: '62% 28%', filter: 'saturate(0.7)' }} />
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/about-baby.jpg" alt="Diana as a baby" fill sizes="33vw" style={{ objectFit: 'cover', objectPosition: 'center 20%', filter: 'saturate(0.7)' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(72,22,32,0.35) 0%, rgba(72,22,32,0.55) 45%, rgba(72,22,32,0.92) 100%)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 56px 72px', width: '100%' }}>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>About Me</div>
          <Reveal>
            <h1 style={{ fontSize: 72, fontWeight: 800, color: 'var(--cream)', marginBottom: 18, letterSpacing: '-3px' }}>I&apos;m Diana.</h1>
            <p style={{ fontSize: 20, fontWeight: 400, color: 'rgba(255,241,208,0.78)', maxWidth: 580, margin: '0 auto', lineHeight: 1.78, fontStyle: 'italic' }}>
              &quot;I strive to create solutions that make a meaningful impact on the <b>genuine person.&quot;</b>
            </p>
          </Reveal>
        </div>
      </div>

      <div style={{ background: 'var(--offwhite)', padding: '80px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--maroon)', marginBottom: 10, lineHeight: 1.18, letterSpacing: '-1px' }}>My Story</h2>
            <Squiggle size="lg" style={{ marginBottom: 20 }} />
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.7, lineHeight: 1.84, marginBottom: 16 }}>
              I&apos;m from the suburbs of Chicago, studying Information Science (UX/HCI) at the<b> University of Illinois at Urbana-Champaign</b>, on track to graduate in just 3 years, May 2027!!
            </p>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.7, lineHeight: 1.84, marginBottom: 16 }}>
              At UIUC I lead the Women&apos;s Boxing Team as Captain, serve as President of Design Innovation, and collaborate on usability research with professors. Every role sharpens how I lead, communicate, and create. Currently I&apos;m interning at <b>PayLocity</b> as a <b>Web Designer </b>and <b>AI specialist</b>!
            </p>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.7, lineHeight: 1.84, marginBottom: 20 }}>
              I also run a fitness Instagram inspiring women to advocate for their health in their own way, without embarrassment or hesitation.
            </p>

            <Reveal>
              <a
                href="https://www.instagram.com/diana_uiuc/"
                target="_blank"
                rel="noopener noreferrer"
                className="shameless-plug"
                style={{ display: 'flex', alignItems: 'center', gap: 16, border: '1px solid rgba(72,22,32,0.08)', borderRadius: 14, padding: '18px 24px', textDecoration: 'none', background: '#481621' }}
              >
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#D55672,#481620)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: 'var(--cream)', letterSpacing: '-0.5px' }}>DN</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#FFF2D0' }}>Shameless plug 👀</div>
                </div>
                <div style={{ width: 34, height: 34, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#FFF2D0' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#481620" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="#481620" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="#481620" /></svg>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#FFF2D0', flexShrink: 0 }}>@diana_uiuc</div>
              </a>
            </Reveal>
          </Reveal>

          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {leadershipCards.map((c) => (
              <div key={c.title} style={{ background: c.bg, borderRadius: 12, padding: 26, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: c.iconBg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--cream)', marginBottom: 5 }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,241,208,0.8)', lineHeight: 1.55 }}>{c.body}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <div style={{ background: 'var(--maroon)', padding: '80px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 16 }}>My Philosophy</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: 'var(--cream)', marginBottom: 10, lineHeight: 1.18, letterSpacing: '-1px' }}>Real designers adapt to any tool, including AI.</h2>
            <Squiggle size="lg" style={{ marginBottom: 20 }} />
            <p style={{ fontSize: 16, color: '#FFF2D0', lineHeight: 1.84 }}>
              AI isn&apos;t scary, it&apos;s a tool, like Figma or Adobe. I design with it and <b style={{ color: 'rgb(211,86,112)' }}>build with it.</b> The same way I lead my boxing team, I communicate clearly, act fast, and solve problems under pressure, the same instincts I bring to every design decision. AI is no different, I see it as another tool that works because I know how to lead, communicate, and work with it.
            </p>
          </Reveal>

          <Reveal style={{ border: '1px solid rgba(255,241,208,0.1)', borderRadius: 16, padding: 36 }}>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 24 }}>Skills &amp; Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
              {skillsList.map((skill) => (
                <span key={skill} style={{ background: 'rgba(213,86,114,0.12)', color: '#FFF3D0', fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 100, border: '1px solid rgba(213,86,114,0.25)' }}>{skill}</span>
              ))}
            </div>
            <Link href="/projects" className="btn-filled-pink-sm" style={{ width: '100%', textAlign: 'center' }}>View My Work →</Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
