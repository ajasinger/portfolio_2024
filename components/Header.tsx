'use client';

import { techStack } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="px-8 md:px-16 2xl:px-48 pt-4 md:pt-8 pb-12 md:pb-24 flex flex-col gap-8">
      <h1 className="text-[75px] sm:text-[100px] md:text-[125px] lg:text-[200px] xl:text-[250px] font-semibold">Hi, I&apos;m Aja</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-thin max-w-4xl leading-relaxed">
          a<span className="font-serif"> full-stack engineer </span> with a background in
          <span className="font-serif"> design</span>.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ul className="flex gap-4 font-light md:text-lg flex-wrap">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="flex gap-4 text-nowrap"
            >
              <span>{tech.name}</span>
              {index !== techStack.length - 1 && <span>/</span>}
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  )
}
