export default function Text() {
    return(
        <div className="px-8 md:px-16 py-12 sm:py-24 bg-cream text-zinc-950 relative overflow-hidden">
            <div className="bg-[#E0FEAF] absolute z-10 top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#EDCEE2] absolute z-10 top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
            <div className="flex justify-center">
                <h2 className="text-center sm:text-left text-2xl md:text-3xl font-thin leading-relaxed z-50">
                    Engineering <span className="font-serif"> creative </span> solutions to <span className="font-serif"> meaningful </span> problems.
                </h2>
            </div>
        </div>
    )
}