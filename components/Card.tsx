type CardType = {
    name: string;
    body: string[];
    list?: string[];
};


export default function Card( props: {card: CardType, index: number} ) {
    return(
        <div>
            <div
                key={props.index}
                className="group relative h-[450px] w-[750px] overflow-hidden bg-cream"
            >
                <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
                <div className="bg-[#EDCEE2] absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
                <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                    <div className="text-zinc-950 p-16 flex flex-col gap-2">
                        {props?.card?.body?.map((text) => (
                            <div key={props?.index}>{text}</div>
                        ))}
                        <ol className="list-decimal space-y-2 ml-8">
                            {props?.card?.list?.map((text) => (
                                <li key={props?.index}>{text}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}