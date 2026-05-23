import Image from 'next/image';
import { Metadata } from 'next';
import { projects } from '@/lib/projects-data';
import TwoImageSection from '@/components/TwoImageSection';
import OneImageSection from '@/components/OneImageSection';
import MotionSection from '@/components/MotionSection';
import { ProjectType } from '@/lib/types';

export const metadata: Metadata = {
    title: "Work | Aja Singer",
    description: "This is an overview of Aja Singer's work.",
};

export default function ProjectPage({ params }: { params: { project: string } }) {
    const data: ProjectType | undefined = projects.find(project => project.param === params.project);

    return(
        <div className="bg-cream py-12 md:py-24 text-zinc-950 font-general-sans flex flex-col">
            <h3 className="text-4xl font-semibold px-8 md:px-16 2xl:px-48">{data?.name}</h3>

            {data?.role && (
                <div className="px-8 md:px-16 2xl:px-48 pt-4 flex flex-col gap-1">
                    <p className="text-lg">{data.role}{data.dates && ` \u2022 ${data.dates}`}</p>
                    {data.companyDescription && <p className="text-zinc-500">{data.companyDescription}</p>}
                </div>
            )}

            {/* Intro Section */}
            <div className="flex flex-col gap-12 px-8 md:px-16 2xl:px-48 py-12">
                <div className="flex gap-28 justify-between w-full">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold">Project overview</h4>
                            <div className="flex flex-col gap-2 max-w-xl xl:max-w-2xl">
                                {data?.overview?.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {data?.headerHref && (
                        <div className="z-0 hidden max-w-sm md:block relative overflow-hidden space-y-8 h-full transition ease-in-out duration-300 delay-100 lg:hover:scale-105 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                            <div className="h-[450px] overflow-y-scroll">
                                <Image
                                    src={data.headerHref}
                                    width={600}
                                    height={600}
                                    alt={data.headerImgAlt || data.name}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Tech Stack */}
                <div className="z-50">
                    <MotionSection>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-2xl font-semibold">Tech stack</h4>
                            <ul className="flex gap-4 flex-wrap">
                                {data?.techStack?.map((text, index) => (
                                    <li key={index} className="flex gap-4 text-nowrap uppercase">
                                        <span>{text}</span>
                                        {index !== (data?.techStack?.length ?? 0) - 1 && <span>/</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </MotionSection>
                </div>
            </div>

            {/* Images (first pair) */}
            {data?.images && data.images.length > 1 && (
                <div className={`${data.images.length > 2 ? "px-8 md:px-16 2xl:px-48 py-12" : "px-8 md:px-16 py-12 lg:p-0"} text-zinc-950 relative`}>
                    <div className="bg-[#E0FEAF] absolute -top-[10rem] right-[20rem] 2xl:left-[20rem] h-[81.25rem] md:h-[31.25rem] lg:h-[61.25rem] w-[31.25rem] lg:w-[61.25rem] rounded-full blur-[7rem] z-0"></div>
                    <div className="bg-[#EDCEE2] absolute top-[55rem] md:top-[10rem] right-[0rem] h-[21.25rem] md:h-[31.25rem] lg:h-[61.25rem] w-[50rem] lg:w-[51.25rem] rounded-full blur-[7rem] z-0"></div>
                    <MotionSection>
                        <div className="hidden lg:block">
                            <TwoImageSection image1={data.images[0]} image2={data.images[1]} />
                        </div>
                        <div className="lg:hidden">
                            <OneImageSection image={data.images[0]} />
                        </div>
                    </MotionSection>
                </div>
            )}

            {/* Solutions Sections */}
            {data?.solutions && (
                <div className="px-8 md:px-16 2xl:px-48 py-12 text-zinc-950 flex flex-col gap-12 z-10">
                    {data.solutions.map((solution, index) => (
                        <MotionSection key={index}>
                            <div className="flex flex-col gap-4 max-w-xl xl:max-w-2xl">
                                <h4 className="text-2xl font-semibold">{solution.title}</h4>
                                <p>{solution.body}</p>
                            </div>
                        </MotionSection>
                    ))}
                </div>
            )}

            {/* Project Sections (SimpleClosure-style) */}
            {data?.sections && (
                <div className="px-8 md:px-16 2xl:px-48 py-12 text-zinc-950 flex flex-col gap-16 z-10">
                    {data.sections.map((section, index) => (
                        <MotionSection key={index}>
                            <div className="flex flex-col gap-4 max-w-xl xl:max-w-2xl">
                                <h4 className="text-2xl font-semibold">{section.title}</h4>
                                {section.body.map((paragraph, pIndex) => (
                                    <p key={pIndex}>{paragraph}</p>
                                ))}
                                {section.metric && (
                                    <p className="text-zinc-500 italic">{section.metric}</p>
                                )}
                            </div>
                        </MotionSection>
                    ))}
                </div>
            )}

            {/* Images (second pair) */}
            {data?.images && data.images.length > 2 && (
                <div className="px-8 md:px-16 2xl:px-48 py-12 text-zinc-950 relative">
                    <div className="bg-[#D8D5FF] absolute top-[-10rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
                    <div className="bg-[#E0FEAF] absolute top-[15rem] md:top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
                    <MotionSection>
                        <div className="hidden lg:block">
                            <TwoImageSection image1={data.images[2]} image2={data.images[3]} />
                        </div>
                        <div className="lg:hidden">
                            <OneImageSection image={data.images[2]} />
                        </div>
                    </MotionSection>
                </div>
            )}
        </div>
    )
}
