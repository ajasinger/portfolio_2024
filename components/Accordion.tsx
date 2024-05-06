'use client';

import { useState } from "react";

type ApproachType = {
    title?: string;
    body: string[];
    bodyList?: { title: string; body: string }[];
};

interface Props {
    data: ApproachType[];
}

export default function Accordion({ data }: Props) {
    const [isOpen, setIsOpen] = useState(0);

    return(
        <div className="flex">
            <div className="border border-zinc-950 z-50 p-16 h-[525px]">
                <div className="flex flex-col gap-4">
                    {isOpen === 0 && <h4 className="font-serif text-lg font-semibold z-50">Approach</h4>}
                    <div>
                    {data?.map((text, index) => (
                        <button
                            key={index}
                            className="w-full bg-transparent text-zinc-950 text-lgflex flex-col gap-2"
                            onClick={() => setIsOpen(index)}
                        >
                            {isOpen === index &&
                                <div className="flex flex-col gap-2 text-left">
                                    <h5 className="font-semibold uppercase text-left">{text.title}</h5>
                                    <div  className="flex flex-col gap-2">
                                        {text?.body?.map((bodyText, index) => (
                                            <div 
                                                key={index} 
                                                className="z-50 flex flex-col gap-2"
                                            >
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
                            }
                        </button>
                    ))}
                    </div>
                </div>
            </div>
            <div className="z-50 flex">
                {data?.map((text, index) => (
                    <div>
                        { isOpen !== index &&
                            <button
                                key={index}
                                className="border-r bg-zinc-950 hover:bg-transparent text-cream hover:text-zinc-950 hover:border-zinc-950 w-16 h-full"
                                onClick={() => setIsOpen(index)}
                            >
                                <h5 className="font-semibold uppercase text-lg -rotate-90">{text.title}</h5>
                            </button>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}