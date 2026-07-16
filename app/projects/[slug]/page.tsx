import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/data';
import PaylocityCaseStudy from '@/components/case-studies/PaylocityCaseStudy';
import UshercCaseStudy from '@/components/case-studies/UshercCaseStudy';
import CostcoCaseStudy from '@/components/case-studies/CostcoCaseStudy';
import StravaCaseStudy from '@/components/case-studies/StravaCaseStudy';
import AccessibilityCaseStudy from '@/components/case-studies/AccessibilityCaseStudy';
import TiedCaseStudy from '@/components/case-studies/TiedCaseStudy';
import UltraAICaseStudy from '@/components/case-studies/UltraAICaseStudy';

const caseStudies: Record<string, React.ComponentType> = {
  paylocity: PaylocityCaseStudy,
  usherc: UshercCaseStudy,
  costco: CostcoCaseStudy,
  strava: StravaCaseStudy,
  accessibility: AccessibilityCaseStudy,
  tied: TiedCaseStudy,
  ultraai: UltraAICaseStudy
};

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const CaseStudy = caseStudies[slug];

  if (!CaseStudy) {
    notFound();
  }

  return <CaseStudy />;
}
