'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const root = document.querySelector('.home-motion')
    if (!root) return
    const targets = root.querySelectorAll<HTMLElement>(
      '.home-motion > section:not(.hero):not(.client-strip) .wrap > *, .home-motion > section:not(.hero):not(.client-strip) .head-row > *, #signGrid > .card, #indGrid > .card, .featured-project, .loc-box, .process-step, .guide-card'
    )
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('motion-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    targets.forEach((target) => {
      const siblings = target.parentElement?.children
      const order = siblings ? Array.prototype.indexOf.call(siblings, target) % 4 : 0
      target.style.setProperty('--motion-order', String(order))
      target.classList.add('motion-reveal')
      observer.observe(target)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.home-motion .hero')
    if (!hero) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      const offset = reducedMotion.matches ? 0 : Math.min(window.scrollY * 0.16, 64)
      hero.style.setProperty('--hero-parallax', `${offset}px`)
    }
    const onScroll = () => {
      if (!frame && window.scrollY < hero.offsetHeight + 100) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    reducedMotion.addEventListener('change', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      reducedMotion.removeEventListener('change', update)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={`font-variant-${font} home-motion`}>
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
