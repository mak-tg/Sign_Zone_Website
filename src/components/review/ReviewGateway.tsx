'use client'

import { useState } from 'react'
import Image from 'next/image'
import { trackReviewClick, trackCall } from '@/lib/analytics'

export default function ReviewGateway() {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)

  const googleReviewUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    'https://search.google.com/local/writereview?placeid=ChIJ853yv98kTIYR_placeholder_signzone'

  const handleReviewClick = () => {
    trackReviewClick('google')
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="review-gateway-shell" style={{ maxWidth: 960, margin: '0 auto' }}>
      {/* Redesigned 2-Column Split Container (Project Standard Theme) */}
      <div
        className="card review-gateway-grid"
        style={{
          background: '#ffffff',
          border: '1px solid var(--soft)',
          borderRadius: 24,
          padding: '44px 38px',
          boxShadow: '0 10px 36px rgba(6, 38, 102, 0.07)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 36,
          alignItems: 'center',
        }}
      >
        {/* Left Column: Rating & Stars Action */}
        <div className="review-gateway-rating" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <span className="tag" style={{ marginBottom: 14 }}>
            Verified Client Review
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
              fontSize: 'clamp(24px, 3.2vw, 32px)',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 12px',
              color: 'var(--navy)',
              letterSpacing: '-.01em',
            }}
          >
            Tell us how we did
          </h2>

          <p
            style={{
              fontSize: 15,
              color: 'var(--muted)',
              lineHeight: 1.55,
              margin: '0 0 24px',
              maxWidth: 420,
            }}
          >
            Click a star below to open our Google review page directly. It takes under 60 seconds and helps local business owners find reliable sign craft.
          </p>

          {/* Interactive 5-Star Cluster */}
          <div className="review-rating-actions" style={{ width: '100%' }}>
            <div
              className="review-star-cluster"
              style={{
                display: 'inline-flex',
                gap: 10,
                cursor: 'pointer',
                padding: '10px 18px',
                borderRadius: 999,
                background: 'var(--paper)',
                border: '1px solid var(--soft)',
                boxShadow: hoveredStar !== null ? '0 4px 16px rgba(251, 191, 36, 0.25)' : 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {[1, 2, 3, 4, 5].map((star) => {
                const activeCount = hoveredStar !== null ? hoveredStar : 5
                const isFilled = star <= activeCount
                return (
                  <button
                    key={star}
                    type="button"
                    aria-label={`Leave a ${star}-star review on Google`}
                    title="Click to rate on Google"
                    onMouseEnter={() => setHoveredStar(star)}
                    onClick={handleReviewClick}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      margin: 0,
                      cursor: 'pointer',
                      fontSize: 'clamp(32px, 5vw, 40px)',
                      lineHeight: 1,
                      color: isFilled ? '#fbbf24' : '#cbd5e1',
                      filter: isFilled ? 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.7))' : 'none',
                      transition: 'transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), color 0.16s ease, filter 0.16s ease',
                      transform: hoveredStar !== null && star <= hoveredStar ? 'scale(1.22)' : 'scale(1)',
                    }}
                  >
                    ★
                  </button>
                )
              })}
            </div>

            {/* Clickable Helper Link with Google G Logo */}
            <div className="review-google-link" style={{ marginTop: 12 }}>
              <button
                type="button"
                onClick={handleReviewClick}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--blue)',
                  fontSize: 14,
                  fontWeight: 700,
                  padding: '4px 0',
                  transition: 'color 0.15s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--blue2)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--blue)')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
                <span>
                  {hoveredStar !== null
                    ? `Rate ${hoveredStar}.0 ★ on Google →`
                    : 'Tap any star to leave a review on Google →'}
                </span>
              </button>
            </div>
          </div>

          {/* Professional Commercial Trust Signals */}
          <div
            className="review-trust-signals"
            style={{
              marginTop: 22,
              paddingTop: 16,
              borderTop: '1px solid var(--soft)',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
              fontSize: 13,
              color: 'var(--muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--navy)', fontWeight: 700 }}>Serving North Texas</span>
            </div>
            <span style={{ width: 1, height: 14, background: 'var(--soft)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 11 11 13 15 9" />
              </svg>
              <span><strong style={{ color: 'var(--navy)' }}>15+ Years</strong> of Commercial Sign Experience</span>
            </div>
          </div>
        </div>

        {/* Right Column: QR Code Container with Animated Laser Scan Beam */}
        <div
          className="review-qr-panel"
          style={{
            background: 'var(--paper)',
            border: '1px solid var(--soft)',
            borderRadius: 20,
            padding: '30px 24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
              fontSize: 20,
              fontWeight: 800,
              color: 'var(--navy)',
              margin: '0 0 10px',
            }}
          >
            Use your phone to scan
          </h3>

          <p
            style={{
              fontSize: 13,
              color: 'var(--muted)',
              margin: '0 0 16px',
              maxWidth: 240,
              lineHeight: 1.45,
            }}
          >
            Point your smartphone camera at the code below to open the review form directly:
          </p>

          {/* QR Scanner Frame with Animated Laser Beam */}
          <div className="qr-scanner-frame" style={{ border: '1px solid var(--soft)', borderRadius: 14 }}>
            <div className="qr-scan-line" />
            <Image
              src="/images/review-qr.svg"
              alt="Scan to open Google Review for Sign Zone DFW"
              width={128}
              height={128}
              style={{ display: 'block' }}
            />
          </div>

          <span style={{ fontSize: 12, color: 'var(--muted2)', marginTop: 12, fontWeight: 500 }}>
            Opens review form instantly on mobile
          </span>
        </div>
      </div>
    </div>
  )
}
