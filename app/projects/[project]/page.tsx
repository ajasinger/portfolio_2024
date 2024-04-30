export default function ProjectPage({ params }: { params: { project: string } }) {
    return(
        <div>
            <h2>{params.project}</h2>
        </div>
    )
  }