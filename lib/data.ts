export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  headline: string;
  tags: string[];
  metrics: Metric[];
  bullets: string[];
};

export const projectsData: Project[] = [
  {
    id: 'paylocity',
    company: 'PayLocity',
    role: 'Website Technology & Marketing Intern',
    period: 'May 2026 – Present',
    location: 'Schaumburg, IL',
    headline: 'Claude-powered AI tool selected by CEO; drove 30% conversion lift',
    tags: ['AI Tools', 'Claude', 'Web Design', 'A/B Testing', 'Marketing'],
    metrics: [
      { value: 'CEO', label: 'Hand-picked to build Claude-powered AI tool' },
      { value: '30%', label: 'Improved conversion rates through Kameleeon AI testing' },
      { value: '20–30', label: 'Design & usability flaws caught weekly' }
    ],
    bullets: [
      "Selected by Paylocity's CEO to build Claude-powered AI tool creating customized sale decks",
      'Improved conversion rates by 30% by redesigning and A/B testing 3 core Paylocity webpages',
      'Caught 20–30 design flaws weekly via AI-driven smoke testing and QA automation'
    ]
  },
  {
    id: 'usherc',
    company: 'U.S. Higher Education Research Observatory',
    role: 'UX Designer',
    period: 'Dec. 2025 – Jun. 2026',
    location: 'Champaign, IL',
    headline: 'Nationwide privacy policy tracker across 250+ U.S. institutions',
    tags: ['UX Design', 'Information Architecture', 'Figma', 'Stakeholder Management'],
    metrics: [
      { value: '250+', label: 'U.S. institutions tracked' },
      { value: '15%', label: 'Search time reduction' },
      { value: '30%', label: 'Faster usability issue resolution' }
    ],
    bullets: [
      'Design UI for nationwide privacy policy tracker across 250+ U.S. institutions',
      'Lowered search time by 15% through redesigned navigation & information architecture',
      'Resolved usability concerns 30% faster through collaborative weekly stakeholder meetings'
    ]
  },
  {
    id: 'costco',
    company: 'Costco Redesign',
    role: 'Design Lead, UIUC Design Innovation',
    period: 'Jan. 2026 – May. 2026',
    location: 'Champaign, IL',
    headline: "Led a redesign of Costco's mobile app shopping, services, and account flows",
    tags: ['UX Research', 'Design Systems', 'Figma', 'Team Leadership', 'Prototyping'],
    metrics: [
      { value: '3', label: 'How-Might-We problem statements defined' },
      { value: '1', label: 'Full design system built from scratch' },
      { value: '10+', label: 'Screens designed end-to-end' }
    ],
    bullets: [
      'Led a UIUC Design Innovation team through a full Costco mobile app redesign',
      "Defined 3 How-Might-We statements to guide the team's design decisions",
      'Built a full design system — colors, type, components — before high-fidelity screens'
    ]
  },
  {
    id: 'strava',
    company: 'Strava Redesign',
    role: 'Design Lead, UIUC Design Innovation',
    period: 'Sep. 2025 – Nov. 2025',
    location: 'Champaign, IL',
    headline: "Led a 5-person team redesigning Strava's mobile application experience",
    tags: ['UX Research', 'Information Architecture', 'Figma', 'User Testing', 'Team Leadership'],
    metrics: [
      { value: '3', label: 'Designers led through the redesign' },
      { value: '2', label: 'Personas built from research' },
      { value: '15+', label: 'Interviews & survey responses' }
    ],
    bullets: [
      'Led a 3-person team through a full Strava redesign, from competitive audit to hi-fi prototype',
      'Ran 2 surveys and 15+ user interviews to uncover pain points across map, feed, and groups',
      'Directed weekly design critiques, translating sticky-note feedback into shipped Figma screens'
    ]
  },
  {
    id: 'accessibility',
    company: 'Accessibility Games Research',
    role: 'Student UX/UI Researcher',
    period: 'Aug. 2025 – Dec. 2025',
    location: 'Champaign, IL',
    headline: 'Accessibility games teaching Autism, ADHD, Dyslexia & Hearing limitations',
    tags: ['UX Research', 'Accessibility', 'Prototyping', 'Interaction Design', 'FigmaMake', 'AI'],
    metrics: [
      { value: '24', label: 'Dropdown components prototyped' },
      { value: '70+', label: 'Icon graphics designed' },
      { value: '6', label: 'Carousel infographics built' }
    ],
    bullets: [
      'Developed accessibility games teaching about Autism, ADHD, Dyslexia, & Hearing limitations',
      'Collaborated with stakeholders to develop an interactive educational resource page',
      'Prototyped 24 dropdowns, 6 carousel infographics, & 70+ icon graphics'
    ]
  },
  {
    id: 'tied',
    company: 'Tied',
    role: 'UX Research & Design Intern',
    period: 'Jun. 2025 – Aug. 2025',
    location: 'San Francisco, CA',
    headline: 'Designed relationship-compatibility feature for Gen Z demographic',
    tags: ['UX Research', 'UI Design', 'Figma', 'User Testing', 'Prototyping'],
    metrics: [
      { value: '15+', label: 'User feedback sessions facilitated' },
      { value: 'Gen Z', label: 'Target demographic' },
      { value: 'SF', label: 'Startup environment' }
    ],
    bullets: [
      'Designed a responsive relationship-compatibility feature for Gen Z user demographic',
      'Created wireframes, mockups, affinity maps, high-fidelity prototypes, & user pathways',
      'Facilitated 15+ user feedback sessions evaluating behavioral responses to the existing design'
    ]
  },
  {
    id: 'ultraai',
    company: 'Ultra AI',
    role: 'UI/UX Design Intern',
    period: 'Jan. 2025 – Apr. 2025',
    location: 'San Francisco, CA',
    headline: '80% mobile download boost in 1 month via AI admissions bot design',
    tags: ['UI Design', 'AI Tools', 'Mobile Design', 'Typography', 'Prototyping'],
    metrics: [
      { value: '80%', label: 'Mobile download boost in 1 month' },
      { value: '2×', label: 'Webpage visits & account sign-ups' },
      { value: 'SF', label: 'Fast-paced startup' }
    ],
    bullets: [
      'Boosted mobile downloads by 80% in 1 month by designing an AI college admissions guidance bot',
      'Designed typography, usability testing, information hierarchy, & prototypes in a fast-paced startup',
      '2× webpage visits & account sign-ups through design collaboration with stakeholders'
    ]
  }
];

export const skillsList: string[] = [
  'Design Systems', 'Figma', 'Claude / AI Tools', 'User Research', 'Usability Testing',
  'A/B Testing', 'Prototyping', 'Information Architecture', 'Wireframing',
  'High-Fidelity Design', 'Interaction Design', 'Digital Marketing',
  'Product Management', 'Stakeholder Management', 'UX Writing'
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}
