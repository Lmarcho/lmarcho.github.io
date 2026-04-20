import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

const Writing = () => {
  const { writing } = portfolioData;
  return (
    <section id="notes">
      <SectionHead num="06" title="Notes" meta="writing · essays" caption="Things I've worked out in public." />
      <div>
        {writing.map((w, i) => (
          <a
            key={i}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="writing-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 120px 80px',
              gap: 16,
              alignItems: 'baseline',
              padding: '22px 0',
              borderTop: i === 0 ? `1px solid ${T.line}` : 'none',
              borderBottom: `1px solid ${T.line}`,
              textDecoration: 'none',
              color: T.fg,
            }}
          >
            <div style={{ fontFamily: T.mono, fontSize: 10, color: T.accent, letterSpacing: '0.15em' }}>{w.kind}</div>
            <div style={{ fontFamily: T.sans, fontSize: 20, color: T.white, fontWeight: 400, letterSpacing: '-0.01em' }}>
              {w.title}
            </div>
            <div className="writing-read" style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, textAlign: 'right' }}>
              {w.read}
            </div>
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, textAlign: 'right' }}>{w.date}</div>
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .writing-row { grid-template-columns: 60px 1fr 60px !important; }
          .writing-read { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Writing;
