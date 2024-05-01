'use client';

import { useState } from "react";
import { about } from '@/lib/data';

export default function About() {

  return (
    <div id="about" className="px-16 py-24 bg-cream text-zinc-950 relative overflow-hidden">
     {/* <div className="px-48 py-24 bg-cream text-zinc-950 relative overflow-hidden"> */}
      <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#EDCEE2] absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-10 z-10">
          <h3 className="text-4xl font-semibold">About me</h3>
            <div className="flex gap-8">
              {about.map((card, index) => (
                <div key={index} className="flex flex-col gap-2 p-16 border border-zinc-500 w-2/5">
                  <div className="flex flex-col gap-2">
                    {card?.body?.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                    <ol key={index} className="list-decimal space-y-2">
                      {card?.list?.map((text, index) => (
                        <li>{text}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
        </div>
        {/* <button onClick={e => setSection(!section)} className="text-zinc-950 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 transition ease-in-out delay-50 hover:translate-x-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button> */}
      </div>
    </div>
  )
}