import { techStack } from '@/lib/data';

export default function Header() {
  return (
    <header className="px-16 pt-8 pb-16 flex flex-col gap-8">
      <h1 className="text-[250px] font-semibold">Hi, I'm Aja</h1>
      <h2 className="text-3xl font-thin max-w-4xl leading-relaxed">
        a junior<span className="font-serif"> front-end engineer </span>building at the intersection of 
        <span className="font-serif"> technology </span>and<span className="font-serif"> creativity</span>.
      </h2>
      <ul className="flex gap-8 font-light text-lg">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="flex gap-8"
          >
            {tech.name}<span className={`${index === techStack.length-1 && "invisible"}`}>/</span>
          </li>
        ))}
      </ul>
      
    </header>
  )
}
