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
      // Match the homepage: reveal section content blocks, not whole sections.
      'main .view section > .wrap > *',
      'main .view section > .container > *',
      'main .view section .wrap > h1',
      'main .view section .wrap > h2',
      'main .view section .wrap > h3',
      'main .view section .wrap > p',
      'main .view section .wrap > .btn-row',
      'main .view section .wrap > .facts > div',
      'main section > .wrap > *',
      'main .city-hero-copy > *',
      'main .city-project',
      'main .city-project-grid > article',
      'main .loc-box',
      'main .view .facts > div',
      'main .view .card',
      'main .view [class*="-card"]',
      'main .view .industry-sign-pill',
      'main .view article',
      'main .view details',
      // Shared Plan pages can render section components without a .view wrapper.
      'main .card',
      'main [class*="-card"]',
      'main .process-step',
      'main .step-card',
      'main .faq-item',
      'main details',
      'main .guide-cta > *',
      // Contact, legal, About, and review routes share the same section reveal pattern.
      'main .view section .wrap > h1',
      'main .view section .wrap > h2',
      'main .view section .wrap > h3',
      'main .view section .wrap > p',
      'main .view section .wrap form > *',
      'main .view .facts > div',
      'main .view .review-card',
      'main #v-contact .facts > div',
      'main #v-contact section:nth-of-type(2) .wrap > div > div > *',
      'main #v-contact section:nth-of-type(2) form > *',
      'main #v-contact section:nth-of-type(3) .wrap > div > *',
      'main #v-privacy .privacy-policy-content > h2',
      'main #v-privacy .privacy-policy-content > p',
      'main #v-privacy .privacy-policy-content > ul',
      'main #v-privacy .privacy-policy-content > div',
      'main #v-terms .terms-content > h2',
      'main #v-terms .terms-content > p',
      'main #v-terms .terms-content > ul',
      'main #v-terms .terms-content > div',
      'main #v-accessibility .accessibility-content > h2',
      'main #v-accessibility .accessibility-content > p',
      'main #v-accessibility .accessibility-content > ul',
      'main #v-accessibility .accessibility-content > div',
      'main .guides-card-grid > *',
      'main #guides > *',
      'main .guide-related > *',
      'main article.view section.light .wrap > section > h2',
      'main article.view section.light .wrap > section > p',
      'main article.view section.light .wrap > section > div',
      'footer nav a',
      'footer .col > *',
    ].join(', ')
    const items = [...document.querySelectorAll<HTMLElement>(selector)]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        target.classList.add('page-motion-visible')
        observer.unobserve(target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })

    items.forEach((item) => {
      if (item.closest('header, .hero')) return
      if (item.matches('#v-privacy .privacy-policy-content')) return
      if (item.matches('#v-terms .terms-content')) return
      if (item.matches('#v-accessibility .accessibility-content')) return
      const siblings = item.parentElement?.children
      item.style.setProperty('--page-motion-order', String(siblings ? Array.prototype.indexOf.call(siblings, item) % 4 : 0))
      item.classList.add('page-motion-item')
      observer.observe(item)
    })
    return () => observer.disconnect()
  }, [pathname])

  return null
}
