import Image from 'next/image';
import CaseStudyHero from '@/components/CaseStudyHero';
import OutcomesSection from '@/components/OutcomesSection';
import CaseStudyCTA from '@/components/CaseStudyCTA';
import Reveal from '@/components/Reveal';

const aiCards = [
  {
    title: 'FTA Slide Deck AI',
    body: "Selected by Toby Williams, PayLocity's CEO, to build a Claude-powered tool that assists AEs in constructing sales decks for first-time appointments, turning a manual client research process into an on-demand sales assistant."
  },
  {
    title: 'Playwright Smoke-Test Automation',
    body: 'Coding Playwright scripts alongside the dev team to automate weekly smoke testing, developing visual regression QA testing for CTA buttons and website content to reduce manual testing time.'
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

function FocusCard({ title, body }: { title: string; body: string }) {
  return (
    <Reveal className="panel">
      <h3 className="subheading panel__title">{title}</h3>
      <p className="body-sm muted">{body}</p>
    </Reveal>
  );
}

function FocusSection({ eyebrow, title, icon, cards }: { eyebrow: string; title: string; icon: React.ReactNode; cards: { title: string; body: string }[] }) {
  return (
    <section className="block block--ruled">
      <div className="container">
        <div className="heading-row">
          <div className="icon-tile">{icon}</div>
          <div>
            <span className="label eyebrow">{eyebrow}</span>
            <h2 className="heading">{title}</h2>
          </div>
        </div>
        <div className="panel-grid">
          {cards.map((c) => (
            <FocusCard key={c.title} title={c.title} body={c.body} />
          ))}
        </div>
      </div>
    </section>
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
        metaFields={[
          { label: 'Team', value: 'GTM Website' },
          { label: 'Tools', value: 'Claude, Co-pilot, AEM' },
          { label: 'Role', value: 'Website Technology & Marketing Intern' }
        ]}
      />

      <div className="stat-band">
        <div className="container stat-band__grid">
          {[
            { value: '30%', label: 'Improved conversion rates' },
            { value: '20–30', label: 'Design flaws caught weekly' },
            { value: 'CEO', label: 'Selected to build Claude AI tool' }
          ].map((m) => (
            <div key={m.label} className="stat-band__item">
              <div className="stat-band__value">{m.value}</div>
              <div className="body-sm muted">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="block">
        <div className="container">
          <Reveal>
            <span className="label eyebrow">Background</span>
            <h2 className="heading title">My role</h2>
            <p className="body prose">As Website Technology &amp; Marketing Intern, I split my work across focus areas:</p>
            <ul className="body cs-list">
              <li><b>AI strategy &amp; process design</b></li>
              <li><b>AEM Operations &amp; Quality Assurance</b></li>
              <li><b>UX research &amp; conversion testing</b></li>
            </ul>
          </Reveal>
        </div>
      </div>

      <FocusSection
        eyebrow="AI Automation"
        title="AI Strategy & Process Design"
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.2 6.8H21l-5.6 4.1 2.2 6.8L12 15.6l-5.6 4.1 2.2-6.8L3 8.8h6.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>}
        cards={aiCards}
      />

      <FocusSection
        eyebrow="Website Maintenance"
        title="AEM Operations & Quality Assurance"
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>}
        cards={qaCards}
      />

      <FocusSection
        eyebrow="User Research"
        title="UX Research & Conversion Testing"
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>}
        cards={researchCards}
      />

      <OutcomesSection
        title="Design work that scales across teams."
        paragraph="Across AEM operations, UX research, and AI process design, this internship has shown me how design impact compounds when it's paired with the right tooling and given me a CEO-recognized track record of shipping AI-powered solutions to move PayLocity forward."
        rightContent={
          <Image src="/images/paylocity-logo.png" alt="Paylocity logo" width={420} height={180} className="logo-img" />
        }
      />

      <CaseStudyCTA />
    </div>
  );
}
