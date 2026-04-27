import { useEffect, useMemo, useState } from 'react';
import { T, Dot } from './tokens';
import { portfolioData } from '../data/portfolioData';

function Terminal() {
  const { personal } = portfolioData;
  const lines = useMemo(
    () => [
      { kind: 'cmd', text: 'whoami' },
      { kind: 'out', text: `${personal.name} — ${personal.role}` },
      { kind: 'cmd', text: 'cat /etc/focus' },
      { kind: 'out', text: 'high-performance eCommerce · AI SaaS · cloud-native' },
      { kind: 'cmd', text: 'uptime' },
      { kind: 'out', text: `${personal.years}y shipping · ${personal.projectsShipped} platforms · 0 regrets about caching` },
      { kind: 'cmd', text: 'status --available' },
      { kind: 'out', text: personal.available, accent: true },
      { kind: 'cmd', text: 'ls --recent' },
      { kind: 'out', text: '2025  ai-rag-saas/        multi-tenant · pgvector · WhatsApp' },
      { kind: 'out', text: '2025  magento-mcp/        LLM → Magento admin via MCP' },
      { kind: 'out', text: '2024  airport-appliance/  Magento 2 · AWS · 48k SKU' },
      { kind: 'cmd', text: 'git log --oneline -3' },
      { kind: 'out', text: 'a1f9c42  feat(rag): cite-aware retrieval, top-k re-rank' },
      { kind: 'out', text: '8e2d301  perf(varnish): grace-mode on price ESI (-180ms p95)' },
      { kind: 'out', text: '5c7b0aa  fix(erp): idempotent stock writes, replay log' },
      { kind: 'prompt', text: "type 'help' — or scroll for more" },
    ],
    [personal]
  );

  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (visible >= lines.length) return;
    const line = lines[visible];
    if (line.kind === 'cmd') {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(line.text.slice(0, i));
        if (i >= line.text.length) {
          clearInterval(id);
          setTimeout(() => {
            setVisible((v) => v + 1);
            setTyped('');
          }, 220);
        }
      }, 38);
      return () => clearInterval(id);
    } else if (line.kind === 'prompt') {
      return;
    } else {
      const id = setTimeout(() => setVisible((v) => v + 1), 280);
      return () => clearTimeout(id);
    }
  }, [visible, lines]);

  return (
    <div
      style={{
        background: T.bg2,
        border: `1px solid ${T.line}`,
        borderRadius: 6,
        fontFamily: T.mono,
        fontSize: 13,
        lineHeight: 1.9,
        boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 14px',
          borderBottom: `1px solid ${T.line}`,
          background: T.bg3,
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }} />
        <span style={{ flex: 1, textAlign: 'center', color: T.dim, fontSize: 11 }}>
          lmarcho@portfolio — -zsh — 96×24
        </span>
      </div>
      <div style={{ padding: '22px 24px', color: T.fg, minHeight: 360, overflowX: 'auto' }}>
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} style={{ marginBottom: l.kind === 'out' ? 6 : 2, whiteSpace: 'nowrap' }}>
            {l.kind === 'cmd' ? (
              <span>
                <span style={{ color: T.accent }}>➜</span> <span style={{ color: T.mid }}>~</span>{' '}
                <span style={{ color: T.white }}>{l.text}</span>
              </span>
            ) : l.kind === 'prompt' ? (
              <div style={{ marginTop: 14 }}>
                <span style={{ color: T.accent }}>➜</span> <span style={{ color: T.mid }}>~</span>{' '}
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 15,
                    background: T.white,
                    marginLeft: 2,
                    verticalAlign: 'middle',
                    animation: 'blink 1s steps(1) infinite',
                  }}
                />
                <span style={{ color: T.dim, marginLeft: 14, fontSize: 11 }}>// {l.text}</span>
              </div>
            ) : (
              <span style={{ color: l.accent ? T.accent : T.mid }}>{l.text}</span>
            )}
          </div>
        ))}
        {visible < lines.length && lines[visible].kind === 'cmd' && (
          <div style={{ whiteSpace: 'nowrap' }}>
            <span style={{ color: T.accent }}>➜</span> <span style={{ color: T.mid }}>~</span>{' '}
            <span style={{ color: T.white }}>{typed}</span>
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 15,
                background: T.white,
                marginLeft: 2,
                verticalAlign: 'middle',
                animation: 'blink 1s steps(1) infinite',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function NowCard() {
  const { personal } = portfolioData;
  return (
    <div style={{ border: `1px solid ${T.line}`, padding: 22, borderRadius: 6, background: T.bg2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.12em' }}>
        <span>// NOW</span>
        <span>APR 2026</span>
      </div>
      <p style={{ margin: 0, fontFamily: T.sans, fontSize: 15, color: T.white, lineHeight: 1.55, fontWeight: 400 }}>{personal.current}</p>
      <div className="scroll-x-mobile" style={{ marginTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {['RAG · pgvector', 'NestJS', 'WhatsApp API', 'Next.js'].map((t) => (
          <span key={t} style={{ fontFamily: T.mono, fontSize: 10, color: T.mid, border: `1px solid ${T.line2}`, padding: '3px 8px', borderRadius: 3, whiteSpace: 'nowrap' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatsCard() {
  const stats = [['6+', 'years'], ['30+', 'platforms'], ['99.97%', 'uptime · lead proj'], ['$10M+', 'GMV / year']];
  return (
    <div style={{ border: `1px solid ${T.line}`, borderRadius: 6, background: T.bg2, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {stats.map(([v, l], i) => (
        <div
          key={l}
          style={{
            padding: 20,
            borderRight: i % 2 === 0 ? `1px solid ${T.line}` : 'none',
            borderBottom: i < 2 ? `1px solid ${T.line}` : 'none',
          }}
        >
          <div style={{ fontFamily: T.sans, fontSize: 28, fontWeight: 500, color: T.white, letterSpacing: '-0.03em' }}>{v}</div>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

function SignalsCard() {
  return (
    <div style={{ border: `1px solid ${T.line}`, padding: 20, borderRadius: 6, background: T.bg2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.12em' }}>
        <span>// SIGNALS</span>
        <span style={{ color: T.accent }}>● LIVE</span>
      </div>
      <div style={{ display: 'grid', gap: 10, fontFamily: T.mono, fontSize: 11, color: T.mid, lineHeight: 1.6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>last deploy</span>
          <span style={{ color: T.fg }}>2h ago · prod</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>reading</span>
          <span style={{ color: T.fg }}>Designing Data-Intensive Apps</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>exploring</span>
          <span style={{ color: T.fg }}>Bun · Drizzle · Hono</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>response time</span>
          <span style={{ color: T.accent }}>&lt; 24h</span>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  const { personal } = portfolioData;
  return (
    <section id="top" className="hero-section" style={{ paddingTop: 40}}>
      <div
        className="hero-meta"
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr auto',
          gap: 24,
          alignItems: 'end',
          fontFamily: T.mono,
          fontSize: 11,
          color: T.dim,
          paddingBottom: 28,
          borderBottom: `1px solid ${T.line}`,
        }}
      >
        <div>/00</div>
        <div style={{ color: T.mid }}>index — portfolio (v4.26 · {new Date().getFullYear()})</div>
        <div>{personal.location} · {personal.timezone}</div>
      </div>

      <div className="hero-headline" style={{ paddingTop: 48, paddingBottom: 36 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20, fontFamily: T.mono, fontSize: 11, color: T.accent }}>
          <Dot c={T.accent} /> OPEN TO WORK · Q3 → Q4 · REMOTE / CONTRACT
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: T.sans,
            fontWeight: 400,
            fontSize: 'clamp(56px, 10vw, 148px)',
            letterSpacing: '-0.045em',
            lineHeight: 0.92,
            color: T.white,
          }}
        >
          Lakshitha<span style={{ color: T.accent }}>.</span>
        </h1>
        <div
          className="hero-lead"
          style={{
            marginTop: 18,
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 360px)',
            gap: 48,
            alignItems: 'end',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: T.serif,
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.3vw, 30px)',
              lineHeight: 1.35,
              color: T.fg,
              maxWidth: 820,
              fontWeight: 400,
            }}
          >
            Senior engineer building{' '}
            <span style={{ color: T.white, fontStyle: 'normal', fontFamily: T.sans, fontWeight: 500 }}>high-performance commerce</span>{' '}
            and{' '}
            <span style={{ color: T.white, fontStyle: 'normal', fontFamily: T.sans, fontWeight: 500 }}>AI SaaS</span> — PHP, NestJS, pgvector and AWS — for systems that can&rsquo;t afford to be slow.
          </p>
          <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, lineHeight: 1.8, borderLeft: `1px solid ${T.line2}`, paddingLeft: 18 }}>
            <div><span style={{ color: T.accent }}>●</span>&nbsp; {personal.years}+ years shipping commerce</div>
            <div><span style={{ color: T.accent }}>●</span>&nbsp; {personal.projectsShipped} platforms in production</div>
            <div><span style={{ color: T.accent }}>●</span>&nbsp; LEMP, cloud-native, headless</div>
            <div><span style={{ color: T.accent }}>●</span>&nbsp; based {personal.location}</div>
          </div>
        </div>
      </div>

      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 32,
          alignItems: 'start',
          marginTop: 24,
        }}
      >
        <Terminal />
        <div style={{ display: 'grid', gap: 16 }}>
          <NowCard />
          <StatsCard />
          <SignalsCard />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-lead { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .hero-section { padding-top: 24px !important; padding-bottom: 32px !important; }
          .hero-meta { grid-template-columns: 1fr !important; gap: 4px !important; padding-bottom: 18px !important; }
          .hero-headline { padding-top: 24px !important; padding-bottom: 24px !important; }
          .hero-headline h1 { font-size: 56px !important; line-height: 0.95 !important; letter-spacing: -0.04em !important; }
          .hero-lead p { font-size: 18px !important; line-height: 1.4 !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
