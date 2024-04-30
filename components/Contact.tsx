import Link from 'next/link'

export default function Contact() {
    return(
        <div className="px-16 py-24 bg-cream text-zinc-950 relative overflow-hidden">
            <div className="bg-[#E0FEAF] absolute z-10 top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#EDCEE2] absolute z-10 top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
            <div className="flex gap-48">
                <h3 className="text-4xl font-semibold z-50">Contact me</h3>
                <Link 
                    href="/dashboard"
                    className="font-semibold z-50 px-6 py-3 bg-[#C4BFFF] border border-zinc-950 [#C4BFFF] rounded-full hover:bg-transparent text-zinc-950"
                >
                    Write to me
                </Link>
            </div>
        </div>
    )
}