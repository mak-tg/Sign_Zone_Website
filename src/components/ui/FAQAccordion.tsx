'use client'
import { useState } from 'react'
import Link from 'next/link'

interface FAQItem { q: string; a: string }

function renderAnswerWithLinks(text: string) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | React.ReactNode)[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const [, label, href] = match
    parts.push(
      <Link
        key={match.index}
        href={href}
        style={{
          color: 'var(--blue)',
          fontWeight: 600,
          textDecoration: 'underline',
          textUnderlineOffset: 3,
        }}
      >
        {label}
      </Link>
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts.length > 0 ? parts : text
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {item.q}
            <span className="pm">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <p>{renderAnswerWithLinks(item.a)}</p>}
        </div>
      ))}
    </div>
  )
}
