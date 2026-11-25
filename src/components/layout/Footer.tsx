import Link from 'next/link'
import LogoMark from '@/components/brand/LogoMark'

export default function Footer() {
  return (
    <footer>
      <div className="wrap cols">
        <div className="col">
          <LogoMark wordOne="var(--logo-1)" wordTwo="var(--logo-2)" arrow="var(--logo-2)" title="Sign Zone Commercial Business Signs Dallas-Fort Worth" style={{ height: 56, width: 'auto', alignSelf: 'flex-start' }} />
          <span>Custom business signs for Dallas–Fort Worth.</span>
          <span>Dallas–Fort Worth Metroplex, Texas</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
            <span
              title="Licensed by the Texas Department of Licensing and Regulation"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '.05em',
                padding: '4px 8px',
                borderRadius: 4,
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                color: 'var(--dmuted)',
                textTransform: 'uppercase',
              }}
            >
              TDLR Licensed Contractor
            </span>
            <span
              title="UL 48 Listed electric sign components and safety standard"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '.05em',
                padding: '4px 8px',
                borderRadius: 4,
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                color: 'var(--dmuted)',
                textTransform: 'uppercase',
              }}
            >
              UL 48 Components
            </span>
            <span
              title="3M Matched Component System for outdoor graphic longevity"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '.05em',
                padding: '4px 8px',
                borderRadius: 4,
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                color: 'var(--dmuted)',
                textTransform: 'uppercase',
              }}
            >
              3M Matched Materials
            </span>
          </div>
        </div>

        <nav aria-label="Signs" style={{ gap: 8 }}>
          <strong>Signs</strong>
          <Link href="/channel-letters">Channel letters</Link>
          <Link href="/monument-signs">Monument signs</Link>
          <Link href="/pylon-signs">Pylon &amp; pole signs</Link>
          <Link href="/storefront-signs">Storefront &amp; cabinet signs</Link>
          <Link href="/blade-signs">Blade &amp; projecting signs</Link>
          <Link href="/awnings-canopies">Awnings &amp; canopies</Link>
          <Link href="/lobby-signs">Lobby &amp; logo walls</Link>
          <Link href="/interior-ada-signs">Interior &amp; ADA</Link>
          <Link href="/wall-murals">Wall murals &amp; graphics</Link>
          <Link href="/vehicle-wraps">Vehicle wraps</Link>
          <Link href="/window-graphics">Window graphics</Link>
          <Link href="/banners-temporary">Banners &amp; temporary</Link>
          <Link href="/led-message-centers">LED message centers</Link>
          <Link href="/digital-menu-boards">Digital menu boards</Link>
        </nav>

        <nav aria-label="Plan">
          <strong>Plan</strong>
          <Link href="/toolkit">Sign Toolkit</Link>
          <Link href="/process">How it works</Link>
          <Link href="/financing">Financing</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/sign-repair">Repair &amp; maintenance</Link>
          <Link href="/franchise-signs">Multi-location programs</Link>
          <Link href="/about">About Sign Zone</Link>
          <Link href="/contact">Contact us</Link>
        </nav>

        <div className="col">
          <strong>Talk to us</strong>
          <a href="tel:2147144623" style={{ color: 'var(--hl)', fontWeight: 700, fontSize: 18 }}>
            214-714-4623
          </a>
          <a href="mailto:Alex@signzoneusa.com">Alex@signzoneusa.com</a>
          <span>Mon–Fri · 8:00 AM – 6:00 PM</span>
          <Link
            href="/contact"
            className="btn btn-blue"
            style={{
              marginTop: 12,
              padding: '8px 18px',
              fontSize: 13.5,
              fontWeight: 700,
              borderRadius: 8,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              alignSelf: 'flex-start',
            }}
          >
            <span>Contact Us</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap legal">
        <span>© 2026 Sign Zone · www.signzoneusa.com · Licensed Texas Electrical Sign Contractor</span>
        <span>
          <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link> ·{' '}
          <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</Link> ·{' '}
          <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link> ·{' '}
          <Link href="/accessibility" style={{ color: 'inherit', textDecoration: 'none' }}>Accessibility</Link> ·{' '}
          <Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link> ·{' '}
          <Link href="/review">Leave a review</Link>
        </span>
      </div>
    </footer>
  )
}
