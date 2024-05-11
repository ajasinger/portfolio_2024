'use client';

import { useState } from "react";
import { aboutCards } from '@/lib/data';

export default function AboutAccordion() {
    const [isOpen, setIsOpen] = useState(0);

    return(
        <div id="about" className="bg-cream flex">
            <div className="border border-zinc-950 z-50 h-full">
                <div className="flex flex-col gap-4">
                    <div className="flex divide-x-2 divide-transparent">
                        {aboutCards?.map((text, index) => (
                            <div>
                                {isOpen === index ? (
                                    <button
                                        key={index}
                                        className="w-full bg-transparent text-zinc-950 text-lgflex flex-col gap-2 min-h-[550px]"
                                        onClick={() => setIsOpen(index)}
                                    >
                                        <div className="flex flex-col gap-8 text-left p-12">
                                            {index === 0 ? (
                                                <h5 className="font-semibold text-2xl md:text-4xl uppercase text-left">About Me</h5>
                                            ) : (
                                                <h5 className="font-semibold text-2xl md:text-4xl uppercase text-left">{text.title}</h5>
                                            )}
                                            {text?.body &&
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
                                            }
                                            {text?.list &&
                                                <div className="flex flex-col gap-2">
                                                    <ol key={index} className="list-decimal flex flex-col gap-2  ml-4">
                                                        {text?.list?.map((listText, index) => (
                                                            <li>
                                                                <p>{listText}</p>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            }
                                        </div>
                                    </button>
                                ): (
                                    <button
                                        key={index}
                                        //className={`bg-zinc-950 text-cream hover:text-zinc-950  hover:backdrop-blur hover:bg-white/30 w-16 h-full flex justify-center items-center hover:border-x hover:border-zinc-950`}
                                        className={`bg-zinc-950 hover:bg-transparent text-cream hover:text-zinc-950  w-16 h-full flex justify-center items-center hover:border-zinc-950 ${index !== aboutCards?.length-1 && "hover:border-r"} ${index !== 0 && "hover:border-l"}`}
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