'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const cards = [
    {
        url: 'test 1',
        title: "I like making things, but I love learning even more.I built a fashion startup from zero to seven figures featured on the cover of the New York Times Style section, but you can only innovate and iterate so much with women's workwear.I got bored, so I sought a new challenge that satisfied my desire to make—but in an area where the potential to learn was uncapped. My husband, who works with startups, suggested software development. I took a week-long Codeacademy class and I was immediately hooked. It was the most engaged I had been professionally in quite a while—and I never looked back.",
        id: 1
      },
      {
        url: 'test 2',
        title: 'test 2',
        id: 2
      },
      {
        url: 'test 3',
        title: 'test 3',
        id: 3
      },
      {
        url: 'test 4',
        title: 'test 4',
        id: 4
      },
]

export default function Carousel() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-57.5%"]);

    return(
        <div ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <h3 className="absolute z-50 text-4xl text-left font-medium text-cream px-16 top-20">About me</h3>
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card, index) => {
                        return <Card card={card} index={index} />;
                    })}
                </motion.div>
            </div>
        </div>
    )
}