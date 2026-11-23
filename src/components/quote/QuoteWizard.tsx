'use client'
import { useState, useRef } from 'react'
import { QUOTE_TYPES, TYPE_RANGE } from '@/data/siteData'
import ChipGroup from '@/components/ui/ChipGroup'
import { trackQuoteSubmission } from '@/lib/analytics'

const STEPS = [
  'What kind of sign do you need?',
  'Tell us about your location',
  'Logo, photos & details',
  'Timing & budget',
  'Where should we send your quote?',
]

type QuoteState = {
  types: string[]
  stage: string
  loc: string
  crit: string
  logo: string
  lit: string
  time: string
  budget: string
  contact: string
  addr: string
  open: string
  width: string
  text: string
  notes: string
  name: string
  biz: string
  phone: string
  email: string
  finance: boolean
}

const INIT: QuoteState = {
  types: [], stage: 'new', loc: 'strip', crit: 'unsure', logo: 'have', lit: 'yes',
  time: '1-2m', budget: '', contact: 'text',
  addr: '', open: '', width: '', text: '', notes: '',
  name: '', biz: '', phone: '', email: '', finance: false,
}

function money(n: number) { return '$' + Math.round(n).toLocaleString('en-US') }

function budgetRange(types: string[]) {
  if (!types.length) return null
  const lo = Math.min(...types.map(t => (TYPE_RANGE[t] || [0, 0])[0]))
  const hi = Math.max(...types.map(t => (TYPE_RANGE[t] || [0, 0])[1]))
  return lo && hi ? `${money(lo)} – ${money(hi)}` : null
}

