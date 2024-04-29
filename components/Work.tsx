'use client';

import { projects } from '@/lib/data';

export default function Work() {
    return(
        <div className="p-16 flex flex-col align-center justify-center gap-8">
            <h3 className="text-4xl text-cream font-semibold text-center">My work</h3>
            <div className="flex flex-wrap align-center justify-center gap-16 text-zinc-950">
                {projects.map(project => (
                    <div 
                        key={project.id}
                        className="w-2/5 z-0 bg-cream rounded-md p-8 relative overflow-hidden"
                    >
                        <div className="space-between-2 z-50">
                            <h4 className="text-lg font-serif font-semibold z-50">{project.title}</h4>
                            <p className="z-50">{project.body}</p>
                        </div>
                        <div className="bg-[#E0FEAF] -z-50 absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
                        <div className="bg-[#EDCEE2] -z-50 absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
                        {/* <Link></Link> */}
                    </div>
                ))}
            </div>
        </div>
    )
}