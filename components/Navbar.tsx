'use client';

import { navLinks } from '@/lib/data';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        router.push(e.currentTarget.value);
        setIsOpen(false);
    }

    return(
        <nav  className={`${isOpen && pathname === '/' && "border-b border-white"} font-general-sans text-lg px-8 md:px-16 py-4 sm:py-8`}>
            <div className="sm:hidden flex justify-end">
                <button 
                    onClick={handleToggle}
                    className="px-6 py-3 bg-cream text-zinc-950 border rounded-full hover:bg-zinc-950 hover:text-cream"
                >
                    {isOpen ? "CLOSE" : "MENU"}
                </button>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
            <ul className={`${isOpen ? "flex flex-col mt-10 divide-y divide-white border-t border-white" : "hidden"} sm:flex sm:gap-10 justify-end sm:items-center`}>
                {navLinks.map((link, index) => (
                    pathname !== link.href &&
                        <li 
                            key={index}
                            className="hover:underline underline-offset-8 decoration-1 py-5 sm:py-0"
                        >
                            {link.href === "/" || link.href === "/#work" ||  link.href === "/#about" ? (
                                <button onClick={handleClick} value={link.href} aria-label={link.ariaLabel}>{link.name}</button >
                            ):(
                                <Link href={link.href} target="_blank" aria-label={link.ariaLabel}>{link.name}</Link>
                            )
                            }
                        </li>
                ))}
                {pathname !== '/contact' && 
                    <li className={`${isOpen && "pt-10 pb-8"}`}>
                        <Link 
                            href={'/contact'}
                            className={`px-6 py-3 border rounded-full hover:bg-cream hover:text-zinc-950 ${isOpen && "bg-cream text-zinc-950"}`}
                        >
                        CONTACT ME
                        </Link>
                    </li>
                }
            </ul>
            </motion.div>
        </nav>
    )
}