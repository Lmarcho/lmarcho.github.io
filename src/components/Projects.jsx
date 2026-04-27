import { useState } from 'react';
import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [active, setActive] = useState(projects[0]);

  return (
    <section id="work">
      <SectionHead
        num="03"
        title="Selected work"
        meta={`${projects.length} projects · 2020 – 2026`}
        caption="Hover or tap a row — the panel on the left updates with the full context."
      />

      <div className="work-grid proj-desktop" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32 }}>
        <div className="work-preview" style={{ position: 'sticky', top: 80, alignSelf: 'start' }}>
          <div style={{ border: `1px solid ${T.line}`, borderRadius: 6, overflow: 'hidden', background: T.bg2 }}>
            <div style={{ aspectRatio: '16 / 10', background: T.bg3, overflow: 'hidden', position: 'relative' }}>
              <img
                src={active.image}
                alt={active.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity .4s' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  fontFamily: T.mono,
                  fontSize: 10,
                  color: T.white,
                  background: 'rgba(0,0,0,0.6)',
                  padding: '3px 8px',
                  borderRadius: 3,
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  border: `1px solid ${T.line2}`,
                }}
              >
                {active.year}
              </div>
              {active.url && active.url !== '#' && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    fontFamily: T.mono,
                    fontSize: 10,
                    color: T.white,
                    background: 'rgba(0,0,0,0.6)',
                    padding: '5px 10px',
                    borderRadius: 3,
                    textDecoration: 'none',
                    border: `1px solid ${T.line2}`,
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                  }}
                >
                  visit ↗
                </a>
              )}
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.12em', marginBottom: 8 }}>
                {active.role.toUpperCase()} · {active.client.toUpperCase()}
              </div>
              <h3 style={{ margin: 0, fontFamily: T.sans, fontSize: 28, fontWeight: 500, color: T.white, letterSpacing: '-0.02em' }}>{active.title}</h3>
              <p style={{ fontFamily: T.sans, fontSize: 14, color: T.mid, lineHeight: 1.6, marginTop: 12, marginBottom: 0 }}>{active.description}</p>
              <div style={{ marginTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {active.tech.map((t) => (
                  <span key={t} style={{ fontFamily: T.mono, fontSize: 11, color: T.fg, border: `1px solid ${T.line2}`, padding: '3px 8px', borderRadius: 3 }}>
                    {t}
                  </span>
                ))}
              </div>
              {active.metrics && (
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: `1px solid ${T.line}`,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 12,
                  }}
                >
                  {active.metrics.map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.1em' }}>{k.toUpperCase()}</div>
                      <div style={{ fontFamily: T.sans, fontSize: 18, color: T.accent, marginTop: 4 }}>{v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          {projects.map((p, i) => {
            const isActive = p.id === active.id;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setActive(p)}
                onClick={() => setActive(p)}
                className="work-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '34px 1fr 120px 60px',
                  gap: 16,
                  alignItems: 'baseline',
                  padding: '22px 0',
                  cursor: 'pointer',
                  borderTop: i === 0 ? `1px solid ${T.line}` : 'none',
                  borderBottom: `1px solid ${T.line}`,
                  color: isActive ? T.white : T.mid,
                  transition: 'color .2s',
                }}
              >
                <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div
                    style={{
                      fontFamily: T.sans,
                      fontSize: 22,
                      fontWeight: 500,
                      color: isActive ? T.white : T.fg,
                      letterSpacing: '-0.02em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      flexWrap: 'wrap',
                    }}
                  >
                    {p.title}
                    {p.featured && (
                      <span
                        style={{
                          fontFamily: T.mono,
                          fontSize: 9,
                          color: T.accent,
                          border: `1px solid ${T.accent}`,
                          padding: '1px 6px',
                          borderRadius: 3,
                          letterSpacing: '0.1em',
                        }}
                      >
                        FEAT
                      </span>
                    )}
                    {isActive && <span style={{ color: T.accent, fontFamily: T.mono }}>←</span>}
                  </div>
                  <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, marginTop: 6 }}>{p.client} · {p.role}</div>
                </div>
                <div className="work-tech" style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, textAlign: 'right' }}>
                  {p.tech.slice(0, 2).join(' · ')}
                </div>
                <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, textAlign: 'right' }}>{p.year.split(' ')[0]}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="proj-mobile" style={{ display: 'none', flexDirection: 'column', gap: 18 }}>
        {projects.map((p, i) => (
          <article key={p.id} style={{ border: `1px solid ${T.line}`, borderRadius: 6, overflow: 'hidden', background: T.bg2 }}>
            <div style={{ aspectRatio: '16/10', background: T.bg3, position: 'relative' }}>
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  fontFamily: T.mono,
                  fontSize: 10,
                  color: T.white,
                  background: 'rgba(0,0,0,0.6)',
                  padding: '3px 8px',
                  borderRadius: 3,
                  border: `1px solid ${T.line2}`,
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}
              >
                {String(i + 1).padStart(2, '0')} · {p.year.split(' ')[0]}
              </div>
              {p.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    fontFamily: T.mono,
                    fontSize: 9,
                    color: T.accent,
                    background: 'rgba(0,0,0,0.6)',
                    padding: '3px 8px',
                    borderRadius: 3,
                    border: `1px solid ${T.accent}`,
                    letterSpacing: '0.12em',
                  }}
                >
                  FEAT
                </div>
              )}
              {p.url && p.url !== '#' && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    fontFamily: T.mono,
                    fontSize: 10,
                    color: T.white,
                    background: 'rgba(0,0,0,0.7)',
                    padding: '5px 10px',
                    borderRadius: 3,
                    textDecoration: 'none',
                    border: `1px solid ${T.line2}`,
                  }}
                >
                  visit ↗
                </a>
              )}
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.12em', marginBottom: 6 }}>
                {p.role.toUpperCase()} · {p.client.toUpperCase()}
              </div>
              <h3 style={{ margin: 0, fontFamily: T.sans, fontSize: 22, fontWeight: 500, color: T.white, letterSpacing: '-0.02em' }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: T.sans, fontSize: 13, color: T.mid, lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>
                {p.description}
              </p>
              <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ fontFamily: T.mono, fontSize: 10, color: T.fg, border: `1px solid ${T.line2}`, padding: '2px 7px', borderRadius: 3 }}>
                    {t}
                  </span>
                ))}
              </div>
              {p.metrics && (
                <div
                  style={{
                    marginTop: 14,
                    paddingTop: 12,
                    borderTop: `1px solid ${T.line}`,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 8,
                  }}
                >
                  {p.metrics.map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: T.mono, fontSize: 9, color: T.dim, letterSpacing: '0.1em' }}>{k.toUpperCase()}</div>
                      <div style={{ fontFamily: T.sans, fontSize: 14, color: T.accent, marginTop: 2 }}>{v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-desktop { display: none !important; }
          .proj-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
