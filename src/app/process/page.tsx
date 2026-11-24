import type { Metadata } from 'next'
import ProcessSteps from '@/components/home/ProcessSteps'

export const metadata: Metadata = {
  title: 'How It Works: Commercial Sign Design to Installation Process | Sign Zone',
  description:
    'Our 6-step turnkey sign process in Dallas–Fort Worth: consultation, municipal permitting & engineering, custom fabrication, installation, inspection, and lifetime maintenance.',
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: 'How We Build Commercial Signs | Sign Zone Turnkey Process',
    description:
      'From design and landlord criteria to city permits, fabrication, and crane installation with one project manager throughout.',
    url: 'https://www.signzoneusa.com/process',
  },
}

export default function Page() {
  return <ProcessSteps asH1={true} />
}
