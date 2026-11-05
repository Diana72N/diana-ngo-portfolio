'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const resumePdf = '/resume/Diana_Ngo_Resume.pdf';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: resumePdf, label: 'Resume', download: 'Diana_Ngo_Resume.pdf' },
  { href: '/contact', label: 'Contact Me' }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container top">
        <nav className="ds-nav" aria-label="Main">
          <Link href="/" className="ds-nav__brand">Diana Ngo</Link>
          <ul className="ds-nav__links">
            {links.map((link) => {
              // Resume is a file download, not a page.
              if (link.download) {
                return (
                  <li key={link.href}>
                    <a href={link.href} download={link.download} className="ds-nav__link ds-nav__link--download">
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M6 1v7M3 5.5 6 8.5l3-3M1.5 10.5h9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                      </svg>
                      <span className="sr-only">(download PDF)</span>
                    </a>
                  </li>
                );
              }
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link href={link.href} className="ds-nav__link" aria-current={isActive ? 'page' : undefined}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
