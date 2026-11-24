import type { Metadata } from 'next'
import SignTypesGrid from '@/components/home/SignTypesGrid'

export const metadata: Metadata = {
  title: 'Commercial Sign Types & Custom Fabrication | Sign Zone DFW',
  description:
    'Explore exterior and interior commercial sign types in Dallas–Fort Worth: front-lit & halo-lit channel letters, monument signs, pylon signs, cabinet lightboxes, and vehicle graphics.',
  alternates: {
    canonical: '/signs',
  },
  openGraph: {
    title: 'Commercial Sign Types & Custom Fabrication | Sign Zone DFW',
    description:
      'Exterior and interior commercial sign types for Dallas–Fort Worth businesses: channel letters, monuments, pylons, lightboxes, and fleet wraps.',
    url: 'https://www.signzoneusa.com/signs',
  },
}

export default function Page() {
  return <SignTypesGrid asH1={true} />
}