export default function QuoteWizard({ preselect }: { preselect?: string }) {
  const [step, setStep] = useState(1)
  const [q, setQ] = useState<QuoteState>({
    ...INIT,
    types: preselect ? [preselect] : [],
  })
  const [done, setDone] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const topRef = useRef<HTMLDivElement>(null)

  function set<K extends keyof QuoteState>(key: K, val: QuoteState[K]) {
    setQ(prev => ({ ...prev, [key]: val }))
  }

  function toggleType(id: string) {
    setQ(prev => ({
      ...prev,
      types: prev.types.includes(id)
        ? prev.types.filter(t => t !== id)
        : [...prev.types, id],
    }))
  }

  function validate() {
    const e: Record<string, string> = {}
    if (step === 1 && !q.types.length) e.types = 'Pick at least one sign type'
    if (step === 5) {
      if (!q.name.trim()) e.name = 'Your name is required'
      if (!q.biz.trim()) e.biz = 'Business name is required'
      if (!q.phone.trim() && !q.email.trim()) e.contact = 'Add a phone or email'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function next() {
    if (!validate()) return
    if (step < 5) { setStep(s => s + 1); topRef.current?.scrollIntoView({ behavior: 'smooth' }) }
    else submit()
  }

  function submit() {
    if (!validate()) return
    trackQuoteSubmission(q.types, q.biz)
    setDone(true)
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const range = budgetRange(q.types)

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 24px' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
        <h2 className="disp" style={{ fontSize: 36, color: 'var(--navy)', margin: '0 0 16px' }}>
          Quote request received!
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 480, margin: '0 auto 32px' }}>
          We&apos;ll have a written quote with pricing to {q.email || q.phone} within 24 hours.
        </p>
        <a href="tel:2147144623" className="btn btn-blue">Call us: 214-714-4623</a>
      </div>
    )
  }

  return (
    <div ref={topRef}>
      {/* Progress bar */}
      <ol className="prog" aria-label="Quote progress">
        {STEPS.map((title, i) => (
          <li key={i} className={i + 1 < step ? 'done' : i + 1 === step ? 'cur' : ''}>
            <div className="bar" />
            <span className="l" style={{ fontSize: 12 }}>{title}</span>
          </li>
        ))}
      </ol>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0 8px' }}>
        <div className="eyebrow">Free quote · about 2 minutes</div>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--muted)' }}>Step {step} of 5</span>
      </div>
      <h1 className="disp" style={{ fontSize: 'clamp(28px,5vw,42px)', lineHeight: 1, margin: '8px 0 32px', color: 'var(--navy)' }}>
        {STEPS[step - 1]}
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start' }}>
        {/* Main form */}
        <form className="main panel" id="qForm" noValidate style={{ flex: '999 1 560px', minWidth: 0 }}
          onSubmit={(e) => { e.preventDefault(); next() }}>

          {/* Step 1 — Sign type */}
          {step === 1 && (
            <div>
              <p style={{ fontSize: 15, color: 'var(--muted)', margin: '0 0 20px' }}>
                Pick everything that applies — we&apos;ll give you one quote for all of it.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px,1fr))', gap: 14 }}>
                {QUOTE_TYPES.map((t) => {
                  const isSelected = q.types.includes(t.id)
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className="quote-card"
                      aria-pressed={isSelected}
                      onClick={() => toggleType(t.id)}
                    >
                      <div className="quote-card-img">
                        {t.image && (
                          <img
                            src={t.image}
                            alt=""
                            loading="lazy"
                          />
                        )}
                        <div className="quote-card-badge" aria-hidden="true">
                          {isSelected ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="quote-card-body">
                        <span className="quote-card-title">{t.label}</span>
                        <span className="quote-card-desc">{t.desc}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
              {errors.types && <p className="err-msg">{errors.types}</p>}
            </div>
          )}

          {/* Step 2 — Location details */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label className="lbl" htmlFor="addr">Property address or intersection</label>
                <input id="addr" className="inp" type="text" placeholder="1234 Main St, Dallas TX 75201"
                  value={q.addr} onChange={e => set('addr', e.target.value)} />
              </div>
              <div>
                <span className="lbl">Your situation</span>
                <ChipGroup
                  options={[
                    { value: 'new', label: 'Opening a new location' },
                    { value: 'rebrand', label: 'Rebranding / upgrading' },
                    { value: 'repair', label: 'Repair or relight' },
                    { value: 'multi', label: 'Multiple locations' },
                  ]}
                  value={q.stage}
                  onChange={v => set('stage', v)}
                />
              </div>
              <div>
                <span className="lbl">Property type</span>
                <ChipGroup
                  options={[
                    { value: 'strip', label: 'Strip center / retail' },
                    { value: 'pad', label: 'Pad site / standalone' },
                    { value: 'office', label: 'Office building' },
                    { value: 'industrial', label: 'Industrial / warehouse' },
                    { value: 'own', label: 'I own the building' },
                  ]}
                  value={q.loc}
                  onChange={v => set('loc', v)}
                />
              </div>
              <div>
                <span className="lbl">Do you have landlord sign criteria?</span>
                <ChipGroup
                  options={[
                    { value: 'have', label: 'Yes, I have it' },
                    { value: 'getting', label: "I'll get it" },
                    { value: 'unsure', label: "Not sure / I own the building" },
                  ]}
                  value={q.crit}
                  onChange={v => set('crit', v)}
                />
              </div>
            </div>
          )}

          {/* Step 3 — Logo & details */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <span className="lbl">Logo status</span>
                <ChipGroup
                  options={[
                    { value: 'have', label: 'I have a logo file' },
                    { value: 'old', label: 'I have an old/low-res logo' },
                    { value: 'none', label: "I don't have a logo yet" },
                  ]}
                  value={q.logo}
                  onChange={v => set('logo', v)}
                />
              </div>
              <div>
                <span className="lbl">Illuminated sign?</span>
                <ChipGroup
                  options={[
                    { value: 'yes', label: 'Yes, lit at night' },
                    { value: 'no', label: 'Non-lit / daytime only' },
                    { value: 'unsure', label: "Not sure yet" },
                  ]}
                  value={q.lit}
                  onChange={v => set('lit', v)}
                />
              </div>
              <div>
                <label className="lbl" htmlFor="txt">Sign text (if known)</label>
                <input id="txt" className="inp" type="text" placeholder="e.g. Rosa's Kitchen"
                  value={q.text} onChange={e => set('text', e.target.value)} />
              </div>
              <div>
                <label className="lbl" htmlFor="width">Approx. wall width available (ft)</label>
                <input id="width" className="inp" type="number" min={1} placeholder="e.g. 24"
                  value={q.width} onChange={e => set('width', e.target.value)} />
              </div>
              <div>
                <label className="lbl" htmlFor="notes">Anything else we should know</label>
                <textarea id="notes" className="inp" rows={3} placeholder="Landlord restrictions, deadline, special requests…"
                  value={q.notes} onChange={e => set('notes', e.target.value)} style={{ minHeight: 90, resize: 'vertical' }} />
              </div>
            </div>
          )}

          {/* Step 4 — Timing & budget */}
          {step === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <span className="lbl">When do you need it?</span>
                <ChipGroup
                  options={[
                    { value: 'asap', label: 'ASAP / rush' },
                    { value: '1-2m', label: '1–2 months' },
                    { value: '3m', label: '3+ months' },
                    { value: 'planning', label: 'Just planning ahead' },
                  ]}
                  value={q.time}
                  onChange={v => set('time', v)}
                />
              </div>
              <div>
                <label className="lbl" htmlFor="open">Target open / install date (optional)</label>
                <input id="open" className="inp" type="date"
                  value={q.open} onChange={e => set('open', e.target.value)} />
              </div>
              <div>
                <span className="lbl">Budget range (optional)</span>
                <ChipGroup
                  options={[
                    { value: 'under5', label: 'Under $5k' },
                    { value: '5-15k', label: '$5k – $15k' },
                    { value: '15-50k', label: '$15k – $50k' },
                    { value: '50k', label: '$50k+' },
                    { value: 'unsure', label: "Let Sign Zone advise" },
                  ]}
                  value={q.budget}
                  onChange={v => set('budget', v)}
                />
              </div>
              <div>
                <span className="lbl">Interested in financing?</span>
                <label style={{ display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}>
                  <input type="checkbox" checked={q.finance} onChange={e => set('finance', e.target.checked)}
                    style={{ width: 22, height: 22, accentColor: 'var(--blue)' }} />
                  Yes, I&apos;d like to know about 12–60 month terms
                </label>
              </div>
            </div>
          )}

          {/* Step 5 — Contact */}
          {step === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label className="lbl" htmlFor="name">Your name *</label>
                <input id="name" className={`inp${errors.name ? ' err' : ''}`} type="text"
                  value={q.name} onChange={e => set('name', e.target.value)} />
                {errors.name && <p className="err-msg">{errors.name}</p>}
              </div>
              <div>
                <label className="lbl" htmlFor="biz">Business name *</label>
                <input id="biz" className={`inp${errors.biz ? ' err' : ''}`} type="text"
                  value={q.biz} onChange={e => set('biz', e.target.value)} />
                {errors.biz && <p className="err-msg">{errors.biz}</p>}
              </div>
              <div>
                <span className="lbl">Best way to reach you</span>
                <ChipGroup
                  options={[
                    { value: 'text', label: 'Text' },
                    { value: 'call', label: 'Call' },
                    { value: 'email', label: 'Email' },
                  ]}
                  value={q.contact}
                  onChange={v => set('contact', v)}
                />
              </div>
              <div>
                <label className="lbl" htmlFor="phone">Phone</label>
                <input id="phone" className="inp" type="tel" placeholder="214-555-0100"
                  value={q.phone} onChange={e => set('phone', e.target.value)} />
              </div>
              <div>
                <label className="lbl" htmlFor="email">Email</label>
                <input id="email" className="inp" type="email" placeholder="you@business.com"
                  value={q.email} onChange={e => set('email', e.target.value)} />
                {errors.contact && <p className="err-msg">{errors.contact}</p>}
              </div>
            </div>
          )}

          {/* Nav buttons */}
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            {step > 1 && (
              <button type="button" className="btn btn-line" onClick={() => setStep(s => s - 1)}>
                ← Back
              </button>
            )}
            <button type="submit" className="btn btn-blue" style={{ flex: 1 }}>
              {step < 5 ? 'Continue →' : 'Send my free quote request →'}
            </button>
          </div>
        </form>

        {/* Sidebar */}
        <aside style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {range && (
            <div className="out b">
              <div className="outl">Typical price range</div>
              <div className="outv s">{range}</div>
            </div>
          )}
          <div className="out">
            <div className="outl">Response time</div>
            <div className="outv s">Within 24 hrs</div>
          </div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--soft)', borderRadius: 16, padding: 20 }}>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 8 }}>What you get</strong>
            {[
              'Written price range',
              'Mockup on your building',
              'Permit & timeline estimate',
              'No obligation',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, fontSize: 14, color: 'var(--muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0050F0" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--soft)', borderRadius: 16, padding: 20 }}>
            <strong style={{ color: 'var(--navy)', display: 'block', marginBottom: 8 }}>Prefer to call?</strong>
            <a href="tel:2147144623" className="btn btn-blue btn-sm" style={{ width: '100%' }}>214-714-4623</a>
            <a href="sms:2147144623" className="btn btn-dark btn-sm" style={{ width: '100%', marginTop: 8 }}>Text a photo</a>
          </div>
        </aside>
      </div>
    </div>
  )
}
