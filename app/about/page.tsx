import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { skillsList } from '@/lib/data';

const photos = [
  { src: '/images/about-dancing.jpeg', alt: 'Diana dancing', position: 'center 22%' },
  { src: '/images/about-boxing.jpg', alt: 'Diana boxing', position: '62% 28%' },
  { src: '/images/about-baby.jpg', alt: 'Diana as a baby', position: 'center 20%' }
];

const leadershipCards = [
  {
    title: "Women's Boxing Captain",
    body: 'UIUC. Leading with discipline, assertive step-by-step coaching, and resilience after every hit',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M8 2.5L11 8.5H8.5L6 3.2z" fill="currentColor" /><path d="M16 2.5L13 8.5H15.5L18 3.2z" fill="currentColor" /><circle cx="12" cy="14.5" r="6.5" fill="currentColor" /><circle className="icon-tile__cut" cx="12" cy="14.5" r="4.6" fill="none" strokeWidth="1.3" /><path className="icon-tile__cut" d="M12 11.3l1 2.05 2.25.33-1.63 1.6.38 2.24L12 16.4l-2 1.12.38-2.24-1.63-1.6 2.25-.33z" strokeWidth="0" /></svg>
    )
  },
  {
    title: 'President, Design Innovation',
    body: 'UIUC. Building campus-wide design culture and community across disciplines',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.5 3.5l6 6L9 21H3v-6l11.5-11.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M13 5l6 6" stroke="currentColor" strokeWidth="1.8" /></svg>
    )
  },
  {
    title: 'Usability Researcher',
    body: 'Collaborative research with UIUC professors on usability and constructing projects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  }
];

export default function About() {
  return (
    <main>
      <header className="page-head">
        <div className="container">
          <span className="label eyebrow">About Me</span>
          <Reveal>
            <h1 className="display-lg title">I&apos;m Diana.</h1>
            <p className="body-lg lead">
              &quot;I strive to create solutions that make a meaningful impact on the <b>genuine person.&quot;</b>
            </p>
          </Reveal>
        </div>
      </header>

      <div className="container">
        <Reveal className="photo-row">
          {photos.map((photo) => (
            <div key={photo.src} className="frame frame--portrait">
              <Image src={photo.src} alt={photo.alt} fill sizes="33vw" style={{ objectPosition: photo.position }} />
            </div>
          ))}
        </Reveal>
      </div>

      <section className="block">
        <div className="container">
          <div className="split">
            <Reveal>
              <h2 className="heading title">My Story</h2>
              <div className="body prose">
                <p>
                  I&apos;m from the suburbs of Chicago, studying Information Science (UX/HCI) at the<b> University of Illinois at Urbana-Champaign</b>, on track to graduate in just 3 years, May 2027!!
                </p>
                <p>
                  At UIUC I lead the Women&apos;s Boxing Team as Captain, serve as President of Design Innovation, and collaborate on usability research with professors. Every role sharpens how I lead, communicate, and create. Currently I&apos;m interning at <b>PayLocity</b> as a <b>Web Designer </b>and <b>AI specialist</b>!
                </p>
                <p>
                  I also run a fitness Instagram inspiring women to advocate for their health in their own way, without embarrassment or hesitation.
                </p>
              </div>
              <div className="actions">
                <a
                  href="https://www.instagram.com/diana_uiuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-card ds-card--row"
                >
                  <div className="icon-tile">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                  </div>
                  <div className="ds-card__content">
                    <span className="label ds-card__eyebrow">Shameless plug 👀</span>
                    <span className="body"><b>@diana_uiuc</b></span>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal className="stack">
              {leadershipCards.map((c) => (
                <div key={c.title} className="panel panel--row">
                  <div className="icon-tile">{c.icon}</div>
                  <div>
                    <h3 className="subheading panel__title">{c.title}</h3>
                    <p className="body-sm muted">{c.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block block--ruled">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="label eyebrow">My Philosophy</span>
              <h2 className="heading title">Real designers adapt to any tool, including AI.</h2>
              <p className="body prose">
                AI isn&apos;t scary, it&apos;s a tool, like Figma or Adobe. I design with it and <b className="accent">build with it.</b> The same way I lead my boxing team, I communicate clearly, act fast, and solve problems under pressure, the same instincts I bring to every design decision. AI is no different, I see it as another tool that works because I know how to lead, communicate, and work with it.
              </p>
            </Reveal>

            <Reveal className="panel">
              <span className="label eyebrow">Skills &amp; Tools</span>
              <div className="tag-list">
                {skillsList.map((skill) => (
                  <span key={skill} className="ds-tag">{skill}</span>
                ))}
              </div>
              <div className="actions">
                <Link href="/projects" className="ds-btn ds-btn--primary">View My Work →</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
