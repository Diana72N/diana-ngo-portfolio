import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import ImageStack from '@/components/ImageStack';
import { TimelineList, TimelineStep } from '@/components/Timeline';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';
import Image from 'next/image';

export default function TiedCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="INTERNSHIP"
        meta="Jun 2025 – Aug 2025 · San Francisco, CA"
        title="Tied"
        subtitle="Designed a compatibility feature that turns swiping into something worth sharing."
        metaFields={[
          { label: 'Industry', value: 'Dating & Social' },
          { label: 'Tools', value: 'Figma' },
          { label: 'Role', value: 'UX Research & Design Intern' }
        ]}
      />

      <BackgroundSection
        title="The Compatibility Feature."
        paragraph={
          <>
            As a UX Research &amp; Design Intern at Tied, I designed a responsive relationship-compatibility feature, the &quot;Relationship Roast,&quot; built for a Gen Z user demographic looking for connections that actually matter.
            <br /><br />
            I created wireframes, mockups, affinity maps, high-fidelity prototypes, and user pathways, then <b><u>facilitated 15+ user feedback sessions</u></b> evaluating behavioral responses to the existing design.
          </>
        }
        problem="Compatibility features across dating apps felt shallow and score-driven, offering little insight into whether a couple's dynamic could actually last."
        goal="Design a playful, shareable “Relationship Roast” flow that's honest and a little cheeky, built for two players and a Gen Z sense of humor."
      />

      <div className="block block--ruled">
        <div className="container">
          <Reveal>
            <span className="label eyebrow">Project Scope</span>
            <h2 className="heading title">From sketch to sign-off</h2>
            <p className="body lead cs-intro">Investigated which hooks captivated users to proceed through the app&apos;s compatibility evaluation, and what user flows felt most natural.</p>
          </Reveal>

          <div className="split">
            <ImageStack
              images={[
                { src: '/images/tied-1.png', alt: 'Tied paper wireframes — screen flow' },
                { src: '/images/tied-2.png', alt: 'Tied paper wireframes — results & scale' },
                { src: '/images/tied-3.png', alt: 'Tied affinity mapping in Figma' },
                { src: '/images/tied-4.png', alt: 'Tied high-fidelity prototype screens' }
              ]}
            />

            <TimelineList>
              <TimelineStep number={1} title="Paper Wireframing" marginBottom={150}>
                Outlined the project scope and drew out user flows of initial thoughts on how the compatibility evaluation should be presented.
              </TimelineStep>
              <TimelineStep number={2} title="Low-Fidelity Wireframing" marginBottom={150}>
                After discussing with the senior UX designer and engineering team, created a Figma low-fi prototype with basic features and text hooks.
              </TimelineStep>
              <TimelineStep number={3} title="User Research" marginBottom={150}>
                Conducted an estimated 15+ user tests and interviews, letting users interact with the low-fi prototype to test navigation and text hooks.
              </TimelineStep>
              <TimelineStep number={4} title="Affinity Mapping" marginBottom={150}>
                Organized user test results into categories across the flow for hooks, symptoms, action items, scale, and sharing screens, noting common reactions to refine the design.
              </TimelineStep>
              <TimelineStep number={5} title="Prototyping & High-Fis" marginBottom={150}>
                Applied feedback from the affinity map to the high-fidelity prototype, collaborating with the senior UX designer on a consistent color palette and copy.
              </TimelineStep>
              <TimelineStep number={6} title="Handoff" last>
                Wrote additional notes on the feature&apos;s navigation and step-by-step instructions about the user flow to communicate to engineers.
              </TimelineStep>
            </TimelineList>
          </div>
        </div>
      </div>

      <OutcomesSection
        title="Fast-paced, hands-on growth."
        paragraph="Being a UX design intern at Tied, I gained an abundant amount of experience on this mini project. I learned to adapt to the fast-paced momentum in a start-up environment, given 4 weeks to complete the project, and developed key communication skills through constant updates to the founder, lead designers, and engineers throughout the entire design process."
        rightContent={
          <div className="frame frame--wide">
            <Image src="/images/tied-outcome.png" alt="Tied app splash screen with Get Started button" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: 'center calc(50% + 19px)' }} />
          </div>
        }
      />

      <CaseStudyCTA />
    </div>
  );
}
