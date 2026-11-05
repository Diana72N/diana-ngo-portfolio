import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import CaseStudyCTA from './CaseStudyCTA';
import ImageSlideshow from './ImageSlideshow';
import LogoPages from './LogoPages';
import PhoneStack from './PhoneStack';
import Reveal from './Reveal';
import StaggerIn from './StaggerIn';

/**
 * Case-study template. A project page is one CaseStudyContent object passed to
 * <CaseStudyTemplate />; edit the words in that object, not this file.
 *
 * Sections, in order (aim for a 3–5 minute read, ~600–900 words):
 *  1. Hero        — one-sentence outcome, 2–3 impact numbers (say how each was measured), + the final design up front
 *                    (one wide image below the title, or 2+ phone screens animated beside it)
 *  2. Overview    — problem · my role · team & timeline · tools & skills (skimmable)
 *  3. Context     — why it mattered (optional: one key insight beside it)
 *  4. Decisions   — 3–4 moments: what I found → what I decided (→ why), each with its image
 *  5. Final design— highlights of the finished work + prototype link
 *  6. Reflection  — optional: what I learned / would do differently, and/or a feedback quote
 */

export type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Short name, shown under the animated hero phones, e.g. "Profile". */
  label?: string;
  caption?: string;
};

export type CaseStudyContent = {
  title: string;
  /** Small label above the title, e.g. "Team project · Design lead". */
  label: string;
  /** One sentence: what changed because of this work. */
  outcome: string;
  /** 2–3 impact numbers, shown in a box under the subtitle. Keep labels short. */
  stats: { value: string; label: ReactNode }[];
  /** Final design. Two or more (phone) screens are animated beside the title. */
  heroImages: CaseStudyImage[];
  overview: {
    problem: ReactNode;
    role: ReactNode;
    team: ReactNode;
    timeline: ReactNode;
    tools: ReactNode;
    skills: ReactNode;
  };
  context: { title: string; body: ReactNode; insight?: ReactNode };
  /**
   * Each decision can have one image, several `images` (shown one at a time as a slideshow),
   * or `logos`: app icons with names (e.g. competitors), 3 per page, popping in one by one;
   * more than 3 become pages that rotate like the slideshow.
   */
  decisions: {
    title: string;
    body: ReactNode;
    image?: CaseStudyImage;
    images?: CaseStudyImage[];
    logos?: { items: { src: string; name: string }[]; caption?: string };
  }[];
  finalDesign: {
    title: string;
    intro?: ReactNode;
    highlights: { title: string; body: ReactNode }[];
    images?: CaseStudyImage[];
    prototype?: { href: string; label: string; note?: string };
  };
  /** Optional closing section; leave out to skip it. */
  reflection?: { title: string; body: ReactNode };
  /** Optional feedback quote, shown beside the reflection. */
  quote?: { text: string; source: string };
};

function Figure({ image, priority = false }: { image: CaseStudyImage; priority?: boolean }) {
  return (
    <figure className="cs-figure">
      <div className="frame frame--natural">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 860px) 100vw, 960px"
          priority={priority}
        />
      </div>
      {image.caption && <figcaption className="body-sm muted">{image.caption}</figcaption>}
    </figure>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <span className="label eyebrow">{eyebrow}</span>
      <h2 className="heading title">{title}</h2>
    </>
  );
}

