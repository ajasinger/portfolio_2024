import { techStack } from '@/lib/data';

export default function Header() {
  return (
    <header className="px-8 md:px-16 pt-8 pb-24 flex flex-col gap-8">
      <h1 className="text-[75px] sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[250px] font-semibold">Hi, I&apos;m Aja</h1>
      <h2 className="text-2xl md:text-3xl font-thin max-w-4xl leading-relaxed">
        a junior<span className="font-serif"> front-end engineer </span>building at the intersection of 
        <span className="font-serif"> technology </span>and<span className="font-serif"> creativity</span>.
      </h2>
      <ul className="flex gap-4 sm:gap-8 font-light md:text-lg flex-wrap">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="flex gap-4 sm:gap-8 text-nowrap"
          >
            <span>{tech.name}</span>
            {index !== techStack.length - 1 && <span>/</span>}
          </li>
        ))}
      </ul>
      
    </header>
  )
}
