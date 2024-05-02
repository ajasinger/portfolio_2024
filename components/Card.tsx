type CardType = {
    url: string;
    title: string;
    id: number;
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
                    <p className="text-zinc-950 p-10">
                        {props.card.title}
                    </p>
                </div>
            </div>

        </div>
    )
}