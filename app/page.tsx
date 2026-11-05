import Link from 'next/link';
import HeroFight from '@/components/HeroFight';
import ProjectThumb from '@/components/ProjectThumb';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="ds-hero">
          <div>
            <span className="label ds-hero__eyebrow">Portfolio · 2026</span>
            <h1 className="display-xl ds-hero__title">Hi, I&apos;m Diana.</h1>
            <p className="body-lg ds-hero__bio">UX Researcher & Designer</p>
            <div className="ds-hero__ctas">
              <Link href="/projects" className="ds-btn ds-btn--primary">View Work →</Link>
              <Link href="/contact" className="ds-btn ds-btn--secondary">Get In Touch</Link>
            </div>
          </div>
          <HeroFight />
        </section>
      </div>

      <section className="block block--ruled">
        <div className="container">
          <div className="split split--center">
            <Reveal>
              <span className="label eyebrow">Currently</span>
              <h2 className="display-lg title">Interning at PayLocity</h2>
              <p className="body prose">
                <b>Web Design &amp; Marketing Intern 2026<br /></b>
                Building AI-powered tools for workflow automation, conducting user testing, designing website components.
              </p>
              <div className="actions">
                <Link href="/projects" className="ds-btn ds-btn--text">See All Projects →</Link>
              </div>
            </Reveal>
            <Reveal>
              <Link href="/projects/paylocity" className="ds-card">
                <ProjectThumb initial="P" label="PayLocity project thumbnail" />
                <span className="label ds-card__eyebrow">Web Design &amp; Marketing Intern</span>
                <h3 className="ds-card__title">PayLocity</h3>
                <ul className="ds-card__list">
                  <li>Claude-powered AI tool selected by CEO</li>
                  <li>30% improvement in conversion rates via A/B testing</li>
                  <li>AI-driven smoke testing &amp; QA automation</li>
                </ul>
                <div className="ds-card__tags">
                  <span className="ds-tag">AI Builder</span>
                  <span className="ds-tag">A/B Testing</span>
                  <span className="ds-tag ds-tag--quiet">2026</span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
