'use client'

import { useState } from 'react'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ClientStrip from '@/components/home/ClientStrip'
import StagesSection from '@/components/home/StagesSection'
import SignTypesGrid from '@/components/home/SignTypesGrid'
import LocationsSection from '@/components/home/LocationsSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import EstimateSection from '@/components/home/EstimateSection'
import ProcessSteps from '@/components/home/ProcessSteps'
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ComparisonTable from '@/components/home/ComparisonTable'
import ReviewCarousel from '@/components/home/ReviewCarousel'
import FinancingSection from '@/components/home/FinancingSection'
import GuidesSection from '@/components/home/GuidesSection'
import HomeFAQ from '@/components/home/HomeFAQ'
import BottomCTA from '@/components/home/BottomCTA'
import FontSwitcher, { FontChoice } from '@/components/common/FontSwitcher'

export default function HomeClient() {
  const [font, setFont] = useState<FontChoice>('jakarta')

  return (
    <div className={`font-variant-${font}`}>
      <Hero />
      <TrustBar />
      <ClientStrip />
      <StagesSection />
      <SignTypesGrid />
      <LocationsSection />
      <ProjectsSection />
      <EstimateSection />
      <ProcessSteps />
      <FeaturedProjectsSection />
      <IndustriesSection />
      <ComparisonTable />
      <ReviewCarousel />
      <FinancingSection />
      <GuidesSection />
      <HomeFAQ />
      <BottomCTA />
      <FontSwitcher initialFont={font} onFontChange={setFont} />
    </div>
  )
}
