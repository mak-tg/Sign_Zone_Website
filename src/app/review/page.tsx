import type { Metadata } from 'next'
import Link from 'next/link'
import ReviewGateway from '@/components/review/ReviewGateway'
import ReviewCarousel from '@/components/home/ReviewCarousel'

export const metadata: Metadata = {
  title: 'Leave a Review | Sign Zone Commercial Signs Dallas–Fort Worth',
  description:
    'Share your experience with Sign Zone. Your 5-star review helps local Dallas–Fort Worth business owners find trusted commercial sign design, permitting, and fabrication.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/review',
  },
  openGraph: {
    title: 'Review Sign Zone | Dallas–Fort Worth Sign Contractor',
    description:
      'Leave your review for Sign Zone DFW commercial business signs, channel letters, and monument signs.',
    url: 'https://www.signzoneusa.com/review',
  },
}

export default function ReviewPage() {
  return (
    <div className="view" id="v-review">
      {/* Hero Header (Dark Theme) */}
      <section className="dark" style={{ paddingTop: 64, paddingBottom: 68 }}>
        <div className="wrap">
          <nav aria-label="Breadcrumb" style={{ fontSize: 14, color: 'var(--dmuted)', marginBottom: 20 }}>
            <Link href="/" style={{ color: 'var(--dmuted)', textDecoration: 'none' }}>
              Home
            </Link>
            {' / '}
            <span style={{ color: '#fff' }}>Leave a Review</span>
          </nav>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Client Feedback
          </div>
          <h1
            className="disp sec-h"
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              lineHeight: 1.05,
              margin: '0 0 18px',
              maxWidth: 880,
            }}
          >
            Thank you for choosing Sign Zone.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: 'var(--dsub)',
              margin: 0,
              maxWidth: 640,
            }}
          >
            Your new commercial sign is custom engineered, permitted, and built to make your business
            stand out. Sharing your feedback takes less than 60 seconds and helps fellow North Texas owners find reliable sign craft.
          </p>
        </div>
      </section>

      {/* Interactive Review Section (Project Standard Light Paper Theme) */}
      <section
        className="light sec"
        style={{
          background: 'var(--paper)',
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        <div className="wrap">
          <ReviewGateway />
        </div>
      </section>

      {/* Real Customer Reviews Marquee Slider (Same as Main Page) */}
      <ReviewCarousel />
    </div>
  )
}
