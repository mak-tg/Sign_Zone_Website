import type { Metadata } from 'next'
import ProjectsSection from '@/components/home/ProjectsSection'

export const metadata: Metadata = {
  title: 'Recent Sign Projects & Portfolio | Sign Zone Dallas–Fort Worth',
  description:
    'Browse 30+ completed commercial sign installations across DFW. Real channel letters, monuments, storefronts, and interior signs for restaurants, clinics, retail, and corporate facilities.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Recent Commercial Sign Projects | Sign Zone Portfolio',
    description:
      'Explore 30+ custom sign installations built by Sign Zone across the Dallas–Fort Worth Metroplex.',
    url: 'https://www.signzoneusa.com/projects',
  },
}

export default function Page() {
  return <ProjectsSection />
}
