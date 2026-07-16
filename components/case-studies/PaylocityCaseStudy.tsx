import Image from 'next/image';
import CaseStudyHero from '@/components/CaseStudyHero';
import BackgroundSection from '@/components/BackgroundSection';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

const aiCards = [
  {
    title: 'FTA Slide Deck AI',
    body: "Selected by Toby Williams, PayLocity's CEO, to build a Claude-powered tool to assists AEs in constructing sales decks for first time appointment. Sales pitch prep time by cut by 65% by turning a manual cilent research process into an on-demand sales assistant."
  },
  {
    title: 'Playwright Smoke-Test Automation',
    body: 'Coding Playwright scripts alongside the dev team to automate weekly smoke testing. Manual testing time was cut by 55% through developing visual regression QA testing for CTA buttons and website content.'
  },
  {
    title: 'AI Tooling Landscape Research',
    body: "Evaluating BrowserStack, Claude, Copilot, Kameleoon's Kai, Google Analytics AI, and Jira's Rovo to recommend where AI can meaningfully speed up the web team's workflow."
  },
  {
    title: 'Universal Web Template & Playbook',
    body: 'Built a universal page-request template and component-details guide with Copilot, standardizing how Product and Web Development teams brief and spec new pages.'
  }
];

const qaCards = [
  {
    title: 'Asset Library Cleanup',
    body: "Cleaned up PayLocity's web components through Adobe Experience Manager (AEM), unpublishing and sorting unused images in preparation in of a CMS migration."
  },
  {
    title: 'Weekly Smoke Testing',
    body: 'Ran QA smoke tests every Monday from Jira tickets, using BrowserStack to catch 5–10 usability and visual issues weekly across the live site.'
  },
  {
    title: 'Marketplace Image Design Support',
    body: 'Resized 20+ Marketplace logos in Photoshop from Wrike tickets, keeping AEM, SharePoint, and source files in sync on request.'
  }
];

const researchCards = [
  {
    title: 'High-Traffic Page A/B Testing',
    body: "Used Claude AI, Figma, and Kameleoon to analyze PayLocity's top high-traffic pages and built a presentation of pain points and redesign opportunities to later inform automated A/B tests to increase demo-request rates."
  },
  {
    title: 'Competitor Website Benchmarking',
    body: 'Exploring Crayon to benchmark direct competitors\u2019 design practices and identify shared trends, building toward an ongoing design-recommendations document for the team.'
  }
];

function FocusCard({ title, body, dark }: { title: string; body: string; dark: boolean }) {
  return (
    <Reveal
      style={{
        background: dark ? 'rgba(255,241,208,0.06)' : '#fff',
        border: dark ? '1px solid rgba(255,241,208,0.1)' : '1px solid rgba(72,22,32,0.07)',
        borderRadius: 14,
        padding: 26
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 700, color: dark ? 'var(--cream)' : 'var(--maroon)', lineHeight: 1.3, marginBottom: 14 }}>{title}</div>
      <p style={{ fontSize: 13, color: dark ? 'rgba(255,241,208,0.62)' : 'var(--maroon)', opacity: dark ? 1 : 0.65, lineHeight: 1.65 }}>{body}</p>
    </Reveal>
  );
}

function FocusSectionHeader({ eyebrow, title, iconBg, icon }: { eyebrow: string; title: string; iconBg: string; icon: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--pink)' }}>{eyebrow}</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: iconBg === 'var(--pink)' ? 'var(--cream)' : 'var(--maroon)', letterSpacing: '-0.5px' }}>{title}</div>
      </div>
    </div>
  );
}

export default function PaylocityCaseStudy() {
  return (
    <div>
      <CaseStudyHero
        badge="CURRENT ROLE · INTERNSHIP"
        meta="May 2026 – Present · Schaumburg, IL"
        title="PayLocity"
        subtitle="Web Design & Marketing Intern, building AI-powered tools, redesigning core pages, and driving quality across PayLocity's website."
        titleSize={72}
        metaFields={[
          { label: 'Team', value: 'GTM Website' },
          { label: 'Tools', value: 'Claude, Co-pilot, AEM' },
          { label: 'Role', value: 'Website Technology & Marketing Intern' }
        ]}
      />

      <div style={{ background: 'var(--pink)', padding: '36px 56px', marginTop: 52 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { value: '65%', label: 'Cut sales pitch prep time' },
            { value: '30%', label: 'Improved conversion rates' },
            { value: '5–10', label: 'Issues caught weekly via QA' },
            { value: '55%', label: 'Faster smoke testing via Playwright' }
          ].map((m, i) => (
            <div key={m.label} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 3 ? '1px solid rgba(255,241,208,0.2)' : 'none' }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: 'var(--cream)', lineHeight: 1, letterSpacing: '-2px', marginBottom: 6 }}>{m.value}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,241,208,0.75)', lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <BackgroundSection
        title="My role"
        paragraph="As Website Technology & Marketing Intern, I split my work across focus areas:"
        extra={
          <ul style={{ fontSize: 16, color: 'var(--maroon)', lineHeight: 1.82, maxWidth: 760, margin: 0, paddingLeft: 22, marginTop: 14 }}>
            <li><b>AI strategy &amp; process design</b></li>
            <li><b>AEM Operations &amp; Quality Assurance</b></li>
            <li><b>UX research &amp; conversion testing</b></li>
          </ul>
        }
      />

      <div style={{ background: 'var(--maroon)', padding: '64px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FocusSectionHeader
            eyebrow="AI Automation"
            title="AI Strategy & Process Design"
            iconBg="var(--pink)"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.2 6.8H21l-5.6 4.1 2.2 6.8L12 15.6l-5.6 4.1 2.2-6.8L3 8.8h6.8z" stroke="#FFF1D0" strokeWidth="1.6" strokeLinejoin="round" /></svg>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {aiCards.map((c) => (
              <FocusCard key={c.title} title={c.title} body={c.body} dark />
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--cream)', padding: '64px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FocusSectionHeader
            eyebrow="Website Maintenance"
            title="AEM Operations & Quality Assurance"
            iconBg="var(--maroon)"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#FFF1D0" strokeWidth="2" /><path d="M8 12h8M8 8h8M8 16h5" stroke="#FFF1D0" strokeWidth="2" strokeLinecap="round" /></svg>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {qaCards.map((c) => (
              <FocusCard key={c.title} title={c.title} body={c.body} dark={false} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--offwhite)', padding: '64px 56px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FocusSectionHeader
            eyebrow="User Research"
            title="UX Research & Conversion Testing"
            iconBg="var(--pink)"
            icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#FFF1D0" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="#FFF1D0" strokeWidth="2" strokeLinecap="round" /></svg>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {researchCards.map((c) => (
              <FocusCard key={c.title} title={c.title} body={c.body} dark={false} />
            ))}
          </div>
        </div>
      </div>

      <OutcomesSection
        title="Design work that scales across teams."
        paragraph="Across AEM operations, UX research, and AI process design, this internship has shown me how design impact compounds when it's paired with the right tooling and given me a CEO-recognized track record of shipping AI-powered solutions to move PayLocity forward."
        rightContent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
            <Image src="/images/paylocity-logo.png" alt="Paylocity logo" width={420} height={180} style={{ width: '100%', maxWidth: 420, height: 'auto', objectFit: 'contain' }} />
          </div>
        }
      />

      <CaseStudyCTA dark />
    </div>
  );
}
