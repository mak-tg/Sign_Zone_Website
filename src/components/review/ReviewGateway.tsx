'use client'

import Image from 'next/image'
import { trackReviewClick, trackCall } from '@/lib/analytics'

export default function ReviewGateway() {
  const googleReviewUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    'https://search.google.com/local/writereview?placeid=ChIJ853yv98kTIYR_placeholder_signzone'

  const handleReviewClick = () => {
    trackReviewClick('google')
    window.open(googleReviewUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '36px 24px',
        color: '#f8fafc',
      }}
    >
      {/* Header Card */}
      <div
        style={{
          background: '#0e1526',
          border: '1px solid #1e2c4a',
          borderRadius: 12,
          padding: '36px 28px',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ display: 'inline-flex', gap: 6, marginBottom: 16 }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#f59e0b', fontSize: 28, lineHeight: 1 }}>
              ★
            </span>
          ))}
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '0 0 12px',
            color: '#ffffff',
          }}
        >
          Thank You for Choosing Sign Zone!
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-inter, Inter, sans-serif)',
            fontSize: 16,
            color: '#94a3b8',
            maxWidth: 540,
            margin: '0 auto 28px',
            lineHeight: 1.5,
          }}
        >
          Your new commercial sign is designed, permitted, and built to make your business stand out.
          Sharing your experience on Google helps other North Texas business owners find reliable
          sign craft.
        </p>

        {/* Primary CTA Button */}
        <button
          onClick={handleReviewClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            background: '#2563eb',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: 16,
            padding: '16px 36px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
            transition: 'background 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = '#1d4ed8')}
          onMouseOut={(e) => (e.currentTarget.style.background = '#2563eb')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#ffffff"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#ffffff"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#ffffff"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#ffffff"
            />
          </svg>
          Leave a Review on Google
        </button>
      </div>

      {/* Two-Column Grid: QR Code for Installers + Review Prompts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginTop: 24,
        }}
      >
        {/* QR Code Container */}
        <div
          style={{
            background: '#0e1526',
            border: '1px solid #1e2c4a',
            borderRadius: 12,
            padding: 24,
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: '#38bdf8',
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 8,
            }}
          >
            On Job Site / Mobile
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
              fontSize: 18,
              fontWeight: 700,
              margin: '0 0 16px',
              color: '#ffffff',
            }}
          >
            Scan with Your Phone
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 8,
              padding: 12,
              display: 'inline-block',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            <Image
              src="/images/review-qr.svg"
              alt="Scan to leave a Google Review for Sign Zone DFW"
              width={160}
              height={160}
              style={{ display: 'block' }}
            />
          </div>
          <p
            style={{
              fontSize: 12,
              color: '#64748b',
              marginTop: 12,
              lineHeight: 1.4,
            }}
          >
            Point your camera at the QR code to open the review screen directly.
          </p>
        </div>

        {/* Local SEO Review Prompts */}
        <div
          style={{
            background: '#0e1526',
            border: '1px solid #1e2c4a',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: '#f59e0b',
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 8,
            }}
          >
            Review Tips
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-archivo, Archivo, sans-serif)',
              fontSize: 18,
              fontWeight: 700,
              margin: '0 0 12px',
              color: '#ffffff',
            }}
          >
            Helpful details to mention:
          </h3>
          <ul
            style={{
              paddingLeft: 18,
              margin: 0,
              fontSize: 13,
              color: '#94a3b8',
              lineHeight: 1.7,
            }}
          >
            <li>
              <strong style={{ color: '#ffffff' }}>Your Location:</strong> What city in DFW is your
              business in? (Dallas, Plano, Frisco, Fort Worth, etc.)
            </li>
            <li>
              <strong style={{ color: '#ffffff' }}>Sign Type:</strong> Channel letters, monument
              sign, pylon, blade sign, or storefront lightbox?
            </li>
            <li>
              <strong style={{ color: '#ffffff' }}>Our Service:</strong> How did our permitting,
              communication, and installation crew perform?
            </li>
          </ul>
        </div>
      </div>

      {/* Direct Resolution Notice */}
      <div
        style={{
          marginTop: 24,
          background: '#090e1a',
          border: '1px solid #1e293b',
          borderRadius: 8,
          padding: '16px 20px',
          textAlign: 'center',
          fontSize: 13,
          color: '#64748b',
        }}
      >
        <span>Have an issue or need an adjustment before reviewing? </span>
        <a
          href="tel:2147144623"
          onClick={() => trackCall('review_page_support')}
          style={{ color: '#38bdf8', fontWeight: 600, textDecoration: 'none' }}
        >
          Call Alex directly at 214-714-4623
        </a>
        <span> — we stand behind every sign 100%.</span>
      </div>
    </div>
  )
}
