import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

const TAGS = ['edge', 'app', 'ai', 'cache', 'data', 'ui', 'infra', 'ops'];

const PROFICIENCY = [
  ['PHP · Magento', 95, 'since 2020'],
  ['Redis · Varnish', 88, 'prod tuning'],
  ['Elasticsearch', 84, 'facet eng.'],
  ['AWS · Terraform', 82, 'ops owner'],
];

const Stack = () => {
  const { stack } = portfolioData;
  return (
    <section id="stack">
      <SectionHead
        num="02"
        title="Stack"
        meta="architecture · layered"
        caption="The layers I reach for. Not a checklist — these are what's in production across the work you'll see below."
      />

      <div style={{ border: `1px solid ${T.line}`, borderRadius: 6, overflow: 'hidden', background: T.bg2 }}>
        <div
          style={{
            padding: '14px 20px',
            borderBottom: `1px solid ${T.line}`,
            background: T.bg3,
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: T.mono,
            fontSize: 10,
            color: T.dim,
            letterSpacing: '0.12em',
          }}
        >
          <span>// REFERENCE ARCHITECTURE</span>
          <span>DIAGRAM · 8 LAYERS</span>
        </div>
        {stack.map((layer, i) => (
          <div
            key={layer.layer}
            className="stack-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 200px 1fr 80px',
              borderBottom: i < stack.length - 1 ? `1px solid ${T.line}` : 'none',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                padding: '18px 20px',
                fontFamily: T.mono,
                fontSize: 11,
                color: T.accent,
                borderRight: `1px solid ${T.line}`,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              L{layer.layer}
            </div>
            <div
              style={{
                padding: '18px 20px',
                fontFamily: T.sans,
                fontSize: 15,
                color: T.white,
                borderRight: `1px solid ${T.line}`,
                display: 'flex',
                alignItems: 'center',
                fontWeight: 500,
              }}
            >
              {layer.title}
            </div>
            <div className="scroll-x-mobile" style={{ padding: '14px 20px', display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
              {layer.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: T.mono,
                    fontSize: 11,
                    color: T.fg,
                    border: `1px solid ${T.line2}`,
                    padding: '4px 10px',
                    borderRadius: 3,
                    background: T.bg,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div
              className="stack-tag"
              style={{
                padding: '18px 20px',
                fontFamily: T.mono,
                fontSize: 10,
                color: T.dim,
                borderLeft: `1px solid ${T.line}`,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {TAGS[i]}
            </div>
          </div>
        ))}
      </div>

      <div
        className="proficiency-grid"
        style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
      >
        {PROFICIENCY.map(([k, v, cap]) => (
          <div key={k} style={{ border: `1px solid ${T.line}`, padding: 16, borderRadius: 4, background: T.bg2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: T.mono, fontSize: 11, color: T.mid, marginBottom: 10 }}>
              <span style={{ color: T.white }}>{k}</span>
              <span style={{ color: T.accent }}>{v}</span>
            </div>
            <div style={{ height: 2, background: T.line2, position: 'relative', marginBottom: 10 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${v}%`, background: T.accent }} />
            </div>
            <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim }}>{cap}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stack-row { grid-template-columns: 60px 1fr !important; }
          .stack-row > div:nth-child(2) { border-right: none !important; border-bottom: 1px dashed ${T.line2} !important; }
          .stack-row > div:nth-child(3) { grid-column: 1 / span 2 !important; padding: 14px 20px !important; }
          .stack-row > .stack-tag { display: none !important; }
          .proficiency-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .proficiency-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Stack;
