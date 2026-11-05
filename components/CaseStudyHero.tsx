import Link from 'next/link';
import Reveal from './Reveal';

export default function CaseStudyHero({
  badge,
  meta,
  title,
  subtitle,
  metaFields
}: {
  badge: string;
  meta: string;
  title: React.ReactNode;
  subtitle: string;
  metaFields: { label: string; value: string }[];
}) {
  return (
    <header className="cs-hero">
      <div className="container">
        <Link href="/projects" className="ds-btn ds-btn--text">← Back to Projects</Link>
        <div className="cs-hero__badges">
          <span className="ds-tag ds-tag--solid">{badge}</span>
          <span className="label muted">{meta}</span>
        </div>
        <Reveal>
          <h1 className="display-xl title">
            {title}<span className="accent">.</span>
          </h1>
          <p className="body-lg lead">{subtitle}</p>
        </Reveal>
        <dl className="cs-meta">
          {metaFields.map((f) => (
            <div key={f.label}>
              <dt className="label">{f.label}</dt>
              <dd className="body">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
