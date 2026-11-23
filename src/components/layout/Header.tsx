'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { LOCATION_PAGES } from '@/data/siteData'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locOpen, setLocOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const locRef = useRef<HTMLDivElement>(null)

  const closeLocMenu = () => {
    if (!locOpen || isClosing) return
    setIsClosing(true)
    setTimeout(() => {
      setLocOpen(false)
      setIsClosing(false)
    }, 160)
  }

  const toggleLocMenu = () => {
    if (locOpen) {
      closeLocMenu()
    } else {
      setLocOpen(true)
      setIsClosing(false)
    }
  }

  useEffect(() => {
    if (!locOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (locRef.current && !locRef.current.contains(e.target as Node)) {
        closeLocMenu()
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLocMenu()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [locOpen, isClosing])

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
            <Image
              src="/images/logo.png"
              alt="Sign Zone"
              width={167}
              height={52}
              priority
              style={{ height: 52, width: 'auto' }}
            />
          </Link>

          <nav className="main" aria-label="Main">
            <Link href="/signs" className="navlink">Signs</Link>
            <Link href="/industries" className="navlink">Industries</Link>

            {/* Locations dropdown */}
            <div className="nav-locations" ref={locRef}>
              <button
                type="button"
                className={`navlink nav-locations-btn${locOpen ? ' active' : ''}`}
                onClick={toggleLocMenu}
                aria-expanded={locOpen}
                aria-haspopup="true"
              >
                Locations <span className="loc-chevron" aria-hidden="true">▾</span>
              </button>

              {locOpen && (
                <div
                  className={`nav-locations-panel ${isClosing ? 'closing' : 'open'}`}
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
                          <span className="menu-city">{loc.name}</span>
                          <span className="menu-arrow" aria-hidden="true">↗</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="navlink">Projects</Link>
            <Link href="/toolkit" className="navlink">Sign Toolkit</Link>
            <Link href="/process" className="navlink">How it works</Link>
            <Link href="/financing" className="navlink">Financing</Link>
            <Link href="/guides" className="navlink">Guides</Link>
          </nav>

          <div className="hdr-cta">
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
        <Link href="/industries" onClick={() => setMobileOpen(false)}>Industries</Link>
        <Link href="/#locations" onClick={() => setMobileOpen(false)}>Locations</Link>
        {LOCATION_PAGES.map((loc) => (
          <Link key={loc.slug} href={`/locations/${loc.slug}`} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 36, fontSize: 14 }}>
            {loc.name}
          </Link>
        ))}
        <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
        <Link href="/toolkit" onClick={() => setMobileOpen(false)}>Sign Toolkit</Link>
        <Link href="/process" onClick={() => setMobileOpen(false)}>How it works</Link>
        <Link href="/financing" onClick={() => setMobileOpen(false)}>Financing</Link>
        <Link href="/guides" onClick={() => setMobileOpen(false)}>Guides</Link>
        <Link href="/quote" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
      </nav>
    </>
  )
}
