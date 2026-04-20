import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

const Testimonials = () => {
  const { testimonials } = portfolioData;
  return (
    <section>
      <SectionHead num="05b" title="Said about the work" meta="referrals" />
      <div
        className="testimonials-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              border: `1px solid ${T.line}`,
              background: T.bg2,
              padding: 24,
              borderRadius: 6,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ fontFamily: T.serif, fontSize: 24, color: T.accent, lineHeight: 1, marginBottom: 12 }}>“</div>
            <p
              style={{
                margin: 0,
                fontFamily: T.serif,
                fontSize: 17,
                lineHeight: 1.5,
                color: T.fg,
                fontStyle: 'italic',
                fontWeight: 400,
                flex: 1,
              }}
            >
              {t.quote}
            </p>
            <div
              style={{
                marginTop: 18,
                paddingTop: 16,
                borderTop: `1px solid ${T.line}`,
                display: 'grid',
                gridTemplateColumns: '36px 1fr',
                gap: 12,
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: T.bg3,
                  border: `1px solid ${T.line2}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: T.mono,
                  fontSize: 11,
                  color: T.mid,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontFamily: T.sans, fontSize: 13, color: T.white, fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, marginTop: 2 }}>{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
