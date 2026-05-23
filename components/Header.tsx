'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="px-8 md:px-16 2xl:px-48 pt-4 md:pt-8 pb-12 md:pb-24 flex flex-col gap-8">
      <h1 className="text-[75px] sm:text-[100px] md:text-[125px] lg:text-[175px] xl:text-[225px] font-semibold">Hi, I&apos;m Aja</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-light max-w-4xl leading-relaxed">
          Full-stack engineer. Previously built and scaled a company to seven figures.
        </h2>
      </motion.div>
    </header>
  )
}
