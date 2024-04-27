'use client';

import { navLinks } from '@/lib/data';
import Link from 'next/link';

export default function Navbar() {
    return(
        <nav  className="font-sans text-lg py-8">
            <ul className="flex gap-10 justify-end items-center">
                {navLinks.map((link) => (
                    <li 
                        key={link.id}
                        className="hover:underline underline-offset-8 decoration-1"
                     >
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
                <li>
                    <Link 
                        href={'/contact-me'}
                        className="px-6 py-3 border border-bg-stone-50 rounded-full hover:bg-stone-50 hover:text-zinc-950"
                    >
                    CONTACT ME
                    </Link>
                </li>
            </ul>
        </nav>
    )
}