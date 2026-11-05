import { ReactNode } from 'react';
import Reveal from './Reveal';

export default function BackgroundSection({
  eyebrow = 'Background',
  title,
  paragraph,
  problem,
  goal,
  extra
}: {
  eyebrow?: string;
  title: string;
  paragraph: ReactNode;
  problem?: string;
  goal?: string;
  extra?: ReactNode;
}) {
  const twoCol = Boolean(problem && goal);
  return (
    <section className="block block--ruled">
      <div className="container">
        <div className={twoCol ? 'split' : undefined}>
          <Reveal>
            <span className="label eyebrow">{eyebrow}</span>
            <h2 className="heading title">{title}</h2>
            <p className="body prose">{paragraph}</p>
            {extra}
          </Reveal>
          {twoCol && (
            <Reveal className="stack">
              <div className="panel">
                <h3 className="subheading panel__title">The Problem</h3>
                <p className="body-sm">{problem}</p>
              </div>
              <div className="panel panel--accent">
                <h3 className="subheading panel__title accent">The Goal</h3>
                <p className="body-sm">{goal}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
