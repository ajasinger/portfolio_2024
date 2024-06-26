'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import { aboutCards } from '@/lib/data';
import MotionSection from '@/components/MotionSection';

export default function AboutAccordion() {
    const [isOpen, setIsOpen] = useState(0);

    return(
        <MotionSection>
        <div id="about" className="flex">
            <div className="md:border border-zinc-950 z-50 h-full w-full">
                {/* mobile header buttons */}
                <div className="flex flex-wrap gap-4 pb-8 md:hidden">
                    {aboutCards?.map((text, index) => (
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
                {/* section body */}
                <div className="flex flex-col gap-4">
                    <div className="flex divide-x-2 divide-transparent">
                        {aboutCards?.map((text, index) => (
                            <div key={index}>
                                {isOpen === index ? (
                                    <div
                                        className="w-full bg-transparent text-zinc-950 text-lgflex flex-col gap-2 md:min-h-[650px] lg:min-h-[585px] 2xl:min-h-[535px]"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="flex flex-col gap-8 text-left md:p-12">
                                            
                                                {index === 0 ? (
                                                    <h3 className="hidden md:block font-semibold text-2xl md:text-4xl text-left">About me</h3>
                                                ) : (
                                                    <h3 className="hidden md:block font-semibold text-2xl md:text-4xl text-left">{text.title}</h3>
                                                )}
                                                {text?.body &&
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
                                                }
                                                {text?.list &&
                                                    <div className="flex flex-col gap-2 max-w-xl 2xl:max-w-2xl">
                                                        <ol className="list-decimal flex flex-col gap-2  ml-6 sm:ml-4">
                                                            {text?.list?.map((listText, index) => (
                                                                <li key={index}>
                                                                    <p>{listText}</p>
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                }
                                                
                                            </div>
                                            {/* {index !== 0 &&
                                                    <button className="text-lg flex gap-2 items-center group" onClick={() => setIsOpen(index -1)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 transition ease-in-out delay-50 lg:group-hover:-translate-x-2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                                        </svg>   
                                                    </button>
                                                }
                                                {index === 0 &&
                                                    <button className="text-lg flex gap-2 items-center group" onClick={() => setIsOpen(index +1)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 transition ease-in-out delay-50 lg:group-hover:translate-x-2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                                        </svg>
                                                    </button>
                                                } */}
                                        </motion.div>
                                    </div>
                                ): (
                                    <button
                                        key={index}
                                        className={`bg-zinc-950 hover:bg-transparent text-cream hover:text-zinc-950  w-16 h-full hidden md:flex justify-center items-center hover:border-zinc-950 ${index !== aboutCards?.length-1 && "hover:border-r"} ${index !== 0 && "hover:border-l"}`}
                                        onClick={() => setIsOpen(index)}
                                    >
                                        <h3 className="font-semibold uppercase text-lg -rotate-90 text-nowrap">{text.title}</h3>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </MotionSection>
    )
}