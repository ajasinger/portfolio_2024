'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    return(
        <footer className="bg-zinc-950 px-8 md:px-16 2xl:px-48 py-12 sm:py-24 flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 font-sans relative bottom-0 z-50">
            <div className="flex flex-col gap-8">
                <Link href="/"><h2 className="text-3xl max-w-4xl font-semibold">AJA SINGER</h2></Link>
                {/* <Link href="/#work" className="text-xl hover:underline underline-offset-8 decoration-1">WORK</Link> */}
                <Link href="https://www.linkedin.com/in/ajasinger/" className="text-lg hover:underline underline-offset-8 decoration-1" target="_blank">LINKEDIN</Link>
                <Link href="https://github.com/ajasinger" className="text-lg hover:underline underline-offset-8 decoration-1" target="_blank">GITHUB</Link>
            </div>
            <div className="flex flex-col gap-8">
                {pathname !== '/contact' && 
                    <Link 
                        href="/contact"
                        className="text-lg sm:text-base sm:font-semibold sm:px-6 sm:py-3 sm:bg-cream sm:border sm:border-bg-stone-50 rounded-full hover:underline underline-offset-8 decoration-1 sm:hover:no-underline sm:hover:bg-zinc-950 text-cream sm:text-zinc-950 sm:hover:text-cream"
                    >
                        CONTACT ME
                    </Link>
                }
                <p>info@ajasinger.com</p>
            </div>

        </footer>
    )
}