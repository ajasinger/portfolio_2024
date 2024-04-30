'use client';

import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return(
        <nav  className="font-sans text-lg px-16 py-8">
            <ul className="flex gap-10 justify-end items-center">
                {pathname !== '/' && 
                <li className="hover:underline underline-offset-8 decoration-1"><Link href='/'>HOME</Link></li>
                }
                {navLinks.map((link, index) => (
                    <li 
                        key={index}
                        className="hover:underline underline-offset-8 decoration-1"
                     >
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
                <li>
                    <Link 
                        href={'/contact'}
                        className="px-6 py-3 border border-bg-stone-50 rounded-full hover:bg-cream hover:text-zinc-950"
                    >
                    CONTACT ME
                    </Link>
                </li>
            </ul>
        </nav>
    )
}