export default function CaseStudyTemplate({ content: c }: { content: CaseStudyContent }) {
  const animatedHero = c.heroImages.length > 1;
  return (
    <main>
      {/* 1. Hero */}
      <header className={`cs-hero cs-hero--compact${animatedHero ? ' cs-hero--full' : ''}`}>
        <div className="container">
          <div className={animatedHero ? 'cs-hero__split' : undefined}>
            <div>
              <div className="cs-hero__badges">
                <Link href="/projects" className="ds-btn ds-btn--text">← Back to Projects</Link>
              </div>
              <Reveal>
                <h1 className="display-lg cs-hero__title">
                  {c.title}<span className="accent">.</span>
                </h1>
                <span className="ds-tag ds-tag--solid cs-hero__tag">{c.label}</span>
                <p className="body lead">{c.outcome}</p>
                <dl className="cs-stats">
                  {c.stats.map((s) => (
                    <div key={s.value} className="cs-stats__item">
                      <dt className="cs-stats__value">{s.value}</dt>
                      <dd className="body-sm">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
            {animatedHero && <PhoneStack images={c.heroImages} label={`${c.title} final design screens`} />}
          </div>
          {!animatedHero && (
            <Reveal className="cs-hero__image">
              <Figure image={c.heroImages[0]} priority />
            </Reveal>
          )}
        </div>
      </header>

      {/* 2. Overview (cards pop in one by one, so the section-level scroll fade is skipped) */}
      <section className="block block--ruled" data-no-scroll-fade>
        <div className="container">
          <StaggerIn as="dl" className="cs-overview">
            <div className="panel">
              <dt className="label eyebrow">Problem</dt>
              <dd className="body-sm">{c.overview.problem}</dd>
            </div>
            <div className="panel">
              <dt className="label eyebrow">My role</dt>
              <dd className="body-sm">{c.overview.role}</dd>
            </div>
            <div className="panel">
              <dt className="label eyebrow">Team &amp; timeline</dt>
              <dd className="body-sm">
                {c.overview.team}
                <hr className="cs-overview__rule" />
                {c.overview.timeline}
              </dd>
            </div>
            <div className="panel">
              <dt className="label eyebrow">Tools &amp; skills</dt>
              <dd className="body-sm">
                {c.overview.tools}
                <hr className="cs-overview__rule" />
                {c.overview.skills}
              </dd>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* 3. Context */}
      <section className="block block--ruled">
        <div className="container">
          <div className={c.context.insight ? 'split' : undefined}>
            <Reveal>
              <SectionHead eyebrow="Context" title={c.context.title} />
              <p className="body prose">{c.context.body}</p>
            </Reveal>
            {c.context.insight && (
              <Reveal className="panel panel--accent">
                <span className="label eyebrow">Key insight</span>
                <p className="body">{c.context.insight}</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 4. Key decisions */}
      <section className="block block--ruled">
        <div className="container">
          <SectionHead eyebrow="Process" title="Key decisions" />
          <ol className="cs-decisions">
            {c.decisions.map((d, i) => (
              <Reveal as="li" key={d.title} className={`cs-decision${d.image || d.images || d.logos ? '' : ' cs-decision--text'}`}>
                <div className="cs-decision__text">
                  <span className="label eyebrow">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="subheading title accent">{d.title}</h3>
                  <p className="body">{d.body}</p>
                </div>
                {(d.image || d.images || d.logos) && (
                  <Reveal className="cs-decision__media">
                    {d.logos
                      ? <LogoPages items={d.logos.items} caption={d.logos.caption} />
                      : d.images && d.images.length > 1
                        ? <ImageSlideshow images={d.images} label={d.title} />
                        : <Figure image={d.images?.[0] ?? d.image!} />}
                  </Reveal>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Final design (highlight cards pop in one by one, so the section-level scroll fade is skipped) */}
      <section className="block block--ruled" data-no-scroll-fade>
        <div className="container">
          <SectionHead eyebrow="Final design" title={c.finalDesign.title} />
          {c.finalDesign.intro && <p className="body lead cs-intro">{c.finalDesign.intro}</p>}
          {c.finalDesign.images?.map((img) => (
            <Reveal key={img.src} className="cs-final__image">
              <Figure image={img} />
            </Reveal>
          ))}
          <StaggerIn className="panel-grid">
            {c.finalDesign.highlights.map((h) => (
              <div key={h.title} className="panel">
                <h3 className="subheading panel__title">{h.title}</h3>
                <p className="body-sm muted">{h.body}</p>
              </div>
            ))}
          </StaggerIn>
          {c.finalDesign.prototype && (
            <div className="actions">
              <a href={c.finalDesign.prototype.href} target="_blank" rel="noreferrer" className="ds-btn ds-btn--secondary">
                {c.finalDesign.prototype.label} ↗
              </a>
              {c.finalDesign.prototype.note && <span className="body-sm muted">{c.finalDesign.prototype.note}</span>}
            </div>
          )}
        </div>
      </section>

      {/* 6. Reflection (optional) */}
      {(c.reflection || c.quote) && (
        <section className="block block--ruled">
          <div className="container">
            <div className={c.reflection && c.quote ? 'split' : undefined}>
              {c.reflection && (
                <Reveal>
                  <SectionHead eyebrow="Reflection" title={c.reflection.title} />
                  <p className="body prose">{c.reflection.body}</p>
                </Reveal>
              )}
              {c.quote && (
                <Reveal>
                  <blockquote className="cs-quote">
                    <p className="body-lg">&ldquo;{c.quote.text}&rdquo;</p>
                    <footer className="label muted">{c.quote.source}</footer>
                  </blockquote>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      <CaseStudyCTA />
    </main>
  );
}
