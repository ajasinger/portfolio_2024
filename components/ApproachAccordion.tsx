'use client';

import { useState } from "react";
import { useAnimation, motion } from 'framer-motion';
import { ApproachType } from '@/lib/types';

interface Props {
    data: ApproachType[];
}

export default function ApproachAccordion({ data }: Props) {
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
                {/* section body */}
                <div className="flex flex-col gap-4">
                    <div className="flex divide-x-2 divide-transparent">
                        {data?.map((text, index) => (
                            <div key={index}>
                                {isOpen === index ? (
                                    <div
                                        className={`w-full bg-transparent text-zinc-950 text-lgflex flex-col gap-2 ${data?.length-1 > 1 && "md:min-h-[630px] lg:min-h-[440px] xl:min-h-[440px] 2xl:min-h-[415px]"}`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="flex flex-col gap-4 text-left md:p-12">
                                                {index === 0 ? (
                                                    <h5 className="font-semibold text-left text-2xl">Approach</h5>
                                                ) : (
                                                    <h5 className="font-semibold text-left text-2xl">{text.title}</h5>
                                                )}
                                                <div  className="flex flex-col gap-2">
                                                    {text?.body?.map((bodyText, index) => (
                                                        <div 
                                                            key={index} 
                                                            className="z-50 flex flex-col gap-2 max-w-xl 2xl:max-w-2xl"
                                                        >
                                                            {bodyText}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col gap-2 max-w-xl 2xl:max-w-2xl">
                                                    {text?.bodyList?.map((listText, index) => (
                                                        <ol key={index} className="list-disc ml-8">
                                                            <li>
                                                                <p><span className="font-semibold">{listText.title}</span>{' '}{listText.body}</p>
                                                            </li>
                                                        </ol>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ): (
                                    <button
                                        key={index}
                                        //className={`bg-zinc-950 text-cream hover:text-zinc-950  hover:backdrop-blur hover:bg-white/30 w-16 h-full flex justify-center items-center hover:border-x hover:border-zinc-950`}
                                        className={`bg-zinc-950 hover:bg-transparent text-cream hover:text-zinc-950  w-16 h-full justify-center items-center hover:border-zinc-950 hidden md:flex ${index !== data?.length-1 && "hover:border-r"} ${index !== 0 && "hover:border-l"}`}
                                        onClick={() => setIsOpen(index)}
                                    >
                                        <h5 className="font-semibold uppercase text-lg -rotate-90">{text.title}</h5>
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