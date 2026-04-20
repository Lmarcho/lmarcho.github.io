import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

function PerfChart() {
  const data = [3900, 3820, 3750, 3500, 3200, 2850, 2400, 2050, 1800, 1620, 1500, 1420];
  const max = 4000;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 6,
        height: 100,
        padding: '8px 0',
        borderBottom: `1px solid ${T.line2}`,
      }}
    >
      {data.map((v, i) => {
        const h = (v / max) * 100;
        const isLast = i === data.length - 1;
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4 }}>
            <div style={{ height: `${h}%`, background: isLast ? T.accent : T.line2, borderRadius: 1 }} />
            {isLast && (
              <div style={{ fontFamily: T.mono, fontSize: 9, color: T.accent, textAlign: 'center' }}>1.4s</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const CaseStudy = () => {
  const cs = portfolioData.caseStudy;
  return (
    <section id="case">
      <SectionHead
        num="04"
        title="Case study"
        meta="airport · 2024 → now"
        caption="One project, worked end-to-end: the problem, what I did, what changed."
      />

      <div style={{ border: `1px solid ${T.line}`, borderRadius: 6, background: T.bg2, overflow: 'hidden' }}>
        <div
          className="case-header"
          style={{
            padding: 32,
            borderBottom: `1px solid ${T.line}`,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, letterSpacing: '0.15em', marginBottom: 12 }}>// FIELD NOTE</div>
            <h3
              style={{
                margin: 0,
                fontFamily: T.sans,
                fontSize: 42,
                fontWeight: 500,
                color: T.white,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              {cs.title}
            </h3>
            <div style={{ fontFamily: T.mono, fontSize: 12, color: T.mid, marginTop: 10 }}>{cs.subtitle}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 380, justifyContent: 'flex-end' }}>
            {cs.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: T.mono,
                  fontSize: 10,
                  color: T.fg,
                  border: `1px solid ${T.line2}`,
                  padding: '3px 8px',
                  borderRadius: 3,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="case-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className="case-cell" style={{ padding: 32, borderRight: `1px solid ${T.line}` }}>
            <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.15em', marginBottom: 14 }}>// CHALLENGE</div>
            <p style={{ margin: 0, fontFamily: T.serif, fontStyle: 'italic', fontSize: 20, lineHeight: 1.55, color: T.fg }}>{cs.challenge}</p>

            <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.15em', marginTop: 32, marginBottom: 14 }}>// APPROACH</div>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {cs.approach.map((a, i) => (
                <li
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '28px 1fr',
                    gap: 8,
                    padding: '10px 0',
                    borderTop: i === 0 ? 'none' : `1px dashed ${T.line2}`,
                    fontFamily: T.sans,
                    fontSize: 14,
                    color: T.fg,
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ fontFamily: T.mono, fontSize: 11, color: T.accent }}>0{i + 1}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="case-cell case-result" style={{ padding: 32, background: T.bg3 }}>
            <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.15em', marginBottom: 14 }}>// RESULT</div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                border: `1px solid ${T.line2}`,
                borderRadius: 4,
              }}
            >
              {cs.results.map(([k, v], i) => (
                <div
                  key={k}
                  style={{
                    padding: 24,
                    borderRight: i % 2 === 0 ? `1px solid ${T.line2}` : 'none',
                    borderBottom: i < 2 ? `1px solid ${T.line2}` : 'none',
                  }}
                >
                  <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k}</div>
                  <div style={{ fontFamily: T.sans, fontSize: 32, color: T.accent, marginTop: 8, fontWeight: 500, letterSpacing: '-0.02em' }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28 }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.15em', marginBottom: 14 }}>// TTFB (PDP, p50) — WEEKLY</div>
              <PerfChart />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .case-header { grid-template-columns: 1fr !important; }
          .case-body { grid-template-columns: 1fr !important; }
          .case-cell { border-right: none !important; }
          .case-cell:first-child { border-bottom: 1px solid ${T.line} !important; }
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;
