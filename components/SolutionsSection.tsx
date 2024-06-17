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
        <div className="flex flex-col gap-4 max-w-xl 2xl:max-w-2xl">
            {data?.map((text, index) => (
                <div key={index}>
                    <p><span className="font-medium">{text.title}:{' '}</span>{text.body}</p>
                </div>
            ))}
        </div>
    )
}