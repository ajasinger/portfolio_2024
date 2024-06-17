'use client';

import { projects } from '@/lib/data';
import MotionSection from '@/components/MotionSection';
import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
    return(
        <MotionSection>
        <div id="work" className="px-8 md:px-16 2xl:px-48 py-12 md:py-24 flex flex-col flex-wrap justify-center lg:justify-between gap-8">
            <h3 className="text-2xl md:text-4xl text-cream font-semibold">My work</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-zinc-950">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="flex flex-col gap-8"
                    >
                        <Link 
                            href={`projects/${project.param}`}
                            className=" bg-cream p-4 sm:p-8 z-0 relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 lg:hover:scale-105"
                        >
                            <div className="h-[400px] overflow-hidden md:overflow-y-scroll shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                                <Image
                                    src={project.href}
                                    objectFit="cover"
                                    width={600}
                                    height={600}
                                    className="w-full top-0 left-0"
                                    alt={project.alt}
                                />
                            </div>
                            <div className="space-y-2 z-100">
                                <h4 className="text-lg font-serif font-semibold z-50">{project.name}</h4>
                                <p className="z-50">{project.body}</p>
                            </div>
                            <div className="bg-[#E0FEAF] -z-10 absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
                            <div className="bg-[#E4E2FF] -z-10 absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
                        </Link>
                        <Link href={`projects/${project.param}`} className="text-cream text-lg flex gap-2 items-center group">
                            LEARN MORE
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 transition ease-in-out delay-50 lg:group-hover:translate-x-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </MotionSection>
    )
}