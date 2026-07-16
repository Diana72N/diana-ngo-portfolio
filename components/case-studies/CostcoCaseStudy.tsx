import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import ImageStack from '@/components/ImageStack';
import { TimelineList, TimelineStep } from '@/components/Timeline';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

export default function CostcoCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="TEAM PROJECT · DESIGN LEAD"
        meta="Jan 2026 – May 2026 · Champaign, IL"
        title="Costco"
        subtitle="Design Innovation - Costco Mobile Redesign"
        metaFields={[
          { label: 'Team', value: 'UIUC Design Innovation' },
          { label: 'Tools', value: 'Figma, Paper Sketching' },
          { label: 'Role', value: 'Design Lead' }
        ]}
      />

      <BackgroundSection
        title="Costco Redesign"
        paragraph="As Design Lead for UIUC Design Innovation's Costco redesign, I directed the team through a full mobile app overhaul, from paper wireframes and leading “How-Might-We” framing exercises, to a built-from-scratch design system, to high-fidelity redesign of Costco's mobile application."
        problem="Costco app suffers from Information overload, key features weren't visible or easy to access, and the overall experience wasn't time-efficient for grocery shoppers."
        goal="Redesign Costco's core app flows around a clear design system, making shopping, services, and account management feel simple."
      />

      <div style={{ background: 'var(--cream)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Project Scope</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: 'var(--maroon)', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 16 }}>From sketch to system to screens</h2>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.62, maxWidth: 640, lineHeight: 1.75, marginBottom: 56 }}>A semester-long redesign from August 2025 - December 2025</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <ImageStack
              images={[
                { src: '/images/costco-1.png', alt: 'Paper wireframes and flow sketches for the Costco app redesign', bg: '#000' },
                { src: '/images/costco-2.png', alt: 'High-fidelity item, cart, and account screens', bg: '#111' },
                { src: '/images/costco-3.png', alt: 'Costco design system — colors, type, and components', bg: '#f2f2f2' }
              ]}
            />

            <TimelineList>
              <TimelineStep number={1} title="Problem Framing: How-Might-We" marginBottom={150}>
                Defined 3 How-Might-We statements to guide the redesign: <b>1) How might we make shopping feel less overwhelming?<br />2) How might we surface relevant features?<br />3) How might we make the Costco shopping experience more time-efficient?</b>
              </TimelineStep>
              <TimelineStep number={2} title="Paper Wireframing" marginBottom={150}>
                Sketched every core flow by hand, including Services, Cart, Explore, Warehouse, Shop, and Account, annotating pain points and options directly on the page before designing in Figma.
              </TimelineStep>
              <TimelineStep number={3} title="Design System" marginBottom={150}>
                Built a full design system in Nunito Sans, including Costco Red &amp; Blue as brand colors, a defined type scale, and core icon components.
              </TimelineStep>
              <TimelineStep number={4} title="High-Fidelity Prototype: Core Shopping Flow" marginBottom={150}>
                Designed over 30 redesigned screens with clear delivery options, pricing, and a scannable member QR code, applying the new design system end-to-end.
              </TimelineStep>
              <TimelineStep number={5} title="Presentation & Feedback" last>
                Presented final mobile redesign at final Design Innovation Checkpoint, receiving feedback on design consistency, navigation changes, and overall team unity.
              </TimelineStep>
            </TimelineList>
          </div>
        </div>
      </div>

      <OutcomesSection
        eyebrow="What did I learn?"
        title="Design the system before the screen."
        paragraph="Leading this redesign reinforced how much a defined design system de-risks every screen that follows. Once Costco's colors, type, and components were established, the team could move with intention and consistency."
        stats={[
          { value: '30+', label: 'Screens redesigned across the mobile app' },
          { value: '20%', label: 'Increase in CTR for the core shopping flow' },
          { value: '50+', label: 'Icon components created for the design system' }
        ]}
      />

      <CaseStudyCTA dark />
    </div>
  );
}
