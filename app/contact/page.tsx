import Reveal from '@/components/Reveal';

const links = [
  {
    href: 'mailto:dianango75@gmail.com',
    external: false,
    label: 'Email',
    value: 'dianango75@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#FFF1D0" strokeWidth="2" /><path d="M2 8l10 7 10-7" stroke="#FFF1D0" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  },
  {
    href: 'https://www.linkedin.com/in/dianangoux/',
    external: true,
    label: 'LinkedIn',
    value: 'dianangoux',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#FFF1D0" strokeWidth="2" /><path d="M7 10v8M7 7v.01M12 10v8M12 13a3 3 0 016 0v5" stroke="#FFF1D0" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  },
  {
    href: 'https://www.instagram.com/diana_uiuc/',
    external: true,
    label: 'Instagram',
    value: '@diana_uiuc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="#FFF1D0" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="#FFF1D0" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="#FFF1D0" /></svg>
    )
  }
];

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--maroon)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 56px', textAlign: 'center' }}>
      <Reveal>
        <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--pink)', marginBottom: 16 }}>Let&apos;s Connect</div>
        <h1 style={{ fontSize: 68, fontWeight: 800, color: 'var(--cream)', marginBottom: 18, letterSpacing: '-2.5px', lineHeight: 1 }}>Get In Touch</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,241,208,0.6)', maxWidth: 480, lineHeight: 1.78, margin: '0 auto 56px' }}>
          Open to full-time roles in UX Design and Product Management. Let&apos;s talk about how I can make an impact at your company.
        </p>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="contact-link"
              style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,241,208,0.07)', border: '1px solid rgba(255,241,208,0.12)', borderRadius: 12, padding: '20px 26px', textDecoration: 'none' }}
            >
              <div style={{ width: 38, height: 38, background: 'var(--pink)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {l.icon}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,241,208,0.42)', marginBottom: 3, letterSpacing: 0.5 }}>{l.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--cream)' }}>{l.value}</div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
      <div style={{ fontSize: 13, color: 'rgba(255,241,208,0.22)', marginTop: 72 }}>© 2026 Diana Ngo</div>
    </div>
  );
}
