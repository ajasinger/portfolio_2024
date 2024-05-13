'use client';

import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

    return(
        <nav  className="font-sans text-lg px-8 py-4 sm:py-8">
            <div className="sm:hidden flex justify-end">
                    <button 
                        onClick={handleToggle}
                            className="px-6 py-3 bg-cream text-zinc-950 border rounded-full hover:bg-zinc-950 hover:text-cream"
                        >
                        {isOpen ? "CLOSE" : "MENU"}
                    </button>
                </div>
            <ul className={`${isOpen ? "flex flex-col pt-10" : "hidden"} sm:flex gap-10 justify-end sm:items-center`}>
                {navLinks.map((link, index) => (
                    pathname !== link.href &&
                        <li 
                            key={index}
                            className="hover:underline underline-offset-8 decoration-1"
                        >
                            {link.href === "/" || link.href === "/#work" ||  link.href === "/#about" ? (
                                <Link href={link.href}>{link.name}</Link>
                            ):(
                                <Link href={link.href} target="_blank">{link.name}</Link>
                            )
                            }
                        </li>
                ))}
                {pathname !== '/contact' && 
                    <li className="hidden sm:block">
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