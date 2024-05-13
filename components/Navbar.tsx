'use client';

import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

    return(
        <nav  className="font-sans text-lg px-8 md:px-16 py-8">
            <ul className="flex gap-10 justify-end items-center">
                {pathname !== '/' && 
                    <li className="hover:underline underline-offset-8 decoration-1"><Link href='/'>HOME</Link></li>
                }
                {navLinks.map((link, index) => (
                    <li 
                        key={index}
                        className="hover:underline underline-offset-8 decoration-1"
                     >
                        {link.href === "/#work" ||  link.href === "/#about" ? (
                            <Link href={link.href}>{link.name}</Link>
                        ):(
                            <Link href={link.href} target="_blank">{link.name}</Link>
                        )
                        }
                    </li>
                ))}
                {pathname !== '/contact' && 
                    <li>
                        <Link 
                            href={'/contact'}
                            className="px-6 py-3 border rounded-full hover:bg-cream hover:text-zinc-950"
                        >
                        CONTACT ME
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}