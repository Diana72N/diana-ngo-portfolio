import CaseStudyTemplate, { type CaseStudyContent } from '@/components/CaseStudyTemplate';

const content: CaseStudyContent = {
  title: 'Strava',
  label: 'Team project · Design lead',
  outcome: "A 10-week group redesign of Strava's mobile app, making its core flows clearer and more motivating for new runners.",
  stats: [
    { value: '40%', label: 'CTR increase' },
    { value: '1st', label: 'Place, best collaboration' },
    { value: '45', label: 'Hi-fi screens' }
  ],
  // Order of the hero phones: [0] starts in front, [1] on the right, the last one on the left;
  // they then rotate through the rest in this order.
  heroImages: [
    { src: '/images/strava-hero-home.png', alt: 'Redesigned Strava home: weekly progress, a compact streak row, and goals', width: 702, height: 1508, label: 'Home' },
    { src: '/images/strava-hero-streaks.png', alt: 'Expanded streak calendar for November with run and ride days marked', width: 618, height: 1352, label: 'Streaks' },
    { src: '/images/strava-hero-challenges.png', alt: 'Challenges tab with a design-your-own group challenge and an active 5K challenge', width: 628, height: 1374, label: 'Challenges' },
    { src: '/images/strava-hero-friends.png', alt: 'Friend search with suggested friends and shared mutuals', width: 622, height: 1362, label: 'Friends' },
    { src: '/images/strava-hero-run.png', alt: 'Run in progress with a turn-by-turn direction and live time, pace, and distance', width: 578, height: 1264, label: 'Run' },
    { src: '/images/strava-hero-routes.png', alt: 'Route builder from your location with distance, elevation, and estimated time', width: 670, height: 1470, label: 'Routes' }
  ],

  overview: {
    problem: 'Inconsistent jargon, paywalled features, and information overload across Groups, Feed, and Calendar.',
    role: 'Design Lead. Directed 4 designers through research, information architecture, critique, and hi-fi prototyping.',
    team: 'Diana (lead), Brooke, Daria, Sara & Allie',
    timeline: 'Sep – Nov 2025 · 10 weeks',
    tools: 'Figma, FigJam, Google Surveys',
    skills: 'UX Research, Information Architecture, User Testing, Team Leadership'
  },

  context: {
    title: 'A useful app, but an overwhelming interface',
    body: "Strava's navigation inconsistent jargon, hides its best features behind a paywall, and overloaded users across Groups, Feed, and Calendar. Our goal: make its core flows feel personalized and motivating for both new and experienced runners, without losing Strava's social identity."
  },

  decisions: [
    {
      title: 'Competitive Analysis',
     body: 'We explore 6 existing fitness trackers including: Apple Fitness, Garmin, Nike Run Club, Asics Runkeeper, Pacer, and Fitbit, then audited Strava entire interface.',
      logos: {
        items: [
          { src: '/images/strava-competitor-fitbit.png', name: 'Fitbit' },
          { src: '/images/strava-competitor-apple-fitness.png', name: 'Apple Fitness' },
          { src: '/images/strava-competitor-garmin-connect.png', name: 'Garmin Connect' },
          { src: '/images/strava-competitor-asics-runkeeper.png', name: 'ASICS Runkeeper' },
          { src: '/images/strava-competitor-pacer.png', name: 'Pacer' },
          { src: '/images/strava-competitor-nike-run-club.png', name: 'Nike Run Club' }
        ],
        caption: 'Apps we benchmarked Strava against.'
      }
    },
    {
      title: 'Design for two kinds of runner',
      body: 'Surveys of users and non-users, plus 15+ interviews, showed beginners and experienced runners need different things. We built 6 personas across that range to guide every design decision.',
      images: [
        {
          src: '/images/strava-persona-jennifer.png',
          alt: 'Persona: Jennifer Liu, 23, accountant in Orlando. Needs doable beginner workouts that fit a busy day; frustrated by hard-to-find saved routes.',
          width: 1244,
          height: 696,
          caption: 'Jennifer, 23: a beginner fitting workouts around a desk job.'
        },
        {
          src: '/images/strava-persona-sonja.png',
          alt: 'Persona: Sonja Trapp, 30, social media manager in Seattle. Wants scenic routes, time-based workouts, and motivation; intimidated by experienced runners.',
          width: 1646,
          height: 920,
          caption: 'Sonja, 30: new to working out, looking for scenic routes and motivation.'
        },
        {
          src: '/images/strava-persona-jordan.png',
          alt: 'Persona: Jordan, 32, software engineer in Chicago and experienced marathon runner. Needs accurate GPS and pace tracking and a less cluttered home screen.',
          width: 1728,
          height: 896,
          caption: 'Jordan, 32: an experienced marathoner who needs accurate GPS and pace.'
        }
      ]
    },
    {
      title: 'Restructure before restyling',
      body: "We mapped Strava's original user flows, then proposed simpler paths and page structure, such as bringing progress, calendar, and weekly streak together on the You page.",
      image: {
        src: '/images/strava-information-architecture.png',
        alt: 'Proposed Strava information architecture: a navigation bar with Home, Map, Record | Post, Challenge, and Club, each with its sub-pages, plus Profile with edit, settings, progress, streaks, calendar, trophies, and clubs',
        width: 1518,
        height: 806,
        caption: 'Proposed information architecture, organized around the navigation bar.'
      }
    },
    {
      title: 'Critique weekly to stay cohesive',
      body: "I ran weekly critiques of each teammate's wireframes, using sticky-note annotations in FigJam, to turn five designers' work into one cohesive direction."
    }
  ],

  finalDesign: {
    title: 'Clear progress, less overload',
    highlights: [
      { title: 'Progress tracker', body: 'Bold, color-coded weekly miles, activities, and steps at a glance.' },
      { title: 'Streak calendar', body: 'Runs and rides on a monthly calendar to keep momentum visible.' },
      { title: 'Simplified settings', body: 'Fewer, clearer account options, answering the "information overload" feedback.' },
      { title: 'Route details & Apple Watch', body: 'Details, Reviews, and Photos tabs per route, plus turn-by-turn cues on the watch mid-run.' }
    ],
    prototype: {
      href: 'https://www.figma.com/design/gRTl2sMWsYjzJYqRBeAIng/Strava-Redesign-Prototype?node-id=0-1&p=f&t=QBkhibQqWl5UQVpJ-0',
      label: 'Open the Figma prototype',
      note: 'Home, Profile, Messaging & Route Details'
    }
  }
};

export default function StravaCaseStudy() {
  return <CaseStudyTemplate content={content} />;
}
