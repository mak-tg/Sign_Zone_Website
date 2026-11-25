import FAQAccordion from '@/components/ui/FAQAccordion'
import FaqJsonLd from '@/components/seo/FaqJsonLd'
import { HOME_FAQ } from '@/data/siteData'

export default function HomeFAQ() {
  return (
    <section className="paper sec">
      <FaqJsonLd items={HOME_FAQ} />
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="disp sec-h">Questions people often ask.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--muted)', margin: '20px 0 0' }}>
            Still unsure? Text a photo of your building to{' '}
            <a href="tel:2147144623" style={{ color: 'var(--blue)', fontWeight: 700 }}>214-714-4623</a>{' '}
            and we&apos;ll tell you what fits.
          </p>
        </div>
        <div className="faq" id="homeFaq" style={{ flex: '2 1 520px', minWidth: 0 }}>
          <FAQAccordion items={HOME_FAQ} />
        </div>
      </div>
    </section>
  )
}
