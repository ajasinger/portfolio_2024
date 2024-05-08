'use client';

import Image from 'next/image';
import { projects } from '@/lib/projects-data';
import ApproachAccordion from '@/components/ApproachAccordion';
import SolutionsCarousel from '@/components/SolutionsCarousel';
import LearningsAccordion from '@/components/LearningsAccordion';

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
    problem: string;
    solution: string;
};

type LearningsType = {
    title?: string;
    body?: string;
    learnings?: string;
    bodyList?: { title: string; body: string }[];
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
                        {/* Tech Stack */}
                        {/* <div className="flex flex-col gap-4 z-50">
                            <h4 className="font-serif text-lg font-semibold">Tech Stack</h4>
                            <ul className="flex gap-8">
                                {data?.techStack?.map((text, index) => (
                                    <li key={index} className="flex gap-4">
                                        {text}<span className={`${index === data?.techStack.length-1 && "invisible"}`}>/</span>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </div>
                    <div className="z-0 relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

                        <div className="h-[450px] overflow-y-scroll">
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
                    {/* <div className="z-0 relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 hover:scale-105">
                        {data && 
                            <div className="h-[450px]">
                                <div className="h-[450px] overflow-y-scroll">
                                <Image
                                    src={data?.headerHref}
                                    width={600}
                                    height={600}
                                    alt={data?.headerImgAlt}
                                    // className=" inset-0 w-full h-full overflow-y-scroll"
                                />
                                </div>
                                <div className="absolute inset-0">
                                <Image
                                    src='/images/iphone_cropped.svg'
                                    width={3000}
                                    height={2000}
                                    alt={data?.headerImgAlt}
                                    // className="w-full"
                                />
                                </div>
                            </div>
                        }
                       
                    </div> */}
                </div>
                {/* Tech Stack */}
                <div className="flex flex-col gap-4 z-50">
                    <h4 className="font-serif text-lg font-semibold text-nowrap">Tech Stack</h4>
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
                <div className="bg-[#EDCEE2] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
                { data && 
                    <div className="z-50">
                        < ApproachAccordion data={data?.approach} />
                    </div>
                }
            </div>

            {/* Laptop Images */}
            {/* <div className="px-16 py-12 bg-cream text-zinc-950">

            </div> */}

            {/* Problems & Solutions */}
            {data?.solutions && 
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
                    <div className="flex flex-col gap-4 w-1/2">
                        <h4 className="font-serif text-lg font-semibold">Problems & Solutions</h4>
                        {data?.solutions && < SolutionsCarousel data={data?.solutions} />}
                    </div>
                </div>
            }

            {/* Learnings */}
            <div className="px-16 py-12 bg-cream text-zinc-950 relative">
                <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
                {/* <div className="bg-[#EDCEE2] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div> */}
                { data && 
                    <div className="z-50">
                        < LearningsAccordion data={data?.learnings} />
                    </div>
                }
            </div>
        </div>
    )
  }