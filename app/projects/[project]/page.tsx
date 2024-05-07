'use client';

import Image from 'next/image';
import { projects } from '@/lib/projects-data';
import Accordion from '@/components/Accordion';

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
    githubURL?: string;
    techStack: string[];
    approach: ApproachType[];
    solutions?: SolutionsType[];
    learnings: LearningsType[];
};

type ApproachType = {
    title?: string;
    body?: string[];
    bodyList?: { title: string; body: string }[];
};

type SolutionsType = {
    title: string;
    body: string;
};

type LearningsType = {
    title: string;
    body: string;
    learnings: string;
};

export default function ProjectPage({ params }: { params: { project: string } }) {
    
    //set data to current project object
    const data: ProjectType | undefined = projects.find(project => project.param === params.project);

    return(
        <div className="bg-cream pt-24 text-zinc-950 font-sans flex flex-col gap-16">
            <h3 className="text-4xl font-semibold px-16">{data?.name}</h3>
            <div className="flex flex-col gap-4 px-16">
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
                            {data && 
                                <Image
                                    src={data?.headerHref}
                                    width={600}
                                    height={600}
                                    alt={data?.headerImgAlt}
                                />
                            }
                        </div>
                    </div>
                </div>
                {/* Tech Stack */}
                <div className="flex flex-col gap-4 z-50">
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

            {/* Approach */}
            <div className="px-16 py-12 bg-cream text-zinc-950 relative">
                <div className="bg-[#E0FEAF] absolute top-[3rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
                <div className="bg-[#EDCEE2] absolute top-[25rem] right-[-5rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
                { data && 
                    <div className="z-50">
                        < Accordion data={data?.approach} />
                    </div>
                }
            </div>

            {/* Laptop Images */}
            {/* <div className="px-16 py-12 bg-cream text-zinc-950">

            </div> */}

            {/* Problems & Solutions */}
            <div className="px-16 py-12  text-zinc-950 flex gap-16 z-10">
            <div className="rounded-lg z-0 relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 hover:scale-105">
                        <div className="h-[450px] overflow-y-scroll border-8 border-black">
                            {data && 
                                <Image
                                    src={data?.headerHref}
                                    width={600}
                                    height={600}
                                    alt={data?.headerImgAlt}
                                />
                            }
                        </div>
                    </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-serif text-lg font-semibold">Problems & Solutions</h4>
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
        </div>
    )
  }