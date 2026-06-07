import { T, SectionHead } from './tokens';
import { portfolioData, HIDE_AI_SAAS } from '../data/portfolioData';

const PRINCIPLES = [
  ['Perf-first', 'Ship it fast, or fix it before shipping.'],
  ['Cache ≠ magic', 'Eviction strategy before you add a layer.'],
  ['Boring stacks', 'PHP + MySQL + Redis still beats fashion.'],
  ...(HIDE_AI_SAAS ? [] : [['AI with grounding', 'RAG with citations beats vibes.']]),
  ['Observability first', "If you can't see it, you can't fix it."],
  ['Idempotent by default', "Retries shouldn't corrupt your data."],
  ['Measure, don\u2019t guess', 'Blackfire, New Relic, real users — not vibes.'],
  ['Ship calm', 'No heroics. No 3am deploys. Boring is good.'],
];

const STACK_FLUENCY = [
  ['Python', 'Flask, Django — scripts, APIs, data pipelines, ML glue.'],
  ['Node.js', 'NestJS for modular backends, Next.js (App Router) on the front.'],
  ['PHP', 'Magento 2 including Hyvä theme, Laravel, Symfony internals.'],
  ['Headless & new', 'Payload CMS, PWA Studio, MCP servers for LLMs.'],
];

const About = () => {
  const { personal } = portfolioData;
  return (
    <section id="about">
      <SectionHead
        num="01"
        title="About"
        meta="bio · approach"
        caption="Long-form tab — who I am, how I work, and what I won't compromise on."
      />

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48 }}>
        <div>
          <p
            style={{
              fontFamily: T.sans,
              fontSize: 19,
              lineHeight: 1.55,
              color: T.fg,
              margin: 0,
              fontWeight: 400,
            }}
          >
            I build and run <strong style={{ color: T.white, fontWeight: 600 }}>platforms that don&rsquo;t fall over</strong> — from high-traffic Magento stores to {HIDE_AI_SAAS ? 'cloud-native NestJS and Next.js backends' : 'multi-tenant AI SaaS'}. Six years in, most of it spent inside big PHP codebases{HIDE_AI_SAAS ? '.' : ' and, lately, wiring LLMs into places they weren’t designed for.'}
          </p>
          <p style={{ fontFamily: T.sans, fontSize: 16, lineHeight: 1.65, color: T.mid, marginTop: 20 }}>
            I like the unglamorous parts: query plans that don&rsquo;t explode, idempotent consumers, ERP sync that actually stays in sync, {HIDE_AI_SAAS ? '' : 'RAG retrieval that returns the right chunk, '}observability before incidents. I lead teams by pairing, reviewing, and making the easy thing the right thing.
          </p>

          <div
            className="principles-grid"
            style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}
          >
            {PRINCIPLES.map(([h, b]) => (
              <div key={h} style={{ borderLeft: `1px solid ${T.line2}`, paddingLeft: 14 }}>
                <div style={{ fontFamily: T.mono, fontSize: 10, color: T.accent, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{h}</div>
                <div style={{ fontFamily: T.sans, fontSize: 14, color: T.fg, marginTop: 6, lineHeight: 1.5 }}>{b}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, border: `1px solid ${T.line}`, borderRadius: 6, background: T.bg2, padding: '18px 20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 14,
                fontFamily: T.mono,
                fontSize: 10,
                color: T.dim,
                letterSpacing: '0.15em',
              }}
            >
              <span>// STACK FLUENCY</span>
              <span>what I reach for</span>
            </div>
            <div
              className="stack-fluency"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16,
                fontFamily: T.mono,
                fontSize: 12,
                lineHeight: 1.6,
              }}
            >
              {STACK_FLUENCY.map(([h, b]) => (
                <div key={h}>
                  <div style={{ color: T.accent, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</div>
                  <div style={{ color: T.fg, marginTop: 4 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ID card */}
        <div style={{ border: `1px solid ${T.line}`, background: T.bg2, borderRadius: 6, overflow: 'hidden' }}>
          <div
            style={{
              padding: '14px 18px',
              borderBottom: `1px solid ${T.line}`,
              fontFamily: T.mono,
              fontSize: 10,
              color: T.dim,
              letterSpacing: '0.15em',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>// ID CARD</span>
            <span>#LM-001</span>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              overflow: 'hidden',
              background: `linear-gradient(135deg, ${T.accent} 0%, #0ea5e9 50%, ${T.rust} 100%)`,
              borderBottom: `1px solid ${T.line}`,
            }}
          >
            <img
              src={personal.profileImage}
              alt={personal.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div style={{ position: 'absolute', top: 12, left: 12, width: 20, height: 20, borderTop: `2px solid ${T.accent}`, borderLeft: `2px solid ${T.accent}` }} />
            <div style={{ position: 'absolute', top: 12, right: 12, width: 20, height: 20, borderTop: `2px solid ${T.accent}`, borderRight: `2px solid ${T.accent}` }} />
            <div style={{ position: 'absolute', bottom: 12, left: 12, width: 20, height: 20, borderBottom: `2px solid ${T.accent}`, borderLeft: `2px solid ${T.accent}` }} />
            <div style={{ position: 'absolute', bottom: 12, right: 12, width: 20, height: 20, borderBottom: `2px solid ${T.accent}`, borderRight: `2px solid ${T.accent}` }} />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 22px 16px',
                background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)',
              }}
            >
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.accent, letterSpacing: '0.15em', marginBottom: 4 }}>SENIOR FULL-STACK ENGINEER</div>
              <div style={{ fontFamily: T.sans, fontSize: 24, color: T.white, fontWeight: 500, letterSpacing: '-0.02em' }}>{personal.name}</div>
            </div>
          </div>

          <div
            style={{
              padding: 18,
              fontFamily: T.mono,
              fontSize: 12,
              lineHeight: 1.9,
              color: T.mid,
              borderBottom: `1px solid ${T.line}`,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}
          >
            <div>
              <div><span style={{ color: T.dim }}>loc  ·</span> <span style={{ color: T.fg }}>Colombo, LK</span></div>
              <div><span style={{ color: T.dim }}>tz   ·</span> <span style={{ color: T.fg }}>UTC+5:30</span></div>
            </div>
            <div>
              <div><span style={{ color: T.dim }}>exp  ·</span> <span style={{ color: T.fg }}>6+ yrs</span></div>
              <div><span style={{ color: T.dim }}>rate ·</span> <span style={{ color: T.fg }}>on request</span></div>
            </div>
          </div>

          <div style={{ padding: 20, fontFamily: T.mono, fontSize: 11, color: T.mid, lineHeight: 2 }}>
            <div style={{ color: T.dim, fontSize: 10, letterSpacing: '0.12em', marginBottom: 8 }}>// ENDORSEMENTS</div>
            <div>✓ 30+ platform migrations</div>
            <div>✓ 15+ ERP integrations (live sync)</div>
            <div>✓ 10+ payment gateways</div>
            <div>✓ AWS + Alibaba + Cloudflare</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .principles-grid { grid-template-columns: 1fr !important; }
          .stack-fluency { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
