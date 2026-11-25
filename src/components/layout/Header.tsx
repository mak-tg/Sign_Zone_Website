'use client'
import Link from 'next/link'
import LogoMark from '@/components/brand/LogoMark'
import ThemeToggle from '@/components/layout/ThemeToggle'
import { useState, useRef, useEffect } from 'react'
import { LOCATION_PAGES, INDUSTRIES } from '@/data/siteData'

const RESOURCE_LINKS = [
  { href: '/toolkit', label: 'Sign Toolkit', desc: 'Calculators, permit checklist and planner' },
  { href: '/process', label: 'How it works', desc: 'Our six steps, from idea to lights on' },
  { href: '/guides', label: 'Guides', desc: "Sign buyer's guides and straight answers" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<'loc' | 'res' | 'ind' | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  const [mobileRes, setMobileRes] = useState(false)
  const locRef = useRef<HTMLDivElement>(null)
  const resRef = useRef<HTMLDivElement>(null)
  const indRef = useRef<HTMLDivElement>(null)
  const locOpen = openMenu === 'loc'
  const resOpen = openMenu === 'res'
  const indOpen = openMenu === 'ind'
  const [mobileInd, setMobileInd] = useState(false)
  const [mobileLoc, setMobileLoc] = useState(false)

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const closeMenu = () => {
    if (!openMenu || isClosing) return
    setIsClosing(true)
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null)
      setIsClosing(false)
    }, 160)
  }
  const closeLocMenu = closeMenu

  const toggleMenu = (menu: 'loc' | 'res' | 'ind') => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    if (openMenu === menu && !isClosing) {
      closeMenu()
    } else {
      setOpenMenu(menu)
      setIsClosing(false)
    }
  }

  useEffect(() => {
    if (!openMenu) return
    const handleClickOutside = (e: MouseEvent) => {
      const t = e.target as Node
      const inside = [locRef, indRef, resRef].some((r) => r.current?.contains(t))
      if (!inside) closeMenu()
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openMenu, isClosing])

  return (
    <>
      {/* Utility bar */}
      <div className="util">
        <div className="wrap">
          <span className="hide-sm">Serving the Dallas–Fort Worth Metroplex · Design · Permits · Fabrication · Installation</span>
          <span style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="tel:2147144623">Call or text 214-714-4623</a>
            <span className="hide-sm">Mon–Fri · 8:00 AM – 6:00 PM</span>
          </span>
        </div>
      </div>

      {/* Site header */}
      <header className="site">
        <div className="wrap">
          <Link href="/" aria-label="Sign Zone home" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <LogoMark wordOne="var(--logo-1)" wordTwo="var(--logo-2)" arrow="var(--logo-2)" title="Sign Zone - Custom Business Signs Dallas-Fort Worth" style={{ height: 52, width: 'auto' }} />
          </Link>

          <nav className="main" aria-label="Main">
            <Link href="/signs" className="navlink">Signs</Link>

            {/* Industries mega menu */}
            <div className="nav-locations" ref={indRef}>
              <button
                type="button"
                className={`navlink nav-locations-btn${indOpen ? ' active' : ''}`}
                onClick={() => toggleMenu('ind')}
                aria-expanded={indOpen}
                aria-haspopup="true"
              >
                Industries <span className="loc-chevron" aria-hidden="true">▾</span>
              </button>

              {indOpen && (
                <div
                  className={`nav-locations-panel industries-menu-panel ${isClosing ? 'closing' : 'open'}`}
                  role="region"
                  aria-label="Industries menu"
                >
                  <div className="location-menu-intro">
                    <span className="location-menu-kicker"><i></i> INDUSTRIES</span>
                    <strong>Signs for<br /><em>your kind of business.</em></strong>
                    <p>We know the landlord criteria and city codes for each.</p>
                    <Link href="/industries" className="location-menu-all" onClick={closeMenu}>
                      View all industries <span>→</span>
                    </Link>
                  </div>
                  <div className="location-menu-places">
                    <div className="location-menu-label">
                      CHOOSE YOUR INDUSTRY <span>{String(INDUSTRIES.length).padStart(2, '0')} INDUSTRIES</span>
                    </div>
                    <div className="nav-locations-grid">
                      {INDUSTRIES.map((ind) => (
                        <Link key={ind.slug} href={`/industries/${ind.slug}`} onClick={closeMenu}>
                          <span className="menu-pin" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                              <path d="M3 21h18M5 21V7l7-4v18M12 11h7v10" />
                              <path d="M8 9h.01M8 13h.01M8 17h.01M15 14h.01M18 14h.01M15 17h.01M18 17h.01" strokeLinecap="round" />
                            </svg>
                          </span>
                          <span className="menu-city">
                            <span className="menu-title">{ind.name}</span>
                            <span className="menu-desc">{ind.desc}</span>
                          </span>
                          <span className="menu-arrow" aria-hidden="true">↗</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="nav-locations" ref={locRef}>
              <button
                type="button"
                className={`navlink nav-locations-btn${locOpen ? ' active' : ''}`}
                onClick={() => toggleMenu('loc')}
                aria-expanded={locOpen}
                aria-haspopup="true"
              >
                Locations <span className="loc-chevron" aria-hidden="true">▾</span>
              </button>

              {locOpen && (
                <div
                  className={`nav-locations-panel locations-menu-panel ${isClosing ? 'closing' : 'open'}`}
                  role="region"
                  aria-label="Locations menu"
                >
                  <div className="location-menu-intro">
                    <span className="location-menu-kicker"><i></i> DALLAS–FORT WORTH</span>
                    <strong>Local signs.<br /><em>Built to stand out.</em></strong>
                    <p>Find sign solutions and local work in your city.</p>
                    <Link href="/#locations" className="location-menu-all" onClick={closeLocMenu}>
                      Explore service areas <span>→</span>
                    </Link>
                  </div>
                  <div className="location-menu-places">
                    <div className="location-menu-label">
                      CHOOSE YOUR CITY <span>{LOCATION_PAGES.length} LOCATIONS</span>
                    </div>
                    <div className="nav-locations-grid">
                      {LOCATION_PAGES.map((loc) => (
                        <Link key={loc.slug} href={`/locations/${loc.slug}`} onClick={closeLocMenu}>
                          <span className="menu-pin">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                              <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
                              <circle cx="12" cy="10" r="2.3" />
                            </svg>
                          </span>
                          <span className="menu-city">
                            <span className="menu-title">{loc.name}</span>
                            <span className="menu-desc">{loc.desc}</span>
                          </span>
                          <span className="menu-arrow" aria-hidden="true">↗</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="navlink">Projects</Link>

            {/* Resources dropdown */}
            <div className="nav-resources" ref={resRef}>
              <button
                type="button"
                className={`navlink nav-locations-btn${resOpen ? ' active' : ''}`}
                onClick={() => toggleMenu('res')}
                aria-expanded={resOpen}
                aria-haspopup="true"
              >
                Resources <span className="loc-chevron" aria-hidden="true">▾</span>
              </button>
              {resOpen && (
                <div
                  className={`nav-resources-panel ${isClosing ? 'closing' : 'open'}`}
                  role="region"
                  aria-label="Resources menu"
                >
                  {RESOURCE_LINKS.map((r) => (
                    <Link key={r.href} href={r.href} onClick={closeMenu}>
                      <strong>{r.label}</strong>
                      <span>{r.desc}</span>
                    </Link>
                  ))}
                  <Link href="/resources" onClick={closeMenu} className="res-all">
                    <strong>View all resources →</strong>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/financing" className="navlink">Financing</Link>
          </nav>

          <div className="hdr-cta">
            <ThemeToggle />
            <a href="tel:2147144623" className="btn btn-dark btn-sm hide-md">214-714-4623</a>
            <Link href="/quote" className="btn btn-blue btn-sm">Get a Free Quote</Link>
            <button
              className="burger"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="22" height="16" fill="none" viewBox="0 0 22 16">
                <rect y="0" width="22" height="2" rx="1" fill="currentColor"/>
                <rect y="7" width="22" height="2" rx="1" fill="currentColor"/>
                <rect y="14" width="22" height="2" rx="1" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className={`mnav${mobileOpen ? ' open' : ''}`} aria-label="Mobile">
        <Link href="/signs" onClick={() => setMobileOpen(false)}>Signs</Link>
        <button
          type="button"
          className="mnav-toggle"
          onClick={() => setMobileInd((v) => !v)}
          aria-expanded={mobileInd}
        >
          Industries <span className="loc-chevron" aria-hidden="true" style={{ transform: mobileInd ? 'rotate(180deg)' : undefined }}>▾</span>
        </button>
        {mobileInd && (
          <>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 36, fontSize: 14 }}>
                {ind.name}
              </Link>
            ))}
            <Link href="/industries" onClick={() => setMobileOpen(false)} style={{ paddingLeft: 36, fontSize: 14 }}>
              View all industries →
            </Link>
          </>
        )}
        <button
          type="button"
          className="mnav-toggle"
          onClick={() => setMobileLoc((v) => !v)}
          aria-expanded={mobileLoc}
        >
          Locations <span className="loc-chevron" aria-hidden="true" style={{ transform: mobileLoc ? 'rotate(180deg)' : undefined }}>▾</span>
        </button>
        {mobileLoc && (
          <>
            {LOCATION_PAGES.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 36, fontSize: 14 }}>
                {loc.name}
              </Link>
            ))}
            <Link href="/#locations" onClick={() => setMobileOpen(false)} style={{ paddingLeft: 36, fontSize: 14 }}>
              Explore service areas →
            </Link>
          </>
        )}
        <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
        <button
          type="button"
          className="mnav-toggle"
          onClick={() => setMobileRes((v) => !v)}
          aria-expanded={mobileRes}
        >
          Resources <span className="loc-chevron" aria-hidden="true" style={{ transform: mobileRes ? 'rotate(180deg)' : undefined }}>▾</span>
        </button>
        {mobileRes && RESOURCE_LINKS.map((r) => (
          <Link key={r.href} href={r.href} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 36, fontSize: 14 }}>
            {r.label}
          </Link>
        ))}
        <Link href="/financing" onClick={() => setMobileOpen(false)}>Financing</Link>
        <Link href="/quote" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
      </nav>
    </>
  )
}
