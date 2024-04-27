'use client';

import { links } from '@/lib/data';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li 
              key={link.id}
            >
              <Link 
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
