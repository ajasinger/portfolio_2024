'use client';

import { useState } from "react";

type LearningsType = {
    title?: string;
    body: string;
    learnings?: string;
};

interface Props {
    data: LearningsType[];
}

export default function LearningsAccordion({ data }: Props) {
    const [isOpen, setIsOpen] = useState(0);

    return(
        <div className="flex pb-24">
            <div className="border border-zinc-950 z-50 h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex divide-x-2 divide-transparent">
                        {data?.map((text, index) => (
                            <div>
                                {isOpen === index ? (
                                    <button
                                        key={index}
                                        className={`w-full bg-transparent text-zinc-950 text-lgflex flex-col gap-2 ${data?.length-1 > 1 && "min-h-[425px]"}`}
                                        onClick={() => setIsOpen(index)}
                                    >
                                        <div className="flex flex-col gap-4 text-left p-16">
                                            {index === 0 ? (
                                                <h5 className="font-semibold uppercase text-left">Learnings</h5>
                                            ) : (
                                                <h5 className="font-semibold uppercase text-left">{text.title}</h5>
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
                                            {/* <div  className="flex flex-col gap-2">
                                                {text?.body?.map((bodyText, index) => (
                                                    <div 
                                                        key={index} 
                                                        className="z-50 flex flex-col gap-2"
                                                    >
                                                        {bodyText}
                                                    </div>
                                                ))}
                                            </div> */}
                                        </div>
                                    </button>
                                ): (
                                    <button
                                        key={index}
                                        //className={`bg-zinc-950 text-cream hover:text-zinc-950  hover:backdrop-blur hover:bg-white/30 w-16 h-full flex justify-center items-center hover:border-x hover:border-zinc-950`}
                                        className={`bg-zinc-950 hover:bg-transparent text-cream hover:text-zinc-950  w-16 h-full flex justify-center items-center hover:border-zinc-950 ${index !== data?.length-1 && "hover:border-r"} ${index !== 0 && "hover:border-l"}`}
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