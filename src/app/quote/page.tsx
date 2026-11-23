import type { Metadata } from 'next'
import QuoteWizard from '@/components/quote/QuoteWizard'

export const metadata: Metadata = {
  title: 'Get a Free Commercial Sign Quote | Sign Zone DFW',
  description:
    'Get a fast, free written quote for channel letters, monument signs, storefront lightboxes, and vehicle wraps across the entire Dallas–Fort Worth metroplex.',
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: 'Get a Free Commercial Sign Quote | Sign Zone DFW',
    description:
      'Request your free written estimate with local permitting and installation included.',
    url: 'https://www.signzoneusa.com/quote',
  },
}

export default function QuotePage() {
  return (
    <section className="paper" style={{ minHeight: '80vh' }}>
      <div className="wrap" style={{ paddingTop: 44, paddingBottom: 80 }}>
        <QuoteWizard />
      </div>
    </section>
  )
}
