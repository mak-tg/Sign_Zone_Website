import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ClientStrip from '@/components/home/ClientStrip'
import StagesSection from '@/components/home/StagesSection'
import SignTypesGrid from '@/components/home/SignTypesGrid'
import LocationsSection from '@/components/home/LocationsSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import EstimateSection from '@/components/home/EstimateSection'
import ProcessSteps from '@/components/home/ProcessSteps'
import MonumentSection from '@/components/home/MonumentSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ComparisonTable from '@/components/home/ComparisonTable'
import ReviewCarousel from '@/components/home/ReviewCarousel'
import FinancingSection from '@/components/home/FinancingSection'
import GuidesSection from '@/components/home/GuidesSection'
import HomeFAQ from '@/components/home/HomeFAQ'
import BottomCTA from '@/components/home/BottomCTA'

export const metadata: Metadata = {
  title: 'Sign Zone | Custom Business Signs in Dallas–Fort Worth',
  description:
    'Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses of every size. One team designs it, permits it, builds it and installs it.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ClientStrip />
      <StagesSection />
      <SignTypesGrid />
      <LocationsSection />
      <ProjectsSection />
      <EstimateSection />
      <ProcessSteps />
      <MonumentSection />
      <IndustriesSection />
      <ComparisonTable />
      <ReviewCarousel />
      <FinancingSection />
      <GuidesSection />
      <HomeFAQ />
      <BottomCTA />
    </>
  )
}
