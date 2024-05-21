'use client';

type SolutionsType = {
    title: string;
    body: string;
};

interface Props {
    data: SolutionsType[];
}

export default function SolutionsSection({ data }: Props) {

    return(
        <div className="flex flex-col gap-6 lg:px-16">
            {data?.map((text, index) => (
                <div key={index}>
                    <p><span className="font-semibold">{text.title}:{' '}</span>{text.body}</p>
                </div>
            ))}
        </div>
    )
}