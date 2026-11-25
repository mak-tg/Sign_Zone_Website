'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageMotion() {
  const pathname = usePathname()
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const main = document.querySelector('main')
    if (!main || main.querySelector('.home-motion')) return

    const selector = [
      'main > .view > section',
      'main > .view > article',
      'main > .view > div > section',
      'main .view section > .wrap > *',
      'main .view section > .container > *',
      'main .view .card',
      'main .view [class*="-card"]',
      'main .view .industry-sign-pill',
      'main .view .facts > div',
      'main .view article',
      'main .view details',
    ].join(', ')
    const items = [...main.querySelectorAll<HTMLElement>(selector)]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        target.classList.add('page-motion-visible')
        observer.unobserve(target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    items.forEach((item) => {
      if (item.closest('header, footer, .hero')) return
      const siblings = item.parentElement?.children
      item.style.setProperty('--page-motion-order', String(siblings ? Array.prototype.indexOf.call(siblings, item) % 4 : 0))
      item.classList.add('page-motion-item')
      observer.observe(item)
    })
    return () => observer.disconnect()
  }, [pathname])

  return null
}
