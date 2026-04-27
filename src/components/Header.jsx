import { useEffect, useState } from 'react';
import { T, Dot } from './tokens';

const NAV = [
  ['about', '01'],
  ['stack', '02'],
  ['work', '03'],
  ['case', '04'],
  ['experience', '05'],
  ['notes', '06'],
  ['contact', '07'],
];

const Header = () => {
  const [now, setNow] = useState(() => new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Colombo',
  });

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${T.line}`,
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: '0 auto',
          padding: '10px 24px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 16,
          fontFamily: T.mono,
          fontSize: 11,
          color: T.mid,
        }}
        className="topbar-row"
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#top" style={{ color: T.white, fontWeight: 600, textDecoration: 'none' }}>~/lmarcho</a>
          <span style={{ color: T.dim }} className="topbar-clock">·</span>
          <span style={{ display: 'inline-flex', alignItems: 'center' }} className="topbar-clock">
            <Dot c={T.accent} /> available
          </span>
        </div>

        <nav className="topbar-nav" style={{ display: 'flex', gap: 18, justifyContent: 'center' }}>
          {NAV.map(([k, n]) => (
            <a key={k} href={`#${k}`} style={{ color: T.mid, textDecoration: 'none', display: 'inline-flex', gap: 6 }}>
              <span style={{ color: T.dim }}>{n}</span>
              <span>{k}</span>
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span className="topbar-clock">{t} <span style={{ color: T.dim }}>LKT</span></span>
          <button
            className="topbar-menu"
            onClick={() => setOpen((o) => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: `1px solid ${T.line2}`,
              color: T.mid,
              fontFamily: T.mono,
              fontSize: 11,
              padding: '3px 8px',
              borderRadius: 3,
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {open ? '×' : 'menu'}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            borderTop: `1px solid ${T.line}`,
            background: T.bg2,
            padding: '8px 24px 14px',
          }}
          className="topbar-mobilenav"
        >
          {NAV.map(([k, n]) => (
            <a
              key={k}
              href={`#${k}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                gap: 12,
                padding: '10px 4px',
                color: T.mid,
                textDecoration: 'none',
                fontFamily: T.mono,
                fontSize: 12,
                borderBottom: `1px dashed ${T.line2}`,
              }}
            >
              <span style={{ color: T.dim }}>{n}</span>
              <span style={{ color: T.white }}>{k}</span>
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .topbar-row { grid-template-columns: 1fr auto !important; padding: 10px 16px !important; }
          .topbar-nav { display: none !important; }
          .topbar-menu { display: inline-flex !important; }
          .topbar-clock { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
