import Link from "next/link"

export default function Footer() {
    return(
        <footer className="px-16 py-24 flex justify-between gap-16 font-sans">
            <div className="flex flex-col gap-8 font-semibold">
                <h2 className="text-3xl max-w-4xl leading-relaxed">AJA SINGER</h2>
                <Link href="/work" className="text-xl">WORK</Link>
                <Link href="/work" className="text-xl">LINKEDIN</Link>
            </div>
            <div className="flex flex-col gap-8">
                <Link href="/work">CONTACT ME</Link>
                <p>info@ajasinger.com</p>
            </div>

        </footer>
    )
}