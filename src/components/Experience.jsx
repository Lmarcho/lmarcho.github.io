import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;
  return (
    <section id="cv">
      <SectionHead num="05" title="Experience" meta="2020 — present" caption="The résumé, in HTML." />
      {experience.map((e, i) => (
        <div
          key={`${e.company}-${i}`}
          className="experience-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '180px 1fr',
            gap: 40,
            padding: '36px 0',
            borderTop: `1px solid ${T.line}`,
          }}
        >
          <div>
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, marginBottom: 6 }}>{e.period}</div>
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim }}>{e.location}</div>
          </div>
          <div>
            <h3 style={{ margin: 0, fontFamily: T.sans, fontSize: 24, fontWeight: 500, color: T.white, letterSpacing: '-0.02em' }}>
              {e.title} <span style={{ color: T.dim, fontWeight: 400 }}>/ {e.company}</span>
            </h3>
            <p style={{ margin: '10px 0 18px', fontFamily: T.sans, fontSize: 15, color: T.fg, lineHeight: 1.55, maxWidth: 820 }}>
              {e.summary}
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8 }}>
              {e.highlights.map((h, j) => (
                <li
                  key={j}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '20px 1fr',
                    gap: 8,
                    fontFamily: T.sans,
                    fontSize: 14,
                    color: T.mid,
                    lineHeight: 1.55,
                  }}
                >
                  <span style={{ color: T.accent, fontFamily: T.mono, fontSize: 12 }}>→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 720px) {
          .experience-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
