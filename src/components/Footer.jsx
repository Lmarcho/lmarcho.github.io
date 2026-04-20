import { T, Kbd } from './tokens';

const Footer = () => {
  return (
    <footer style={{ marginTop: 80, padding: '40px 0 60px', borderTop: `1px solid ${T.line}` }}>
      <div
        className="footer-row"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: 24,
          alignItems: 'center',
          fontFamily: T.mono,
          fontSize: 11,
          color: T.dim,
        }}
      >
        <div>© {new Date().getFullYear()} Lakshitha — built, not bought.</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <span>smooth scroll · no trackers</span>
        </div>
        <div style={{ textAlign: 'right' }}>Colombo, LK · UTC+5:30</div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-row { grid-template-columns: 1fr !important; text-align: center !important; }
          .footer-row > div { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
