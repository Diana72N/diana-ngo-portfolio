import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import ImageStack from '@/components/ImageStack';
import { TimelineList, TimelineStep } from '@/components/Timeline';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

export default function AccessibilityCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="UX/UI DESIGNER"
        meta="Aug 2025 – Dec 2025 · Champaign, IL"
        title={<>Accessibility<br />Games</>}
        subtitle="Interactive resource pages teaching cognitive, visual, and hearing accessibility, designed to be felt, not just read."
        titleSize={72}
        metaFields={[
          { label: 'Advised By', value: 'Prof. Adler & Dr. Klentenik' },
          { label: 'Tools', value: 'Figma, FigmaMake & AI' },
          { label: 'Role', value: 'UIUC Student UX Researcher' }
        ]}
      />

      <BackgroundSection
        title="Designing Empathy Into Education"
        paragraph={
          <>
            For my independent study under Professor Adler, I joined the Figma Design team building the Accessibility Games — an educational resource teaching users about cognitive, visual, and hearing challenges.
            <br /><br />
            I collaborated with both Professor Adler and Dr. Klentenik to develop <b><u>6 interactive resource pages</u></b> — Color Blindness, Blindness, Low Vision, Dyslexia, Deafness, and Motor Impairments — designing and prototyping 24 dropdowns with unique example graphics and 6 carousel infographics.
          </>
        }
        problem="Turning dense accessibility research into interface content that was easy to understand. My first examples were either too technical or suffered from information overload."
        goal="Design 6 resource pages that make cognitive, visual, and hearing accessibility genuinely understandable, through interaction, not just text."
      />

      <div style={{ background: 'var(--cream)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Project Scope</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: 'var(--maroon)', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 16 }}>From research to resource pages</h2>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.62, maxWidth: 640, lineHeight: 1.75, marginBottom: 56 }}>Every page had to translate real accessibility research into something a UIUC student could understand in seconds.</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <ImageStack
              images={[
                { src: '/images/a11y-1.png', alt: 'Color blindness carousel component variations', bg: '#fff' },
                { src: '/images/a11y-2.png', alt: 'Scoreboard results page showing player vs computer rounds', bg: '#fff' },
                { src: '/images/a11y-3.png', alt: 'Improving Accessibility for Deafness resource page', bg: '#fff' }
              ]}
            />

            <TimelineList>
              <TimelineStep number={1} title="Joining the Research Team" marginBottom={80}>
                Joined Professor Adler&apos;s independent study as part of the Figma Design team, tasked with turning accessibility research into an interactive educational resource.
              </TimelineStep>
              <TimelineStep number={2} title="Content Development" marginBottom={80}>
                Collaborated with Professor Adler and Dr. Klentenik to scope 6 resource pages: Color Blindness, Blindness, Low Vision, Dyslexia, Deafness, and Motor Impairments.
              </TimelineStep>
              <TimelineStep number={3} title="Dropdown & Graphic Design" marginBottom={80}>
                Designed and prototyped 24 dropdowns, each paired with a unique example graphic illustrating a specific accessibility challenge.
              </TimelineStep>
              <TimelineStep number={4} title="Carousel Infographics" marginBottom={80}>
                Created 6 carousel infographics, one per resource page, to make each accessibility topic scannable and visually digestible.
              </TimelineStep>
              <TimelineStep number={5} title="Win/Loss & Icon System" marginBottom={80}>
                Completed the win/loss results page along with an alternating icon placement and selection system used throughout the games.
              </TimelineStep>
              <TimelineStep number={6} title="Testing & Iteration" last>
                Tested designs with Professor Adler, Dr. Klentenik, and UIUC students, iterating on feedback and practicing empathy to simplify the user flow.
              </TimelineStep>
            </TimelineList>
          </div>
        </div>
      </div>

      <OutcomesSection
        title="Research as problem-solving."
        paragraph="This Fall internship taught me that great design research is iterative by nature, showing me ways I can help other students discover the same impact research can have on real-world problems."
        stats={[
          { value: '6', label: 'Interactive accessibility resource pages designed & prototyped' },
          { value: '24', label: 'Dropdowns with unique example graphics' },
          { value: '70+', label: 'Icon graphics designed across the games' }
        ]}
      />

      <CaseStudyCTA dark />
    </div>
  );
}
