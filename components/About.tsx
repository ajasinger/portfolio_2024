'use client';

import { useState } from "react";

export default function About() {
  const [section, setSection] = useState< boolean >(false);

  return (
    <div className="px-16 py-24 bg-cream text-zinc-950 relative overflow-hidden">
     {/* <div className="px-48 py-24 bg-cream text-zinc-950 relative overflow-hidden"> */}
      <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#EDCEE2] absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-10 z-10">
          <h3 className="text-4xl font-semibold">About me</h3>
            {section === false &&
              <div className="flex flex-col gap-2">
                <p>I like making things, but I love learning even more.</p>
                <p>I built a fashion startup from zero to seven figures featured on the cover of the New York Times Style section, but you can only innovate and iterate so much with women&#39;s workwear. </p>
                <p>I got bored, so I sought a new challenge that satisfied my desire to make — but in an area where the potential to learn was uncapped. My husband, who works with startups, suggested software development. 
                  I took a week-long Codeacademy class and I was immediately hooked. It was the most engaged I had been professionally in quite a while — and I never looked back.</p>
                <p>After seven months, an entrepreneur friend suggested I build a web application for a company he planned to incubate. I reminded him about my lack of experience and he responded with the most motivating, yet intimidating, words anyone has ever said to me:</p>
                <p>“You&#39;re smart. You&#39;ll figure it out.”</p>
              </div>
            }
            {section === true &&
              <div className="flex flex-col gap-2">
                <p>That was last summer. </p>
                <p>Today, after countless hours of debugging alongside professional developers, too many Stack Overflow rabbit holes to count, and late nights pouring over documentation, I can say that I&#39;m a freelance full-stack developer who was paid to build an AI-powered web app with Next.js, Tailwind, and Supabase.</p>
                <p>I&#39;m excited to join a company that values learning and creativity, where I can make a meaningful difference to a collaborative team.</p>
                <p>A little more about me…</p>
                <ol className="list-decimal ml-8">
                  <li>I live in Brooklyn with my triathlete husband and inquisitive toddler—who knows that when I put my anti-fatigue glasses on and turn on the big screen, “Mommy&#39;s working”.</li>
                  <li>I&#39;m from Toronto, which means you&#39;ll likely hear me say “sorry,” but not “eh.”</li>
                  {/* <li>I learned to ride a bike two years ago (a learning curve about as steep as learning to code).</li> */}
                  <li>I think Rubirosa&#39;s vodka pizza is the best pizza in NY. (I will not be taking questions.)</li>
                  <li>When I&#39;m not coding you&#39;ll find me trying to master a crow pose, snapping Polaroids, and seeking fresh kimchi.</li>
                </ol>
              </div>
            }
        </div>
        <button onClick={e => setSection(!section)} className="text-zinc-950 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 transition ease-in-out delay-50 hover:translate-x-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}