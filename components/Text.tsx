'use client';

import { useEffect } from "react";
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Text() {
    const controls = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: true,  
        threshold: 0.1,  
    });

    useEffect(() => {
        if (inView) {
        controls.start('visible');
        }
    }, [controls, inView]);

    return(
        <div className="px-8 md:px-16 py-12 sm:py-24 bg-cream text-zinc-950 relative overflow-hidden">
            <div className="bg-[#E0FEAF] absolute z-0 top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#EDCEE2] absolute z-0 top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1 }}
            >
            <div className="flex justify-center">
                <h2 className="text-center sm:text-left text-2xl md:text-3xl font-thin leading-relaxed z-50">
                    Engineering <span className="font-serif"> creative </span> solutions to <span className="font-serif"> meaningful </span> problems.
                </h2>
            </div>
            </motion.div>
        </div>
    )
}