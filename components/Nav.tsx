'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="nav-wordmark">Diana Ngo</Link>
      <div className="nav-links">
        {links.map((link) => {
          const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/contact" className="nav-contact-btn">Contact Me</Link>
      </div>
    </nav>
  );
}
