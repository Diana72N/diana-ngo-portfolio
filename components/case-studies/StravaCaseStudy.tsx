import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import ImageStack from '@/components/ImageStack';
import { TimelineList, TimelineStep } from '@/components/Timeline';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

export default function StravaCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="TEAM PROJECT · DESIGN LEAD"
        meta="Sep 2025 – Nov 2025 · Champaign, IL"
        title="Strava"
        subtitle="Design Innovation - Strava Redesign"
        metaFields={[
          { label: 'Team', value: 'Diana (Lead) + 4 designers' },
          { label: 'Tools', value: 'Figma, Google Surveys' },
          { label: 'Role', value: 'Design Lead' }
        ]}
      />

      <BackgroundSection
        title="Strava Redesign"
        paragraph="As Design Lead for UIUC Design Innovation's Strava redesign team, I directed 4 fellow designers, Brooke, Daria, Sara and Allie, through a 10-week end-to-end redesign"
        problem="Strava's navigation mixed inconsistent jargon, buried its best features behind a paywall, and suffered from information overload across Groups, Feed, and Calendar."
        goal="Redesign Strava's core flows to feel personalized and motivating for both new and experienced runners, without losing its social identity."
      />

      <div style={{ background: 'var(--cream)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal as="div">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Project Scope</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: 'var(--maroon)', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 16 }}>From audit to hi-fi prototype</h2>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.62, maxWidth: 640, lineHeight: 1.75, marginBottom: 56 }}>A semester-long redesign from September 2025 - November 25</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <ImageStack
              images={[
                { src: '/images/strava-1.png', alt: 'Competitive analysis and pain point audit of a fitness tracking app', bg: '#fdf1e4' },
                { src: '/images/strava-2.png', alt: 'Jennifer Liu persona and persona map', bg: '#1c1c1c', objectPosition: 'top center' },
                { src: '/images/strava-3.png', alt: 'Strava information architecture and home flow diagrams', bg: '#e5faf9' },
                { src: '/images/strava-4.png', alt: 'High-fidelity dashboard, profile, and settings screens', bg: '#111' }
              ]}
            />

            <TimelineList>
              <TimelineStep number={1} title="Competitive Analysis & Pain Point Audit" marginBottom={150}>
                Benchmarked Apple Fitness+ and other 4 fitness trackers, then audited Strava screen-by-screen, flagging its paywalled Map and cluttered Calendar as top pain points.
              </TimelineStep>
              <TimelineStep number={2} title="User Research & Personas" marginBottom={150}>
                Fielded dual surveys (users &amp; non-users) and 15+ interviews, then built 6 personas including both beginner and an experienced runners to guide design decisions.
              </TimelineStep>
              <TimelineStep number={3} title="Information Architecture" marginBottom={150}>
                Mapped Strava&apos;s original user flows and suggested alternative paths and page structure.
              </TimelineStep>
              <TimelineStep number={4} title="Ideation & Design Critique" marginBottom={150}>
                Ran weekly critiques of each teammate&apos;s wireframes using sticky-note annotations on FigJam to build a cohesive direction.
              </TimelineStep>
              <TimelineStep number={5} title="High-Fidelity Prototype" marginBottom={150}>
                Designed all Strava screens with a bold color-coded progress tracker, streak calendar, and simplified settings to fix the &quot;information overload&quot; feedback.
              </TimelineStep>
              <TimelineStep number={6} title="Route Details & Wearable Integration" last>
                Rebuilt the route detail page with Details, Reviews, and Photos tabs, extending the flow to an Apple Watch companion for turn-by-turn cues mid-run.
              </TimelineStep>
            </TimelineList>
          </div>
        </div>
      </div>

      <OutcomesSection
        title="What did I learn?"
        paragraph="By taking on this leadership position I learn to delegate tasks that focus on supporting my team, taking into account their individualized goals as UX designers, whether it be learning new prototyping skills in Figma or how to better communicate and prioritize objectives within our weekly meetings."
        stats={[
          { value: '40%', label: 'CTR increase through redesigning Strava challenge & recording flows' },
          { value: '1st', label: 'Place recognition for Design Innovation best team collaboration & engagement' },
          { value: '45', label: 'High-fidelity design screens redesigned and fully prototyped' }
        ]}
      />

      <div style={{ background: 'var(--maroon)', padding: '64px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <a
            href="https://www.figma.com/design/gRTl2sMWsYjzJYqRBeAIng/Strava-Redesign-Prototype?node-id=0-1&p=f&t=QBkhibQqWl5UQVpJ-0"
            target="_blank"
            rel="noreferrer"
            className="figma-link"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, background: 'rgba(255,241,208,0.06)', border: '1px solid rgba(255,241,208,0.14)', borderRadius: 16, padding: '32px 36px', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 2h4v6H8a3 3 0 010-6z" fill="#FFF1D0" /><path d="M12 2h4a3 3 0 010 6h-4V2z" fill="#FFF1D0" opacity="0.8" /><path d="M12 8h4a3 3 0 010 6h-4V8z" fill="#FFF1D0" opacity="0.6" /><path d="M8 8h4v6H8a3 3 0 010-6z" fill="#FFF1D0" opacity="0.8" /><circle cx="10" cy="17" r="3" fill="#FFF1D0" opacity="0.6" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--cream)', marginBottom: 4 }}>View the Full Figma Prototype</div>
                <div style={{ fontSize: 14, color: 'rgba(255,241,208,0.55)' }}>Click through Home, Profile, Messaging & Route Details</div>
              </div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--cream)', flexShrink: 0 }}>Open Prototype →</div>
          </a>
        </div>
      </div>

      <CaseStudyCTA />
    </div>
  );
}
