'use client'

import { useRef, useState } from 'react'

export default function ContactForm() {
  const attachmentInputRef = useRef<HTMLInputElement>(null)
  const [attachments, setAttachments] = useState<File[]>([])
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    city: '',
    signType: 'channel',
    message: '',
    consent: true,
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? [])
    setAttachments((current) => {
      const next = [...current]
      for (const file of selectedFiles) {
        if (!next.some((existing) => existing.name === file.name && existing.size === file.size)) {
          next.push(file)
        }
      }
      return next
    })
    e.target.value = ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate swift, dependable submission
    setTimeout(() => {
      setStatus('success')
    }, 600)
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          border: '1px solid var(--soft)',
          padding: '40px 32px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: '#ecfdf5',
            color: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            margin: '0 auto 20px',
            fontWeight: 800,
          }}
        >
          ✓
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: 'var(--navy)', margin: '0 0 10px' }}>
          Message Received
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--muted)', margin: '0 0 24px', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
          Thank you, <strong>{formData.name || 'there'}</strong>. Your project details have been sent to our estimating team. An estimator will review your inquiry and follow up within 24 hours.
        </p>
        <div style={{ padding: '16px 20px', background: 'var(--paper)', borderRadius: 10, border: '1px solid var(--soft)', display: 'inline-block', fontSize: 14.5 }}>
          Need urgent assistance? Call Alex directly at{' '}
          <a href="tel:2147144623" style={{ color: 'var(--blue)', fontWeight: 700, textDecoration: 'none' }}>
            214-714-4623
          </a>
        </div>
        <div style={{ marginTop: 24 }}>
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: '',
                business: '',
                phone: '',
                email: '',
                city: '',
                signType: 'channel',
                message: '',
                consent: true,
              })
              setAttachments([])
              setStatus('idle')
            }}
            className="btn btn-line"
            style={{ fontSize: 14 }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#fff',
        borderRadius: 16,
        border: '1px solid var(--soft)',
        padding: '36px 32px',
        boxShadow: '0 8px 28px rgba(0,0,0,0.04)',
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--navy)', margin: '0 0 8px' }}>
          Send Us a Message
        </h3>
        <p style={{ fontSize: 14.5, color: 'var(--muted)', margin: 0 }}>
          Fill out the details below and an estimator will reach out within 24 business hours.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginBottom: 18 }}>
        <div>
          <label className="lbl" htmlFor="contact-name">
            Your Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="inp"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="lbl" htmlFor="contact-business">
            Business Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            required
            className="inp"
            placeholder="Main St. Bakery"
            value={formData.business}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginBottom: 18 }}>
        <div>
          <label className="lbl" htmlFor="contact-phone">
            Phone Number <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            className="inp"
            placeholder="(214) 555-0199"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="lbl" htmlFor="contact-email">
            Email Address <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="inp"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18, marginBottom: 18 }}>
        <div>
          <label className="lbl" htmlFor="contact-city">
            Project City / Location
          </label>
          <input
            id="contact-city"
            name="city"
            type="text"
            className="inp"
            placeholder="e.g. Dallas, Plano, Fort Worth"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="lbl" htmlFor="contact-signtype">
            Primary Sign Need
          </label>
          <select
            id="contact-signtype"
            name="signType"
            className="inp"
            value={formData.signType}
            onChange={handleChange}
            style={{ cursor: 'pointer', background: '#fff' }}
          >
            <option value="channel">Channel Letters (Illuminated / Halo)</option>
            <option value="monument">Monument &amp; Entrance Sign</option>
            <option value="pylon">Highway Pylon / Pole Sign</option>
            <option value="storefront">Storefront Lightbox Cabinet</option>
            <option value="interior">Interior Lobby / ADA Signs</option>
            <option value="repair">Sign Repair &amp; Maintenance</option>
            <option value="multilocation">Multi-Location Rollout</option>
            <option value="other">General Inquiry / Consultation</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label className="lbl" htmlFor="contact-message">
          Project Details or Questions <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <div className="contact-message-field">
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            className="inp"
            placeholder="Tell us about your storefront, dimensions, timeline, or landlord criteria requirements..."
            value={formData.message}
            onChange={handleChange}
            style={{ resize: 'vertical', minHeight: 124 }}
          />
          <button
            type="button"
            className="contact-attach-button"
            onClick={() => attachmentInputRef.current?.click()}
            aria-controls="contact-attachments"
            aria-describedby="contact-attachments-help"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m21.4 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.82-2.83l8.49-8.48" />
            </svg>
            Attach files
          </button>
          <input
            ref={attachmentInputRef}
            id="contact-attachments"
            name="attachments"
            type="file"
            accept=".pdf,application/pdf,image/*"
            multiple
            onChange={handleAttachmentChange}
            aria-label="Attach PDF plans or image files"
            hidden
          />
        </div>
        <p id="contact-attachments-help" style={{ margin: '7px 0 0', fontSize: 12.5, color: 'var(--muted2)' }}>
          Optional · PDF and image files · Multiple files allowed
        </p>
        {attachments.length > 0 && (
          <ul className="contact-attachments" aria-label="Selected attachments" aria-live="polite">
            {attachments.map((file, index) => (
              <li key={`${file.name}-${file.size}-${index}`} className="contact-attachment-item">
                <span className="contact-attachment-name" title={file.name}>{file.name}</span>
                <button
                  type="button"
                  className="contact-attachment-remove"
                  onClick={() => setAttachments((current) => current.filter((_, fileIndex) => fileIndex !== index))}
                  aria-label={`Remove ${file.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer', fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            style={{ marginTop: 2, width: 16, height: 16, accentColor: 'var(--blue)' }}
          />
          <span>
            I agree to receive communications regarding my sign estimate from Sign Zone. We respect your privacy and never share information with third parties.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-blue"
        style={{
          width: '100%',
          padding: '14px 24px',
          fontSize: 16,
          fontWeight: 700,
          borderRadius: 8,
          cursor: status === 'submitting' ? 'wait' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
        <span aria-hidden="true">→</span>
      </button>

      <p style={{ margin: '14px 0 0', textAlign: 'center', fontSize: 12.5, color: 'var(--muted)' }}>
        Prefer to text photos? Send storefront pictures directly to <strong>214-714-4623</strong>.
      </p>
    </form>
  )
}
