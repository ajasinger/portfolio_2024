'use client'

import Link from 'next/link';

export default function ContactPage() {
    return(
        <div className="bg-cream px-8 md:px-16 2xl:px-48 py-12 sm:py-24 font-general-sans text-zinc-950 relative min-h-[800px]">
            <div className="bg-[#E0FEAF] absolute top-[10rem] right-[5rem] h-[31.25rem] w-[24.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
            <div className="bg-[#EDCEE2] absolute top-[10rem] right-[0rem] h-[21.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
            <div className="z-50 relative flex flex-col gap-12">
                <h3 className="text-4xl font-semibold">Let&apos;s talk.</h3>
                <div className="flex flex-col gap-6 max-w-xl">
                    <p className="text-lg">
                        I&apos;m always open to interesting conversations &mdash; about hard engineering problems, what you&apos;re building, or anything in between.
                    </p>
                    <a
                        href="mailto:hello@ajasinger.com"
                        className="text-lg font-medium hover:underline underline-offset-8 decoration-1"
                    >
                        hello@ajasinger.com
                    </a>
                    <div className="flex gap-8 pt-4">
                        <Link
                            href="https://www.linkedin.com/in/ajasinger/"
                            target="_blank"
                            className="px-6 py-3 border border-zinc-950 rounded-full hover:bg-zinc-950 hover:text-cream transition"
                        >
                            LINKEDIN
                        </Link>
                        <Link
                            href="https://github.com/ajasinger"
                            target="_blank"
                            className="px-6 py-3 border border-zinc-950 rounded-full hover:bg-zinc-950 hover:text-cream transition"
                        >
                            GITHUB
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
