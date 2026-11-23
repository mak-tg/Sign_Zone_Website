import type { Metadata } from 'next'
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
    <>
      {/* Header */}
      <section className="dark" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">Free sign planning toolkit</div>
          <h1
            className="disp sec-h"
            style={{ fontSize: 'clamp(38px,6vw,60px)', lineHeight: 0.95, maxWidth: 900 }}
          >
            Plan your sign like a pro
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: 'var(--dsub)',
              margin: '18px 0 0',
              maxWidth: 640,
            }}
          >
            Five free tools to size your letters, estimate your budget, check your permit
            requirements and plan your opening-day timeline.
          </p>

          <ToolkitTabs />
        </div>
      </section>

      {/* CTA */}
      <section className="dark">
        <div
          className="wrap"
          style={{
            paddingTop: 48,
            paddingBottom: 48,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="disp" style={{ fontSize: 30, color: '#fff' }}>
              Numbers look right?
            </div>
            <div style={{ color: 'var(--dsub)', marginTop: 8, maxWidth: 440 }}>
              Get a written quote with real pricing from a licensed DFW sign contractor.
            </div>
          </div>
          <div className="btn-row">
            <a href="/quote" className="btn btn-blue">
              Get my free quote
            </a>
            <a href="tel:2147144623" className="btn btn-ghost">
              214-714-4623
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
