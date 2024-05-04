'use client';

import Image, { ImageProps } from 'next/image';
import { projects } from '@/lib/projects-data';

type ProjectType = {
    param: string;
    name: string;
    headerHref: string;
    headerImgAlt: string;
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
    title?: string;
    body: string[];
    bodyList?: { title: string; body: string }[];
};

export default function ProjectPage({ params }: { params: { project: string } }) {
    
    //set data to current project object
    const data: ProjectType | undefined = projects.find(project => project.param === params.project);

    return(
        <div className="bg-cream px-16 py-24 text-zinc-950 font-sans flex flex-col gap-16">
            <h3 className="text-4xl font-semibold">{data?.name}</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-28 justify-between w-full">
                    <div className="flex flex-col gap-16">
                        {/* Intro Section */}
                        <div className="flex flex-col gap-4">
                            <h4 className="font-serif text-lg font-semibold">Project Overview</h4>
                            <div className="flex flex-col gap-2">
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
                        </div>
                    </div>
                    <div className="rounded-lg z-0 relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 hover:scale-105">
                        <div className="h-[450px] overflow-y-scroll border-8 border-black">
                            <Image
                                src={data?.headerHref}
                                width={600}
                                height={600}
                                alt={data?.headerImgAlt}
                            />
                        </div>
                    </div>
                </div>
                {/* Tech Stack */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-lg font-semibold">Tech Stack</h4>
                    <ul className="flex gap-8">
                        {data?.techStack?.map((text, index) => (
                            <li key={index} className="flex gap-4">
                                {text}<span className={`${index === data?.techStack.length-1 && "invisible"}`}>/</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-16">
                {/* Approach */}
                <div className="flex flex-col gap-4 w-1/2">
                    <h4 className="font-serif text-lg font-semibold">Project Overview</h4>
                    <div>
                    {data?.approach?.map((text, index) => (
                        <div key={index}>
                            <h5 className="font-semibold uppercase">{text.title}</h5>
                            <div  className="flex flex-col gap-2">
                                {text?.body?.map((bodyText, index) => (
                                    <div key={index}>
                                        {bodyText}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                {text?.bodyList?.map((text, index) => (
                                    <ol key={index} className="list-decimal ml-8">
                                        <li>
                                            <p><span className="font-semibold">{text.title}</span>{' '}{text.body}</p>
                                        </li>
                                    </ol>
                                ))}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
  }