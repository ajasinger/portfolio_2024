'use client';

import { useState } from "react";

type SolutionsType = {
    title: string;
    problem: string;
    solution: string;
};

interface Props {
    data: SolutionsType[];
}

export default function SolutionsCarousel({ data }: Props) {
    const [isOpen, setIsOpen] = useState(0);

    return(
        <div>
            {data?.map((text, index) => (
                <div key={index}>
                    {isOpen === index &&
                        <div className="flex flex-col gap-2 min-h-[500px]">
                            <h5 className="font-semibold uppercase text-left">{text.title}</h5>
                            <p><span className="font-semibold">Problem: </span>{text.problem}</p>
                            <p><span className="font-semibold">Solution: </span>{text.solution}</p>
                        </div>
                    }
                </div>
            ))}
            <div className="flex gap-4 justify-center pt-6">
                {data?.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setIsOpen(index)}
                        className={`h-3 w-3 rounded-full transition-colors ${index === isOpen ? "border border-zinc-950" : "bg-zinc-950"}`}
                    >
                    </button>
                ))}
            </div>
        </div>
    )
}