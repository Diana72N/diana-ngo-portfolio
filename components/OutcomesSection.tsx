import { ReactNode } from 'react';
import Reveal from './Reveal';

type Stat = { value: string; label: ReactNode };

export default function OutcomesSection({
  eyebrow = 'As a Result…',
  title,
  paragraph,
  stats,
  cta,
  rightContent
}: {
  eyebrow?: string;
  title: string;
  paragraph: ReactNode;
  stats?: Stat[];
  cta?: { href: string; label: string };
  rightContent?: ReactNode;
}) {
  return (
    <section className="block block--ruled">
      <div className="container">
        <div className="split split--center">
          <Reveal>
            <span className="label eyebrow">{eyebrow}</span>
            <h2 className="heading title">{title}</h2>
            <p className="body prose">{paragraph}</p>
            {cta && (
              <div className="actions">
                <a href={cta.href} target="_blank" rel="noreferrer" className="ds-btn ds-btn--secondary">
                  {cta.label}
                </a>
              </div>
            )}
          </Reveal>
          <Reveal className="stack">
            {stats?.map((s, i) => (
              <div key={i} className="panel stat">
                <div className="stat__value">{s.value}</div>
                <div className="body-sm">{s.label}</div>
              </div>
            ))}
            {rightContent}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
