'use client'
import { useState } from 'react'
import CostCalculator from '@/components/toolkit/CostCalculator'
import VisibilityCalculator from '@/components/toolkit/VisibilityCalculator'
import ROICalculator from '@/components/toolkit/ROICalculator'
import PermitChecklist from '@/components/toolkit/PermitChecklist'
import TimelinePlanner from '@/components/toolkit/TimelinePlanner'

const TOOLS = [
  { id: 'cost',       label: 'Cost calculator',      Component: CostCalculator },
  { id: 'visibility', label: 'Letter size',           Component: VisibilityCalculator },
  { id: 'roi',        label: 'Sign payback',          Component: ROICalculator },
  { id: 'permit',     label: 'Permit checklist',      Component: PermitChecklist },
  { id: 'timeline',   label: 'Opening-day planner',   Component: TimelinePlanner },
]

export default function ToolkitTabs() {
  const [active, setActive] = useState(0)
  const ActiveTool = TOOLS[active].Component

  return (
    <>
      {/* Tool tabs */}
      <div className="chips" role="tablist" aria-label="Tools" style={{ marginBottom: 32 }}>
        {TOOLS.map((tool, i) => {
          const isSelected = active === i
          return (
            <button
              key={tool.id}
              type="button"
              role="tab"
              className={`chip ${isSelected ? 'on' : ''}`}
              aria-selected={isSelected}
              onClick={() => setActive(i)}
              style={{
                fontWeight: 700,
                fontSize: 14,
                padding: '0 22px',
                minHeight: 44,
                borderRadius: 999,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                ...(isSelected
                  ? { background: 'var(--blue)', color: '#fff', boxShadow: '0 4px 14px rgba(0, 80, 240, 0.25)', border: 'none' }
                  : { background: '#fff', color: 'var(--navy)', border: '1px solid var(--soft)' }),
              }}
            >
              {tool.label}
            </button>
          )
        })}
      </div>

      {/* Active tool rendered inside parent section */}
      <div>
        <ActiveTool />
      </div>
    </>
  )
}
