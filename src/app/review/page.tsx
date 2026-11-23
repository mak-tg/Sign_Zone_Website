import type { Metadata } from 'next'
import ReviewGateway from '@/components/review/ReviewGateway'

export const metadata: Metadata = {
  title: 'Leave a Review | Sign Zone Commercial Signs Dallas–Fort Worth',
  description:
    'Share your experience with Sign Zone. Your 5-star review helps local Dallas–Fort Worth business owners find trusted commercial sign design, permitting, and fabrication.',
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
    <section className="paper" style={{ minHeight: '85vh', paddingTop: 20, paddingBottom: 60 }}>
      <ReviewGateway />
    </section>
  )
}
