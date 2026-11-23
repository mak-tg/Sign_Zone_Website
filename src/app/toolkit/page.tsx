import type { Metadata } from 'next'
import Link from 'next/link'
import ToolkitTabs from '@/components/toolkit/ToolkitTabs'

export const metadata: Metadata = {
  title: 'Free Commercial Sign Planning Toolkit: Cost, Visibility & Permit Calculators',
  description:
    'Five free interactive tools for DFW sign buyers: commercial sign cost estimator, letter visibility calculator, sign ROI payback tool, permit checklist, and opening-day timeline planner.',
  alternates: {
    canonical: '/toolkit',
  },
  openGraph: {
    title: 'Free Sign Planning Toolkit | Sign Zone DFW',
    description:
      'Plan your commercial sign like a pro: letter sizing, budget estimators, permit checklists, and opening timeline planners.',
    url: 'https://www.signzoneusa.com/toolkit',
  },
}

export default function ToolkitPage() {
  return (
    <div className="view" id="v-toolkit">
      {/* Hero Header (Dark Theme) */}
      <section className="dark" style={{ paddingTop: 48, paddingBottom: 60 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 28 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <span style={{ color: '#fff' }}>Toolkit</span>
          </nav>
          <div className="eyebrow">Free Sign Planning Toolkit</div>
          <h1
            className="disp sec-h"
            style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', lineHeight: 0.98, maxWidth: 900 }}
          >
            Plan your sign like a pro.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: 'var(--dsub)',
              margin: '18px 0 0',
              maxWidth: 640,
            }}
          >
            Five free tools to size your letters, estimate your budget, check your permit
            requirements and plan your opening-day timeline.
          </p>
        </div>
      </section>

      {/* Interactive Tool Area (Project Standard Light Paper Theme) */}
      <section className="light sec" style={{ background: 'var(--paper)', paddingTop: 48, paddingBottom: 80, minHeight: '60vh' }}>
        <div className="wrap">
          <ToolkitTabs />
        </div>
      </section>

      {/* CTA Section (Dark Theme) */}
      <section className="dark" style={{ borderTop: '1px solid var(--line2)' }}>
        <div
          className="wrap"
          style={{
            paddingTop: 56,
            paddingBottom: 56,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="disp" style={{ fontSize: 'clamp(24px, 4vw, 32px)', color: '#fff' }}>
              Numbers look right?
            </div>
            <div style={{ color: 'var(--dsub)', marginTop: 8, maxWidth: 460, fontSize: 15, lineHeight: 1.5 }}>
              Get a written quote with real pricing from a licensed DFW sign contractor.
            </div>
          </div>
          <div className="btn-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-blue">
              Get my free quote
            </Link>
            <a href="tel:2147144623" className="btn btn-ghost">
              214-714-4623
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
