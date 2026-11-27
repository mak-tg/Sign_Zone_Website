'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PROJECTS, type ProjectItem } from '@/data/projectsData'

const HERO_PROJECT_IDS = [
  'burn-boot-camp',
  'malani-jewelers',
  'inso-kitchen',
  'fix-dental',
  'arwa-coffee',
  'blimpie-coldstone',
]

const CATEGORY_LABELS: Record<ProjectItem['category'], string> = {
  channel: 'Channel Letters',
  monument: 'Monument Signs',
  pylon: 'Pylon Signs',
  storefront: 'Storefront Signs',
  interior: 'Interior Signs',
  wrap: 'Vehicle Wraps',
}

const DISPLAY_NAMES: Record<string, string> = {
  'malani-jewelers': 'Malani Jewelers',
}

export default function HeroProjectSlideshow() {
  const slides = HERO_PROJECT_IDS
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p))

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length <= 1) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused, slides.length])

  const current = slides[active]
  if (!current) return null

  const goTo = (index: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActive((index + slides.length) % slides.length)
  }

  return (
    <div
      className="hero-showcase"
      style={{ flex: '1 1 420px', maxWidth: 520, width: '100%', minWidth: 0 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="hero-showcase-card"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          borderRadius: 20,
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          background: '#050811',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
        }}
      >
        {/* Full-frame clickable project slide */}
        <Link
          href={`/projects#${current.id}`}
          aria-label={`View ${current.name} project in ${current.city}`}
          style={{ position: 'absolute', inset: 0, display: 'block', textDecoration: 'none', zIndex: 1 }}
        >
          {slides.map((slide, idx) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`${slide.name} — ${slide.signType} in ${slide.city}, TX`}
              width={1600}
              height={1200}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: slide.id === 'malani-jewelers' ? 'center 30%' : 'center center',
                opacity: idx === active ? 1 : 0,
                transform: idx === active ? 'scale(1)' : 'scale(1.035)',
                transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* Transparent top & bottom gradient scrim (no solid background bar) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(5,8,16,0.52) 0%, rgba(5,8,16,0) 30%, rgba(5,8,16,0.12) 56%, rgba(5,8,16,0.92) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Top Bar: Category Pill & Slide Counter */}
          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              right: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              pointerEvents: 'none',
            }}
          >
            <span
              key={`pill-${current.id}`}
              className="hero-showcase-pill hero-showcase-animate"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                borderRadius: 999,
                background: 'rgba(7, 11, 22, 0.72)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(77, 141, 255, 0.4)',
                color: '#93C5FD',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              <span
                className="dot"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#4D8DFF',
                  boxShadow: '0 0 8px #4D8DFF',
                }}
              />
              {CATEGORY_LABELS[current.category]}
            </span>

            <span
              key={`count-${active}`}
              className="hero-showcase-animate"
              style={{
                padding: '5px 10px',
                borderRadius: 999,
                background: 'rgba(7, 11, 22, 0.72)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                color: '#FFFFFF',
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              {active + 1} / {slides.length}
            </span>
          </div>

          {/* Bottom-Left Overlay Text (animated per slide, no solid box) */}
          <div
            key={`meta-${current.id}`}
            className="hero-showcase-animate"
            style={{
              position: 'absolute',
              left: 18,
              right: 120,
              bottom: 16,
              pointerEvents: 'none',
            }}
          >
            <div
              className="hero-showcase-title"
              style={{
                margin: 0,
                fontSize: 'clamp(20px, 2vw, 25px)',
                lineHeight: 1.08,
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'none',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.75)',
              }}
            >
              {DISPLAY_NAMES[current.id] ?? current.name}
            </div>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: 13.5,
                lineHeight: 1.35,
                color: '#E2E8F0',
                fontWeight: 500,
                textShadow: '0 1px 8px rgba(0, 0, 0, 0.85)',
              }}
            >
              {current.signType}
            </p>
            <span
              style={{
                display: 'inline-block',
                marginTop: 4,
                fontSize: 12,
                fontWeight: 700,
                color: '#60A5FA',
                textShadow: '0 1px 8px rgba(0, 0, 0, 0.85)',
              }}
            >
              {current.city}, TX · View project →
            </span>
          </div>
        </Link>

        {/* Left & Right Manual Slideshow Arrows */}
        <button
          type="button"
          className="hero-showcase-arrow"
          onClick={(e) => goTo(active - 1, e)}
          aria-label="Previous project"
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.28)',
            background: 'rgba(7, 11, 22, 0.68)',
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          className="hero-showcase-arrow"
          onClick={(e) => goTo(active + 1, e)}
          aria-label="Next project"
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.28)',
            background: 'rgba(7, 11, 22, 0.68)',
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.18s ease, border-color 0.18s ease, transform 0.18s ease',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Bottom-Right Clickable Slide Indicator Dots */}
        <div
          className="hero-showcase-dots"
          role="tablist"
          aria-label="Featured DFW projects"
          style={{
            position: 'absolute',
            right: 18,
            bottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            zIndex: 3,
          }}
        >
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={idx === active}
              aria-label={`Show ${slide.name}`}
              onClick={(e) => goTo(idx, e)}
              style={{
                width: idx === active ? 24 : 7,
                height: 7,
                padding: 0,
                border: 0,
                borderRadius: 999,
                background: idx === active ? '#4D8DFF' : 'rgba(255, 255, 255, 0.38)',
                boxShadow: idx === active ? '0 0 10px rgba(77, 141, 255, 0.7)' : 'none',
                cursor: 'pointer',
                transition: 'width 0.28s cubic-bezier(0.16, 1, 0.3, 1), background 0.22s ease, box-shadow 0.22s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
