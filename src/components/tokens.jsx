export const T = {
  bg: '#0a0a0a',
  bg2: '#101010',
  bg3: '#161616',
  line: '#1f1f1f',
  line2: '#2a2a2a',
  dim: '#6b6b6b',
  mid: '#a3a3a3',
  fg: '#ededed',
  white: '#fafafa',
  accent: '#10b981',
  accent2: '#f59e0b',
  rust: '#c2410c',
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  sans: "'Inter Tight', 'Inter', system-ui, -apple-system, sans-serif",
  serif: "'Fraunces', 'Times New Roman', serif",
};

export function Dot({ c = T.accent, pulse = true }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: 8, height: 8, marginRight: 8 }}>
      <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: c }} />
      {pulse && (
        <span style={{ position: 'absolute', inset: -2, borderRadius: '50%', background: c, opacity: 0.35, animation: 'pulse-ring 2s ease-out infinite' }} />
      )}
    </span>
  );
}

export function Kbd({ children }) {
  return (
    <kbd style={{ fontFamily: T.mono, fontSize: 10, padding: '2px 6px', border: `1px solid ${T.line2}`, borderRadius: 3, color: T.mid, background: T.bg2 }}>
      {children}
    </kbd>
  );
}

export function SectionHead({ num, title, meta, caption }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr auto',
        gap: 24,
        alignItems: 'baseline',
        padding: '24px 0 32px',
        borderTop: `1px solid ${T.line}`,
        marginTop: 48,
      }}
    >
      <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim, letterSpacing: '0.12em' }}>/{num}</div>
      <div>
        <h2 style={{ margin: 0, fontFamily: T.sans, fontWeight: 500, fontSize: 34, letterSpacing: '-0.02em', color: T.white }}>{title}</h2>
        {caption && (
          <div style={{ marginTop: 8, fontFamily: T.mono, fontSize: 12, color: T.mid, maxWidth: 640, lineHeight: 1.6 }}>{caption}</div>
        )}
      </div>
      <div style={{ fontFamily: T.mono, fontSize: 11, color: T.dim }}>{meta}</div>
    </div>
  );
}
