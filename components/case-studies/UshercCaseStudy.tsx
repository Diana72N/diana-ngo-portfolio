import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import ImageStack from '@/components/ImageStack';
import { TimelineList, TimelineStep } from '@/components/Timeline';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

export default function UshercCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="UX DESIGNER"
        meta="Dec 2025 – June 2026 · Champaign, IL"
        title="H.E.R.O"
        subtitle="A nationwide privacy policy tracker across 250+ U.S. institutions."
        titleSize={80}
        metaFields={[
          { label: 'Industry', value: 'Education & Research' },
          { label: 'Tools', value: 'Figma & FigmaMake' },
          { label: 'Role', value: 'UX Designer' }
        ]}
      />

      <BackgroundSection
        title="Tracking Privacy at Scale"
        paragraph={
          <>
            As UX Designer for the U.S. Higher Education Research Observatory project, I designed the interface for a nationwide tool tracking historical privacy policy changes across 250+ U.S. institutions, powered by the Internet Archive&apos;s Wayback Machine.
            <br /><br />
            Through redesigned navigation and information architecture, I <b><u>lowered search time by 15%</u></b> and helped the team resolve usability concerns <b><u>30% faster</u></b> through collaborative weekly stakeholder meetings.
          </>
        }
        problem="Researchers had no easy way to search, filter, or compare how university privacy policies and how people's information is being used."
        goal="Design a clear, map-driven interface for searching, filtering, and comparing 250+ institutions' archived privacy policies along with AI generated change summaries."
      />

      <div style={{ background: 'var(--cream)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Project Scope</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: 'var(--maroon)', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 16 }}>From flowchart to full platform</h2>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.62, maxWidth: 640, lineHeight: 1.75, marginBottom: 56 }}>Mapped out the ideal search-and-filter journey first, then built toward a data-rich, map-driven interface researchers could trust.</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <ImageStack
              images={[
                { src: '/images/hero-1.png', alt: 'H.E.R.O user flow diagram', bg: '#f6f6f5' },
                { src: '/images/hero-2.png', alt: 'H.E.R.O landing & onboarding screen', bg: '#f4f4f4' },
                { src: '/images/hero-3.png', alt: 'H.E.R.O interactive map dashboard', bg: '#0d1b2e' },
                { src: '/images/hero-4.png', alt: 'H.E.R.O archive viewer with AI summary', bg: '#fff' }
              ]}
            />

            <TimelineList>
              <TimelineStep number={1} title="Information Architecture" marginBottom={150}>
                Mapped the full user flow to align goals before any UI work began. The user flow included: landing, search, filter by state/university/timeframe, results, saving, and export.
              </TimelineStep>
              <TimelineStep number={2} title="Landing & Onboarding" marginBottom={150}>
                Designed a landing page that explains the tool&apos;s value quickly, covering Search, Archive Viewer, and AI-Powered Analysis, with role-based onboarding.
              </TimelineStep>
              <TimelineStep number={3} title="Map-Driven Dashboard" marginBottom={150}>
                Used FigmaMake to designed navigation and information architecture around an interactive U.S. map, letting researchers browse all 250+ institutions at a glance.
              </TimelineStep>
              <TimelineStep number={4} title="Search & Filter Refinement" marginBottom={150}>
                Iterated on filtering by state, university type, and timeframe, cutting the average search time by 15% in usability testing.
              </TimelineStep>
              <TimelineStep number={5} title="Stakeholder Collaboration" marginBottom={150}>
                Ran weekly meetings with the project manager, resolving usability concerns 30% faster through tight design-feedback loops.
              </TimelineStep>
              <TimelineStep number={6} title="AI-Powered Archive Viewer" last>
                Shipped a timeline-based policy viewer with AI-generated summaries, highlighting added, removed, and modified privacy policies of over 250 universities year over year.
              </TimelineStep>
            </TimelineList>
          </div>
        </div>
      </div>

      <OutcomesSection
        title="Faster search. Clearer answers."
        paragraph="This project sharpened how I design for research-driven audiences, balancing a map-first interface with an AI layer to make online privacy policy information more accessible."
        stats={[
          { value: '250+', label: 'U.S. institutions tracked across the archive' },
          { value: '15%', label: 'Reduction in search time from redesigned navigation' },
          { value: '30%', label: 'Faster usability issue resolution via weekly stakeholder syncs' }
        ]}
      />

      <CaseStudyCTA dark />
    </div>
  );
}
