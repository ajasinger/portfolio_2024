export default function About() {
  return (
    <div className="px-48 py-24 bg-cream text-zinc-950 relative overflow-hidden">
      <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#EDCEE2] absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
      <div className="flex justify-between items-center gap-20">
        <div className="flex flex-col gap-10 z-10">
          <h3 className="text-4xl font-semibold">About me</h3>
          <div className="flex flex-col gap-2">
            <p>I like making things, but I love learning even more.</p>
            <p>I built a fashion startup from zero to seven figures featured on the cover of the New York Times Style section, but you can only innovate and iterate so much with women&#39;s workwear. </p>
            <p>I got bored, so I sought a new challenge that satisfied my desire to make — but in an area where the potential to learn was uncapped. My husband, who works with startups, suggested software development. 
              I took a week-long Codeacademy class and I was immediately hooked. It was the most engaged I had been professionally in quite a while — and I never looked back.</p>
            <p>After seven months, an entrepreneur friend suggested I build a web application for a company he planned to incubate. I reminded him about my lack of experience and he responded with the most motivating, yet intimidating, words anyone has ever said to me:</p>
            <p>“You&#39;re smart. You&#39;ll figure it out.”</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20 z-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" stroke="currentColor"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg> */}
      </div>
    </div>
  )
}