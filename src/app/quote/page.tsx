import type { Metadata } from 'next'
import { Suspense } from 'react'
import QuoteWizard from '@/components/quote/QuoteWizard'
import { QUOTE_TYPES } from '@/data/siteData'

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

type QuotePageProps = { searchParams: Promise<{ type?: string | string[] }> }

async function QuoteWithSelection({ searchParams }: QuotePageProps) {
  const { type } = await searchParams
  const preselect = QUOTE_TYPES.find((item) => item.id === type)?.id
  return <QuoteWizard key={preselect} preselect={preselect} />
}

export default function QuotePage({ searchParams }: QuotePageProps) {
  return (
    <section className="paper" style={{ minHeight: '80vh' }}>
      <div className="wrap" style={{ paddingTop: 44, paddingBottom: 80 }}>
        <Suspense fallback={<p role="status">Loading quote form…</p>}>
          <QuoteWithSelection searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  )
}
