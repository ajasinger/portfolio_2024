export default function ProjectPage({ params }: { params: { project: string } }) {
    return(
        <div className="bg-cream px-16 py-24 text-zinc-950 font-sans">
            <h2>{params.project}</h2>
        </div>
    )
  }