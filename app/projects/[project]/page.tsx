'use client';

import { projects } from '@/lib/projects-data';

export default function ProjectPage({ params }: { params: { project: string } }) {
    
    //set data to current project object
    const data = projects.find(project => project.param === params.project);

    return(
        <div className="bg-cream px-16 py-24 text-zinc-950 font-sans">
            <h2>{data?.name}</h2>
        </div>
    )
  }