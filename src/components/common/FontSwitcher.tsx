'use client'

import { useState, useEffect } from 'react'

export type FontChoice = 'jakarta' | 'barlow' | 'outfit'

interface FontSwitcherProps {
  initialFont?: FontChoice
  onFontChange?: (font: FontChoice) => void
}

export default function FontSwitcher({ initialFont = 'jakarta', onFontChange }: FontSwitcherProps) {
  const [selectedFont, setSelectedFont] = useState<FontChoice>(initialFont)

  useEffect(() => {
    // Check URL param ?font=
    const params = new URLSearchParams(window.location.search)
    const paramFont = params.get('font') as FontChoice
    if (paramFont && ['jakarta', 'barlow', 'outfit'].includes(paramFont)) {
      setSelectedFont(paramFont)
      if (onFontChange) onFontChange(paramFont)
    }
  }, [onFontChange])

  const select = (font: FontChoice) => {
    setSelectedFont(font)
    if (onFontChange) onFontChange(font)
    const url = new URL(window.location.href)
    url.searchParams.set('font', font)
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <div
      className="font-switcher"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        background: 'rgba(7, 9, 15, 0.94)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #22325A',
        borderRadius: 14,
        padding: '10px 14px',
        boxShadow: '0 12px 36px rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 700, color: '#A3AEC2', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: 4 }}>
        Heading Font:
      </span>
      <button
        type="button"
        onClick={() => select('jakarta')}
        style={{
          background: selectedFont === 'jakarta' ? '#0050F0' : 'transparent',
          color: selectedFont === 'jakarta' ? '#fff' : '#D5DCEA',
          border: selectedFont === 'jakarta' ? '1px solid #0050F0' : '1px solid #243050',
          padding: '6px 12px',
          borderRadius: 8,
          fontSize: 12.5,
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
      >
        1. Plus Jakarta Sans
      </button>
      <button
        type="button"
        onClick={() => select('barlow')}
        style={{
          background: selectedFont === 'barlow' ? '#0050F0' : 'transparent',
          color: selectedFont === 'barlow' ? '#fff' : '#D5DCEA',
          border: selectedFont === 'barlow' ? '1px solid #0050F0' : '1px solid #243050',
          padding: '6px 12px',
          borderRadius: 8,
          fontSize: 12.5,
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
      >
        2. Barlow
      </button>
      <button
        type="button"
        onClick={() => select('outfit')}
        style={{
          background: selectedFont === 'outfit' ? '#0050F0' : 'transparent',
          color: selectedFont === 'outfit' ? '#fff' : '#D5DCEA',
          border: selectedFont === 'outfit' ? '1px solid #0050F0' : '1px solid #243050',
          padding: '6px 12px',
          borderRadius: 8,
          fontSize: 12.5,
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
      >
        3. Outfit
      </button>
    </div>
  )
}
