import Link from "next/link"

export default function Footer() {
    return(
        <footer className="px-16 py-24 flex justify-between gap-16 font-sans">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl max-w-4xl font-semibold">AJA SINGER</h2>
                <Link href="/#work" className="text-xl hover:underline underline-offset-8 decoration-1">WORK</Link>
                <Link href="https://www.linkedin.com/in/ajasinger/" className="text-xl hover:underline underline-offset-8 decoration-1">LINKEDIN</Link>
            </div>
            <div className="flex flex-col gap-8">
                <Link 
                    href="/contact"
                    className="font-semibold px-6 py-3 bg-cream border border-bg-stone-50 rounded-full hover:bg-zinc-950 text-zinc-950 hover:text-cream"
                >
                    CONTACT ME
                </Link>
                <p>info@ajasinger.com</p>
            </div>

        </footer>
    )
}