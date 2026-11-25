import { PROCESS_STEPS } from '@/data/siteData'

export default function ProcessSteps({ asH1 = false }: { asH1?: boolean }) {
  return (
    <section className="paper sec" id="process">
      <div className="wrap">
        <div className="head-row">
          <div>
            <div className="eyebrow">How it works</div>
            {asH1 ? (
              <h1 className="disp sec-h">
                Six steps to your new sign.
              </h1>
            ) : (
              <h2 className="disp sec-h">
                Six steps to your new sign.
              </h2>
            )}
          </div>
          <p className="lead">
            One project manager, one phone number, the whole way through. You&apos;ll always know what&apos;s happening and what&apos;s next.
          </p>
        </div>
        <ol className="steps" id="steps">
          {PROCESS_STEPS.map((step, i) => (
            <li key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="disp" style={{ fontSize: 44, color: 'var(--blue)', lineHeight: 1 }}>
                  0{i + 1}
                </span>
                <span className="badge">{step.timing}</span>
              </div>
              <span style={{ fontSize: 21, fontWeight: 800, color: 'var(--navy)' }}>
                {step.title}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>
                {step.desc}
              </span>
              <span className="you">
                <strong>You:</strong> {step.you}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
