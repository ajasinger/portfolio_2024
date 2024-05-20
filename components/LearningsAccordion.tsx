'use client';

import { useState } from "react";

type LearningsType = {
    title?: string;
    body?: string;
    learnings?: string;
    bodyList?: { title: string; body: string }[];
};

interface Props {
    data: LearningsType[];
}

export default function LearningsAccordion({ data }: Props) {
    const [isOpen, setIsOpen] = useState(0);

    return(
        <div className="flex">
            <div className="md:border border-zinc-950 z-50 h-full">
                {/* mobile header buttons */}
                { data.length -1 >= 1 &&
                    <div className="flex flex-wrap gap-4 pb-8 md:hidden">
                        {data?.map((text, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => setIsOpen(index)}
                                    className={`${isOpen === index ? "bg-zinc-950 text-cream" : "text-zinc-950"} text-sm px-4 py-3 border border-zinc-950 rounded-full hover:bg-zinc-950 hover:text-cream uppercase text-nowrap`}
                                >
                                    {text.title}
                                </button>
                            </div>
                        ))}
                    </div>
                }
                <div className="flex flex-col gap-4">
                    <div className="flex divide-x-2 divide-transparent">
                        {data?.map((text, index) => (
                            <div key={index}>
                                {isOpen === index ? (
                                    <button
                                        className={`w-full bg-transparent text-zinc-950 text-lgflex flex-col gap-2 ${data?.length-1 > 1 && "sm:min-h-[300px] md:min-h-[625px] lg:min-h-[425px] xl:min-h-[375px] 2xl:min-h-[350px]"}`}
                                        onClick={() => setIsOpen(index)}
                                    >
                                        <div className="flex flex-col gap-4 text-left md:p-16">
                                            {index === 0 ? (
                                                <h5 className="font-semibold text-left font-serif text-xl">Learnings</h5>
                                            ) : (
                                                <h5 className="font-semibold text-left font-serif text-xl">{text.title}</h5>
                                            )}
                                            <div>
                                                {text.body}
                                            </div>
                                            <div>
                                                <p>
                                                    {index !== 0 && <span className="font-semibold">Learnings:{' '}</span>}
                                                    {text.learnings}
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                {text?.bodyList?.map((listText, index) => (
                                                    <ol key={index} className="list-disc ml-8">
                                                        <li>
                                                            <p><span className="font-semibold">{listText.title}</span>{' '}{listText.body}</p>
                                                        </li>
                                                    </ol>
                                                ))}
                                            </div>
                                        </div>
                                    </button>
                                ): (
                                    <button
                                        key={index}
                                        //className={`bg-zinc-950 text-cream hover:text-zinc-950  hover:backdrop-blur hover:bg-white/30 w-16 h-full flex justify-center items-center hover:border-x hover:border-zinc-950`}
                                        className={`bg-zinc-950 hover:bg-transparent text-cream hover:text-zinc-950  w-16 h-full hidden md:flex justify-center items-center hover:border-zinc-950 ${index !== data?.length-1 && "hover:border-r"} ${index !== 0 && "hover:border-l"}`}
                                        onClick={() => setIsOpen(index)}
                                    >
                                        <h5 className="font-semibold uppercase text-lg -rotate-90 text-nowrap">{text.title}</h5>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}