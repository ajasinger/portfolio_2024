'use client';

import { useState } from "react";
import { aboutCards } from '@/lib/data';

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
              {/* {aboutCards1.map((card, index) => ( */}
                {/* <div key={index} className="flex flex-col gap-2 p-16 border rounded-lg border-zinc-500"> */}
                <div className="flex flex-col gap-2 p-16 border rounded-lg border-zinc-500 w-4/6">
                    {/* {card?.body?.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))}
                    <ol key={index} className="list-decimal space-y-2">
                      {card?.list?.map((text, index) => (
                        <li>{text}</li>
                      ))}
                    </ol> */}
                    <p className="font-semibold">I like making things, but I love learning even more.</p>
                    <p>I built a fashion startup from zero to seven figures and a brand featured on the cover of the New York Times Style section, but you can only innovate so much with women's workwear.</p>
                    <p>I got bored, so I looked for a new challenge to satisfy my desire to build — one where the potential to learn was uncapped. My husband, who works with startups, suggested software development.</p>
                    <p>Two days into my Codecademy course, <span className="italic">I was hooked.</span></p>
                    <p>Seven months later, a conversation about my career change led to my first freelance project — a web application for a company an entrepreneur friend planned to incubate. Despite the fact that I hadn't yet built a full-stack web app, he was confident:</p>
                    <p className="italic">“You're smart. You'll figure it out.”</p>
                    <p>And I did.</p>
                    <p>Today, after countless hours of debugging alongside professional developers, Stack Overflow rabbit holes, and late nights pouring over documentation, I can say that I'm a freelance full-stack developer who was paid to build an AI-powered web app with Next.js, Tailwind, and Supabase.</p>
                    <p>Now, I'm excited to join a company that values <span className="italic">learning and creativity</span>, where I can <span className="italic">collaborate</span> and make a <span className="italic">meaningful difference</span>.</p>
                </div>
                <div className="flex flex-col gap-6 p-16 border rounded-lg border-zinc-500 w-2/6">
                    <p>A little more about me:</p>
                    <ol className="list-decimal space-y-2 ml-8">
                      <li>I live in Brooklyn with my husband and toddler —  who knows that when I put my glasses on and turn on the big screen, “Mommy's working”.</li>
                      <li>I'm from Toronto, which means you'll likely hear me say “sorry,” but not “eh.”</li>
                      <li>I learned to ride a bike two years ago.</li>
                      <li>I think Rubirosa's vodka pizza is the best pizza in NY. (I will not be taking questions.)</li>
                      <li>When I'm not coding you'll find me trying to master a crow pose, snapping Polaroids, and seeking out fresh kimchi.</li>
                    </ol>

                </div>
              {/* ))} */}
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