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
      <div className="chips" role="tablist" aria-label="Tools" style={{ marginTop: 36 }}>
        {TOOLS.map((tool, i) => (
          <button
            key={tool.id}
            type="button"
            role="tab"
            className="chip chip-d"
            aria-selected={active === i}
            onClick={() => setActive(i)}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* Active tool rendered inside parent section */}
      <div style={{ marginTop: 40 }}>
        <ActiveTool />
      </div>
    </>
  )
}
