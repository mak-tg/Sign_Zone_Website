import { COMPARE_ROWS } from '@/data/siteData'

export default function ComparisonTable() {
  return (
    <section className="paper sec" id="comparison">
      <div className="wrap">
        <div className="eyebrow">Why Sign Zone</div>
        <h2 className="disp sec-h">Local service, with quick online help.</h2>
        <div className="tbl-wrap" style={{ marginTop: 40 }}>
          <table style={{ minWidth: 720 }}>
            <thead>
              <tr>
                <th scope="col">What you get</th>
                <th scope="col" style={{ background: 'var(--blue)', fontWeight: 800 }}>
                  Sign Zone
                </th>
                <th scope="col">Typical local shop</th>
                <th scope="col">Online sign store</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className="us">{row.us}</td>
                  <td>{row.other}</td>
                  <td>{row.online}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
