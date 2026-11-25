import type { Metadata } from 'next'
import HomeClient from '@/components/home/HomeClient'

export const metadata: Metadata = {
  title: 'Sign Zone | Custom Business Signs in Dallas–Fort Worth',
  description:
    'Channel letters, monument, pylon, storefront, interior and vehicle signs for Dallas–Fort Worth businesses of every size. One team designs it, permits it, builds it and installs it.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return <HomeClient />
}
