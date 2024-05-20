'use client';

import Image from 'next/image';
import { projects } from '@/lib/projects-data';
import ApproachAccordion from '@/components/ApproachAccordion';
import SolutionsCarousel from '@/components/SolutionsCarousel';
import LearningsAccordion from '@/components/LearningsAccordion';
import TwoImageSection from '@/components/TwoImageSection';
import OneImageSection from '@/components/OneImageSection';

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
    images: ImageType[];
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

type ImageType = {
    src: string;
    tabletSrc: string;
    mobileSrc: string;
    alt: string;
    srcHover?: string;
    altHover?: string;
};

export default function ProjectPage({ params }: { params: { project: string } }) {
    
    //set data to current project object
    const data: ProjectType | undefined = projects.find(project => project.param === params.project);

    return(
        <div className="bg-cream pt-12 sm:pt-24 text-zinc-950 font-sans flex flex-col">
            <h3 className="text-4xl font-semibold px-8 md:px-16 pb-8 sm:pb-16">{data?.name}</h3>
            
            {/* Intro Section */}
            <div className="flex flex-col gap-4 px-8 md:px-16">
                <div className="flex gap-28 justify-between w-full">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-serif text-xl font-semibold">Project Overview</h4>
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
                <div className="z-0 hidden md:block relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 lg:hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
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
            </div>

            {/* Tech Stack */}
                <div className="flex flex-col gap-4 py-6 sm:py-12 z-50">
                    <h4 className="font-serif text-xl font-semibold">Tech Stack</h4>
                    <ul className="flex gap-4 flex-wrap">
                        {data?.techStack?.map((text, index) => (
                            <li key={index} className="flex gap-4 text-nowrap">
                                <span>{text}</span>
                                {index !== data?.techStack.length - 1 && <span>/</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

                <div className={`${data && data.images.length -1 > 1 && "px-8 md:px-16 py-6 sm:py-12"} text-zinc-950 relative`}>
                    <div className="bg-[#E0FEAF] absolute top-[3rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
                    <div className="bg-[#EDCEE2] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
                    {/* Two Image Section */}
                    <div className="hidden lg:block">
                        { data && data.images.length - 1 > 1 && 
                            < TwoImageSection image1={data.images[0]} image2={data.images[1]} />
                        }
                    </div>
                    {/* One Image Section */}
                    <div className="lg:hidden px-8 md:px-16 py-6 sm:py-12">
                        {data && 
                            < OneImageSection image={data.images[0]} />
                        }
                    </div>
                </div>
        

            {/* Approach */}
            <div className="px-8 md:px-16 py-6 sm:py-12 text-zinc-950 relative">
                {/* <div className="bg-[#E0FEAF] absolute top-[3rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div> */}
                {/* <div className="bg-[#EDCEE2] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div> */}
                { data && 
                    <div className="z-50">
                        < ApproachAccordion data={data?.approach} />
                    </div>
                }
            </div>

            {/* One Image Section */}
            <div className="lg:hidden px-8 md:px-16 py-6 sm:py-12">
                {data && 
                    < OneImageSection image={data.images[1]} />
                }
            </div>

            {/* Problems & Solutions */}
            {data?.solutions && 
                <div className="px-8 md:px-16 py-6 sm:py-12  text-zinc-950 flex gap-24 z-10">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-serif text-xl font-semibold">Problems & Solutions</h4>
                        {data?.solutions && < SolutionsCarousel data={data?.solutions} />}
                    </div>
                </div>                
            }

            
                <div className={`${data && data.images.length -1 > 1 && "px-8 md:px-16 py-6 sm:py-12"} text-zinc-950 relative`}>
                    <div className="bg-[#D8D5FF] absolute top-[-5rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
                    <div className="bg-[#E0FEAF] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
                    {/* Two Image Section */}
                    <div className="hidden lg:block">
                        { data && data.images.length -1 > 1 &&
                            <div>
                                < TwoImageSection image1={data.images[2]} image2={data.images[3]} />
                            </div>
                        }
                        { data && data.images.length -1 <= 1 &&
                            <div>
                                < TwoImageSection image1={data.images[0]} image2={data.images[1]} />
                            </div>
                        }
                    </div>
                    {/* One Image Section */}
                    <div className="lg:hidden">
                        {data && data.images.length -1 > 1 && 
                            < OneImageSection image={data.images[2]} />
                        }
                    </div>
                </div>
            

            {/* Learnings */}
            <div className="px-8 md:px-16 py-6 sm:py-12 pb-12  text-zinc-950 relative">
                {/* <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div> */}
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