import type { Metadata } from 'next'
import FinancingSection from '@/components/home/FinancingSection'

export const metadata: Metadata = {
  title: 'Commercial Sign Financing & Monthly Payment Plans | Sign Zone DFW',
  description:
    'Flexible commercial sign financing and equipment leasing for Dallas–Fort Worth businesses. Preserve cash flow with manageable monthly payments on signs from $5,000 to $100,000+.',
  alternates: {
    canonical: '/financing',
  },
  openGraph: {
    title: 'Commercial Sign Financing Options | Sign Zone DFW',
    description:
      'Spread the cost of your custom storefront, monument, or channel letter sign into affordable monthly payments.',
    url: 'https://www.signzoneusa.com/financing',
  },
}

export default function Page() {
  return <FinancingSection asH1={true} />
}
