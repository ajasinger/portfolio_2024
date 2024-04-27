

export default function About() {
  return (
    <div className="my-8 px-40 py-20 bg-cream text-zinc-950 flex flex-col gap-8 relative overflow-hidden">
      <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#EDCEE2] absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
      <h3 className="text-4xl font-semibold z-10">About me</h3>
      <div className="flex flex-col gap-2 z-10">
        <p>If there&#39;s one thing you should know about me, it&#39;s that I really like making things. From software to businesses, I&#39;ve spent my career building.</p>
        <p>I&#39;ve built a a startup from zero to seven figures, and a brand featured on the cover of the New York Times Style section, but it wasn&#39;t until coding that I discovered what I really love building — software that improve people&#39;s lives.</p>
        <p>These past experiences have gifted me with:</p>
        <ol className="ml-8">
          <li>1. An understanding of how details fit into the larger picture — how the code I&#39;m writing serves the broader vision of a product (and business), and the importance of keeping both in your sight-line.</li>
          <li>2. Creative thinking — when faced with a new challenge, I focus not just on how it&#39;s been done before, but look for new ways it can be achieved.</li>
        </ol>
        <p>After writing my first few lines of code, I knew it was how I wanted to spend my days. The speed at which you can bring ideas to life and the satisfaction of bug fixing turned a week-long coding experiment into a new career.</p>
      </div>
    </div>
  )
}