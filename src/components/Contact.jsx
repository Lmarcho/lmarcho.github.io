import { useState } from 'react';
import { T, SectionHead } from './tokens';
import { portfolioData } from '../data/portfolioData';

const PRESETS = [
  { id: 'senior-role', label: 'Senior / staff role', subject: 'Senior / staff engagement' },
  { id: 'ecommerce', label: 'Magento / eCommerce', subject: 'Magento / eCommerce engagement' },
  { id: 'ai-saas', label: 'AI / RAG build', subject: 'AI / RAG engagement' },
  { id: 'consulting', label: 'Short consulting', subject: 'Consulting engagement' },
];

function MailComposer({ email }) {
  const [preset, setPreset] = useState(PRESETS[0].id);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [body, setBody] = useState('');

  const subject = `[${PRESETS.find((p) => p.id === preset).subject}] — ${name || 'new inquiry'}`;
  const mailBody = [
    'Hi Lakshitha,',
    '',
    body || "Quick context on what we're building, timeline, and stack fit:",
    '',
    '—',
    name ? `${name}${company ? ' · ' + company : ''}` : '',
  ]
    .filter(Boolean)
    .join('\n');
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

  const fieldStyle = {
    background: T.bg3,
    border: `1px solid ${T.line2}`,
    borderRadius: 4,
    color: T.white,
    fontFamily: T.mono,
    fontSize: 12,
    padding: '10px 12px',
    width: '100%',
    outline: 'none',
    boxSizing: 'border-box',
  };
  const labelStyle = {
    fontFamily: T.mono,
    fontSize: 10,
    color: T.dim,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: 6,
    display: 'block',
  };

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div>
        <span style={labelStyle}>topic</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPreset(p.id)}
              style={{
                padding: '6px 10px',
                borderRadius: 3,
                border: `1px solid ${preset === p.id ? T.accent : T.line2}`,
                background: preset === p.id ? 'rgba(16,185,129,0.08)' : 'transparent',
                color: preset === p.id ? T.accent : T.mid,
                fontFamily: T.mono,
                fontSize: 11,
                cursor: 'pointer',
                letterSpacing: '0.02em',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mail-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div>
          <span style={labelStyle}>name</span>
          <input style={fieldStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
        </div>
        <div>
          <span style={labelStyle}>company</span>
          <input style={fieldStyle} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme, Inc." />
        </div>
      </div>
      <div>
        <span style={labelStyle}>context</span>
        <textarea
          style={{ ...fieldStyle, resize: 'vertical', minHeight: 100, lineHeight: 1.6 }}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="scope · timeline · stack · whatever you want me to know"
        />
      </div>
      <div
        className="mail-footer"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 4 }}
      >
        <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim }}>
          or copy: <span style={{ color: T.mid }}>{email}</span>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a
            href={gmailHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 14px',
              borderRadius: 4,
              background: 'transparent',
              color: T.fg,
              border: `1px solid ${T.line2}`,
              fontFamily: T.mono,
              fontSize: 12,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            Open in Gmail <span>↗</span>
          </a>
          <a
            href={mailtoHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              borderRadius: 4,
              background: T.accent,
              color: '#0a1410',
              fontFamily: T.mono,
              fontSize: 12,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            Send via mail app <span>↗</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .mail-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

const Contact = () => {
  const { personal, links } = portfolioData;
  const channels = [
    ['email', personal.email, links.email],
    ['linkedin', 'in/lmarcho', links.linkedin],
    ['github', '@lmarcho', links.github],
    ['résumé', 'Lakshitha_Resume.pdf', links.resume],
  ];
  return (
    <section id="contact">
      <SectionHead num="07" title="Contact" meta="async · email · async" caption="Pick the channel that fits." />
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 32 }}>
        <div style={{ border: `1px solid ${T.line}`, padding: 28, borderRadius: 6, background: T.bg2 }}>
          <div style={{ fontFamily: T.mono, fontSize: 10, color: T.dim, letterSpacing: '0.15em', marginBottom: 16 }}>// CHANNELS</div>
          <div style={{ display: 'grid', gap: 14 }}>
            {channels.map(([k, v, href]) => (
              <a
                key={k}
                href={href}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1fr 20px',
                  gap: 12,
                  padding: '10px 0',
                  borderBottom: `1px dashed ${T.line2}`,
                  textDecoration: 'none',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{k}</span>
                <span style={{ fontFamily: T.sans, fontSize: 15, color: T.white, overflow: 'hidden', textOverflow: 'ellipsis' }}>{v}</span>
                <span style={{ fontFamily: T.mono, fontSize: 12, color: T.accent, textAlign: 'right' }}>↗</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: 24, fontFamily: T.mono, fontSize: 11, color: T.mid, lineHeight: 1.7 }}>
            Response time: <span style={{ color: T.white }}>within 24h</span>, most days.
            <br />
            Working hours: <span style={{ color: T.white }}>09:00 – 18:00 UTC+5:30</span>, flexible for US overlap.
          </div>
        </div>

        <div style={{ border: `1px solid ${T.line}`, padding: 28, borderRadius: 6, background: T.bg2 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 16,
              fontFamily: T.mono,
              fontSize: 10,
              color: T.dim,
              letterSpacing: '0.15em',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <span>// START A PROJECT</span>
            <span>→ opens your mail client</span>
          </div>
          <MailComposer email={personal.email} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
