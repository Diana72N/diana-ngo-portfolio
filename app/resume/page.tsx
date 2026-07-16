import { projectsData, skillsList } from '@/lib/data';

const leadership = [
  { org: 'UIUC', title: "Women's Boxing Team Captain", body: 'Leading with discipline, assertive coaching, and resilience' },
  { org: 'UIUC', title: 'President, Design Innovation', body: 'Leading campus-wide design community and creative initiatives' },
  { org: 'UIUC Research', title: 'Usability Researcher, Professor Collaboration', body: 'Collaborative usability research and project construction with faculty' }
];

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 22, paddingBottom: 12, borderBottom: '2px solid var(--pink)' }}>
      {children}
    </div>
  );
}

export default function Resume() {
  return (
    <div>
      <div style={{ background: 'var(--maroon)', padding: '96px 56px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 12 }}>Curriculum Vitae</div>
            <h1 style={{ fontSize: 54, fontWeight: 800, color: 'var(--cream)', letterSpacing: '-2px' }}>Diana Ngo</h1>
            <div style={{ fontSize: 16, color: 'rgba(255,241,208,0.55)', marginTop: 8 }}>UX Designer &amp; AI Builder · Chicago, IL · dianango75@gmail.com</div>
          </div>
          <a
            href="/resume/Diana_Ngo_Resume.pdf"
            download="Diana_Ngo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download"
            style={{ fontSize: 15, fontWeight: 600, background: 'var(--pink)', color: 'var(--cream)', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}
          >
            Download PDF ↓
          </a>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: 56 }}>
        <div style={{ marginBottom: 52 }}>
          <SectionHeader>Experience</SectionHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {projectsData.map((project) => (
              <div key={project.id} style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 32 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--pink)', marginBottom: 4 }}>{project.period}</div>
                  <div style={{ fontSize: 13, color: 'var(--maroon)', opacity: 0.42 }}>{project.location}</div>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--maroon)', marginBottom: 2 }}>{project.company}</div>
                  <div style={{ fontSize: 14, color: 'var(--maroon)', opacity: 0.58, marginBottom: 14 }}>{project.role}</div>
                  {project.bullets.map((bullet) => (
                    <div key={bullet} style={{ display: 'flex', gap: 10, marginBottom: 9 }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--pink)', marginTop: 8, flexShrink: 0 }} />
                      <div style={{ fontSize: 14, color: 'var(--maroon)', opacity: 0.7, lineHeight: 1.62 }}>{bullet}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 52 }}>
          <SectionHeader>Education</SectionHeader>
          <div style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 32 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--pink)' }}>Aug. 2024 – May 2027</div>
              <div style={{ fontSize: 13, color: 'var(--maroon)', opacity: 0.42, marginTop: 4 }}>Champaign, IL</div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--maroon)' }}>University of Illinois at Urbana-Champaign</div>
              <div style={{ fontSize: 14, color: 'var(--maroon)', opacity: 0.58, marginTop: 4 }}>B.S. Information Science · 3-year track graduating May 2027</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 52 }}>
          <SectionHeader>Leadership &amp; Activities</SectionHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {leadership.map((l) => (
              <div key={l.title} style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 32 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--pink)' }}>{l.org}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--maroon)' }}>{l.title}</div>
                  <div style={{ fontSize: 14, color: 'var(--maroon)', opacity: 0.58, marginTop: 3 }}>{l.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader>Skills</SectionHeader>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {skillsList.map((skill) => (
              <span key={skill} style={{ fontSize: 14, fontWeight: 500, background: 'var(--cream)', color: 'var(--maroon)', padding: '8px 16px', borderRadius: 100, border: '1px solid rgba(72,22,32,0.1)' }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
