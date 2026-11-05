import Reveal from '@/components/Reveal';

const links = [
  {
    href: 'mailto:dianango75@gmail.com',
    external: false,
    label: 'Email',
    value: 'dianango75@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  },
  {
    href: 'https://www.linkedin.com/in/dianangoux/',
    external: true,
    label: 'LinkedIn',
    value: 'dianangoux',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" /><path d="M7 10v8M7 7v.01M12 10v8M12 13a3 3 0 016 0v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
    )
  },
  {
    href: 'https://www.instagram.com/diana_uiuc/',
    external: true,
    label: 'Instagram',
    value: '@diana_uiuc',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
    )
  }
];

export default function Contact() {
  return (
    <main className="section">
      <div className="container">
        <Reveal className="page-head--center">
          <span className="label eyebrow">Let&apos;s Connect</span>
          <h1 className="display-lg title">Get In Touch</h1>
          <p className="body-lg lead">
            Open to full-time roles in UX Design and Product Management. Let&apos;s talk about how I can make an impact at your company.
          </p>
          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="ds-card ds-card--row"
              >
                <div className="icon-tile">{l.icon}</div>
                <div className="ds-card__content">
                  <span className="label ds-card__eyebrow">{l.label}</span>
                  <span className="body"><b>{l.value}</b></span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
        <p className="body-sm footer-note">© 2026 Diana Ngo</p>
      </div>
    </main>
  );
}
