'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";
import { aboutCards } from "@/lib/data";

export default function Carousel() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-43%"]);

    return(
        <div ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <h3 className="absolute z-50 text-4xl text-left font-medium text-cream px-16 top-20">About me</h3>
                {/* <motion.div style={{ x }} className="flex gap-4">
                    {aboutCards.map((card, index) => {
                        return <Card card={card} index={index} />;
                    })}
                </motion.div> */}
            </div>
        </div>
    )
}