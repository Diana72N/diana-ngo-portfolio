import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import ImageStack from '@/components/ImageStack';
import { TimelineList, TimelineStep } from '@/components/Timeline';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

export default function UltraAICaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="INTERNSHIP"
        meta="Jan 2025 – Apr 2025 · San Francisco, CA"
        title="Ultra"
        subtitle="Led design of website & mobile app to improve user flow & increase click-through rates."
        titleSize={80}
        metaFields={[
          { label: 'Industry', value: 'Technology + AI' },
          { label: 'Tools', value: 'Figma & Webflow' },
          { label: 'Role', value: 'Lead UI/UX Designer & Media Marketer' }
        ]}
      />

      <BackgroundSection
        title="The Startup Challenge"
        paragraph={
          <>
            As the UI/UX designer and marketing intern for Ultra, a<br />Y Combinator-backed startup, I was responsible for developing the site&apos;s information architecture, visual design, user flows, animations, and demo prototypes.
            <br /><br />
            My web and mobile designs were included in the final product launch. Through redesigning key webpages, I <b><u>doubled</u></b> both site visits and account sign-ups, while also managing all social media platforms, reaching an estimated 40,000 views across LinkedIn, YouTube, Instagram, and TikTok.
          </>
        }
        problem="Ultra's existing interface had poor engagement with high school students, with low click-through rates, unclear value proposition, and a confusing user flow from landing page to sign-up."
        goal="Design a simplistic, welcoming interface that drives student engagement, increases sign-ups, and launches successfully on iOS, all within 4 months at a fast-paced startup."
      />

      <div style={{ background: 'var(--cream)', padding: '72px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <Reveal>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 14 }}>Project Scope</div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: 'var(--maroon)', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 16 }}>From research to launch</h2>
            <p style={{ fontSize: 16, color: 'var(--maroon)', opacity: 0.62, maxWidth: 640, lineHeight: 1.75, marginBottom: 56 }}>The initial research focused on how to engage the high school audience and define a launch strategy within the educational market.</p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <ImageStack
              images={[
                { src: 'https://static.wixstatic.com/media/8687da_cc5997782cf048e7abbd97a555cf633b~mv2.png', alt: 'Ultra onboarding flow research', external: true },
                { src: 'https://static.wixstatic.com/media/8687da_08c2ac2fb9cc4c8c8c81ca440a5f6298~mv2.png', alt: 'Ultra website redesign screenshot', external: true },
                { src: 'https://static.wixstatic.com/media/8687da_d78761c6d6aa4117a57091c11eb0f5af~mv2.jpg', alt: 'Ultra mobile app screenshot', external: true }
              ]}
            />

            <TimelineList>
              <TimelineStep number={1} title="Information Architecture">
                Observed Ultra&apos;s current interface and designed an optimal user flow for a questionnaire that estimates college admission chances.
              </TimelineStep>
              <TimelineStep number={2} title="User Journey Mapping">
                Defined the targeted high school audience and mapped how students navigate Ultra&apos;s services, from discovery to sign-up.
              </TimelineStep>
              <TimelineStep number={3} title="Wireframing & Prototyping">
                Created digital wireframes and high-fidelity prototypes in Figma with consistent feedback from founders.
              </TimelineStep>
              <TimelineStep number={4} title="Mobile App Development">
                Assessed which web features would best translate to iOS, prioritizing simplicity, speed, and brand consistency for the mobile experience.
              </TimelineStep>
              <TimelineStep number={5} title="Wireframing Mobile UI">
                Designed mobile user flows to maintain brand consistency and a simple, intuitive structure across all screen sizes.
              </TimelineStep>
              <TimelineStep number={6} title="App Launch" last>
                Prepared visual graphics and finalized design flows, launched on the Apple App Store in March 2025.
              </TimelineStep>
            </TimelineList>
          </div>
        </div>
      </div>

      <OutcomesSection
        eyebrow="Outcomes"
        title="Shipped. Scaled. Measured."
        paragraph=""
        bg="var(--cream)"
        cta={{ href: 'https://useultra.ai/', label: 'View Live Website ↗' }}
        stats={[
          { value: '2×', label: 'Webpage visits & account sign-ups through design collaboration with stakeholders' },
          { value: '80%', label: 'Boost in mobile downloads within 1 month of app launch' },
          { value: '4×', label: 'Views in one week; 40K total across LinkedIn, YouTube, Instagram & TikTok' }
        ]}
      />

      <CaseStudyCTA dark />
    </div>
  );
}
