import Link from 'next/link';
import ProjectThumb from '@/components/ProjectThumb';
import Reveal from '@/components/Reveal';
import { projectsData, type Project } from '@/lib/data';

// Cards carry at most 4 tags: three skills plus the period.
function CardTags({ project }: { project: Project }) {
  return (
    <div className="ds-card__tags">
      {project.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="ds-tag">{tag}</span>
      ))}
      <span className="ds-tag ds-tag--quiet">{project.period}</span>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projectsData;

  return (
    <main>
      <header className="page-head">
        <div className="container">
          <span className="label eyebrow">Portfolio</span>
          <Reveal>
            <h1 className="display-lg">My Work</h1>
          </Reveal>
        </div>
      </header>

      <section className="block block--ruled">
        <div className="container">
          <div className="label eyebrow title">Featured · Current Role</div>
          <Reveal>
            <Link href={`/projects/${featured.id}`} className="ds-card ds-card--feature">
              <ProjectThumb initial={featured.company[0]} label={`${featured.company} project thumbnail`} />
              <div className="ds-card__content">
                <span className="label ds-card__eyebrow">{featured.role}</span>
                <h2 className="ds-card__title">{featured.company}</h2>
                <p className="ds-card__body">{featured.headline}</p>
                <CardTags project={featured} />
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="block block--ruled">
        <div className="container">
          <div className="label eyebrow title">Projects</div>
          <div className="ds-grid">
            {rest.map((project, i) => (
              <Reveal key={project.id}>
                <Link href={`/projects/${project.id}`} className="ds-card">
                  <ProjectThumb
                    initial={project.company[0]}
                    variant={((i + 1) % 3) as 0 | 1 | 2}
                    label={`${project.company} project thumbnail`}
                  />
                  <span className="label ds-card__eyebrow">{project.role}</span>
                  <h3 className="ds-card__title">{project.company}</h3>
                  <p className="ds-card__body">{project.headline}</p>
                  <CardTags project={project} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
