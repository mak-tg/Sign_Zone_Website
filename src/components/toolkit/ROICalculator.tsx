'use client'
import { useState, useEffect } from 'react'

function money(n: number) { return '$' + Math.round(n).toLocaleString('en-US') }
function kmoney(n: number) {
  if (n >= 1000) { const k = n / 1000; return '$' + (k >= 10 ? Math.round(k) : Math.round(k * 10) / 10) + 'k' }
  return money(n)
}

export default function ROICalculator() {
  const [traffic, setTraffic] = useState(8000)
  const [conv, setConv] = useState(2)
  const [ticket, setTicket] = useState(45)
  const [cost, setCost] = useState(8000)
  const [res, setRes] = useState({ pay: '—', cust: '—', rev: '—', mo: '—', cpm: '—' })

  useEffect(() => {
    const cust = traffic * 30 * conv / 10000
    const rev = cust * ticket
    const pay = rev > 0 ? cost / rev : 0
    const views = traffic * 365 * 5
    setRes({
      pay: rev > 0 ? (pay < 1 ? 'Under 1 month' : (Math.round(pay * 10) / 10) + ' months') : '—',
      cust: Math.round(cust).toString(),
      rev: kmoney(rev),
      mo: money(cost / 60),
      cpm: views ? '$' + (cost / (views / 1000)).toFixed(2) : '—',
    })
  }, [traffic, conv, ticket, cost])

  const fields = [
    { id: 'tr', label: 'Vehicles passing per day', hint: 'Find it on the TxDOT traffic count map', val: traffic, set: setTraffic },
    { id: 'cv', label: 'New customers per 10,000 passing', val: conv, set: setConv, step: 0.5 },
    { id: 'tk', label: 'Average sale ($)', val: ticket, set: setTicket },
    { id: 'sc', label: 'Sign investment ($)', val: cost, set: setCost },
  ]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <div className="panel" style={{ flex: '999 1 500px', minWidth: 0 }}>
        <h2 style={{ margin: 0, fontSize: 26, color: 'var(--navy)' }}>Estimate how your sign may pay off</h2>
        <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: 15 }}>Your sign works 24/7. See how many new customers it takes to pay for itself.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18, marginTop: 24 }}>
          {fields.map(f => (
            <div key={f.id}>
              <label className="lbl" htmlFor={f.id}>{f.label}</label>
              <input id={f.id} className="inp" type="number" min={0} step={(f as any).step || 1} value={f.val} onChange={e => f.set(+e.target.value)} />
              {(f as any).hint && <span style={{ display: 'block', fontSize: 13, color: 'var(--muted)', marginTop: 6 }}>{(f as any).hint}</span>}
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: '1 1 260px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="out b"><div className="outl">Pays for itself in</div><div className="outv">{res.pay}</div></div>
        <div className="two">
          <div className="out"><div className="outl">New customers / month</div><div className="outv s">{res.cust}</div></div>
          <div className="out"><div className="outl">Added sales / month</div><div className="outv s">{res.rev}</div></div>
          <div className="out"><div className="outl">Monthly cost (5-yr life)</div><div className="outv s">{res.mo}</div></div>
          <div className="out"><div className="outl">Cost per 1,000 views</div><div className="outv s">{res.cpm}</div></div>
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>Illustration from your inputs, not a promise of results.</p>
      </div>
    </div>
  )
}
