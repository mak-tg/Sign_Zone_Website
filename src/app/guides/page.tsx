import type { Metadata } from 'next'
import GuidesSection from '@/components/home/GuidesSection'

export const metadata: Metadata = {
  title: "Sign Buyer's Guides & Cost Factors | Sign Zone Dallas–Fort Worth",
  description:
    'Straight answers before you buy: commercial sign cost factors, landlord criteria secrets, city permitting timelines, and letter size visibility rules for North Texas businesses.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: "Commercial Sign Buyer's Guides | Sign Zone DFW",
    description:
      'Clear, honest breakdowns of commercial sign pricing, municipal permits, landlord packages, and visibility sizing.',
    url: 'https://www.signzoneusa.com/guides',
  },
}

export default function Page() {
  return <GuidesSection />
}
