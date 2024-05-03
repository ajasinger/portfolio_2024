'use client';

import { projects } from '@/lib/projects-data';

type ProjectType = {
    param: string;
    name: string;
    overview: string[];
    overviewList?: {
        title: string;
        list: string[];
    };
    websiteURL: string;
    techStack: string[];
    approach: Approach[];
};

type Approach = {
    title: string;
    body: string[];
    bodyList?: { title: string; body: string }[];
};

export default function ProjectPage({ params }: { params: { project: string } }) {
    
    //set data to current project object
    const data: ProjectType | undefined = projects.find(project => project.param === params.project);

    return(
        <div className="bg-cream px-16 py-24 text-zinc-950 font-sans">
            <div className="flex flex-col gap-16">
                <h3 className="text-4xl font-semibold">{data?.name}</h3>
                {/* Intro Section */}
                <div className="flex flex-col gap-4 w-1/2">
                    <h4 className="font-serif text-lg font-semibold">Project Overview</h4>
                    {data?.overview?.map((text, index) => (
                        <div key={index}>
                            <p>{text}</p>
                        </div>
                    ))}
                    <p>{data?.overviewList?.title}</p>
                    <div className="flex flex-col gap-2">
                    {data?.overviewList?.list?.map((text, index) => (
                    
                        <ol key={index} className="list-disc ml-8">
                            <li>{text}</li>
                        </ol>
                        
                    ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-lg font-semibold">Tech Stack</h4>
                    <ul className="flex gap-8">
                        {data?.techStack?.map((text, index) => (
                            <li key={index} className="flex gap-8">
                                {text}<span className={`${index === data?.techStack.length-1 && "invisible"}`}>/</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Product Overview */}

            </div>
        </div>
    )
  }