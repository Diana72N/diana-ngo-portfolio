import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { projectsData } from '@/lib/data';

export default function Projects() {
  const [featured, ...rest] = projectsData;

  return (
    <div>
      <div style={{ background: 'var(--maroon)', padding: '96px 56px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Portfolio</div>
          <Reveal>
            <h1 style={{ fontSize: 64, fontWeight: 800, color: 'var(--cream)', marginBottom: 18, letterSpacing: '-2.5px', lineHeight: 1 }}>My Work</h1>
          </Reveal>
        </div>
      </div>

      <div style={{ background: 'var(--offwhite)', padding: '52px 56px 32px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--maroon)', opacity: 0.35, marginBottom: 28 }}>
            <b>Featured · Current Role</b>
          </div>
          <Reveal>
            <Link
              href={`/projects/${featured.id}`}
              className="proj-card"
              style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56, alignItems: 'center', padding: 40 }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div className="proj-bar" />
                  <div className="proj-period">{featured.period}</div>
                </div>
                <h2 className="proj-company" style={{ fontSize: 32, fontWeight: 800, marginBottom: 6, letterSpacing: '-1.2px', lineHeight: 1.1 }}>{featured.company}</h2>
                <div className="proj-role" style={{ fontSize: 14, marginBottom: 20 }}>{featured.role}</div>
                <div className="proj-headline" style={{ padding: '14px 16px', marginBottom: 20, maxWidth: 480 }}>
                  <span className="proj-headline-text" style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.6 }}>{featured.headline}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {featured.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {featured.metrics.map((m) => (
                  <div key={m.label} className="proj-metric-box">
                    <div className="proj-metric-value">{m.value}</div>
                    <div className="proj-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>
        </div>
      </div>

      <div style={{ background: 'var(--offwhite)', padding: '12px 56px 80px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--maroon)', opacity: 0.35, marginBottom: 28 }}>PROJECTS</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {rest.map((project) => (
              <Reveal key={project.id}>
                <Link href={`/projects/${project.id}`} className="proj-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                    <div className="proj-bar" />
                    <div className="proj-period">{project.period}</div>
                  </div>
                  <h3 className="proj-company" style={{ fontSize: 20, fontWeight: 700, marginBottom: 4, lineHeight: 1.2 }}>{project.company}</h3>
                  <div className="proj-role" style={{ fontSize: 13, marginBottom: 16 }}>{project.role}</div>
                  <div className="proj-headline" style={{ padding: '12px 14px', marginBottom: 18, flex: 1 }}>
                    <span className="proj-headline-text" style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.55 }}>{project.headline}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
