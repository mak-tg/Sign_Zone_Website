'use client'
import { useState, useEffect } from 'react'
import ChipGroup from '@/components/ui/ChipGroup'

type Milestone = { date: Date; label: string; desc: string }

function addDays(d: Date, n: number) { return new Date(d.getTime() + n * 86400000) }
function fmt(d: Date) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }

function getSchedule(openDate: Date, type: string): { start: Date; milestones: Milestone[] } {
  const D: Record<string, number[]> = { wall: [3, 7, 21, 21, 2], monument: [4, 10, 28, 28, 3], pylon: [5, 14, 35, 35, 4] }
  const d = D[type] || D.wall
  const iEnd = addDays(openDate, -3), iSt = addDays(iEnd, -d[4]), fab = addDays(iSt, -d[3])
  const per = addDays(fab, -d[2] + 10), des = addDays(per, -d[1]), sur = addDays(des, -d[0])
  return {
    start: sur,
    milestones: [
      { date: sur, label: 'Quote & site survey', desc: 'Measurements, photos, power check, landlord criteria.' },
      { date: des, label: 'Design & mockup approval', desc: 'Your sign on your building, day and night.' },
      { date: per, label: 'Landlord sign-off & permits filed', desc: 'Drawings submitted to the city. Fabrication can start in parallel.' },
      { date: fab, label: 'Fabrication', desc: 'Built and quality-checked in the shop.' },
      { date: iSt, label: 'Install & inspection', desc: 'Crew installs, connects power, city inspects.' },
      { date: openDate, label: 'Grand opening', desc: 'Lights on. Banner backup ready if the city runs late.' },
    ],
  }
}

export default function TimelinePlanner() {
  const defaultDate = new Date(Date.now() + 70 * 86400000)
  const [openStr, setOpenStr] = useState(defaultDate.toISOString().slice(0, 10))
  const [type, setType] = useState('wall')
  const [schedule, setSchedule] = useState(() => getSchedule(defaultDate, 'wall'))

  useEffect(() => {
    const d = openStr ? new Date(openStr + 'T12:00:00') : defaultDate
    setSchedule(getSchedule(d, type))
  }, [openStr, type])

  const isLate = schedule.start < new Date()

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <div className="panel" style={{ flex: '1 1 320px', minWidth: 0 }}>
        <h2 style={{ margin: 0, fontSize: 26, color: 'var(--navy)' }}>Opening day planner</h2>
        <p style={{ margin: '8px 0 0', color: 'var(--muted)', fontSize: 15 }}>Enter your opening date. We&apos;ll work backwards so your sign is lit on day one.</p>

        <label className="lbl" htmlFor="od" style={{ marginTop: 22, display: 'block' }}>Opening date</label>
        <input id="od" className="inp" type="date" value={openStr} onChange={e => setOpenStr(e.target.value)} />

        <span className="lbl" style={{ marginTop: 22, display: 'block' }}>Main sign</span>
        <ChipGroup options={[{ value: 'wall', label: 'Storefront / wall sign' }, { value: 'monument', label: 'Monument' }, { value: 'pylon', label: 'Pylon' }]} value={type} onChange={setType} />

        <div className="out b" style={{ marginTop: 24, background: isLate ? '#B42318' : undefined }}>
          <div className="outl">Start your sign by</div>
          <div className="outv">{fmt(schedule.start)}</div>
          <div style={{ fontSize: 14, marginTop: 6, color: '#E6EEFF' }}>
            {isLate ? 'That date has passed. Call us: rush options and temporary signs can bridge the gap.' : 'Start by this date to open with your permanent sign.'}
          </div>
        </div>
      </div>

      <div className="panel" style={{ flex: '2 1 480px', minWidth: 0 }}>
        <h3 style={{ margin: '0 0 20px', fontSize: 22, color: 'var(--navy)' }}>Your project schedule</h3>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {schedule.milestones.map((m, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '110px minmax(0,1fr)', gap: 18, padding: '14px 0', borderBottom: '1px solid #EDF1F7' }}>
              <span style={{ fontWeight: 800, color: 'var(--blue)', fontSize: 15 }}>{fmt(m.date)}</span>
              <span>
                <strong style={{ display: 'block', color: 'var(--navy)', fontSize: 15 }}>{m.label}</strong>
                <span style={{ display: 'block', fontSize: 14, color: 'var(--muted)', marginTop: 3, lineHeight: 1.5 }}>{m.desc}</span>
              </span>
            </li>
          ))}
        </ol>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--muted)', margin: '14px 0 0' }}>Typical durations. City review times vary and are the biggest unknown.</p>
      </div>
    </div>
  )
}
