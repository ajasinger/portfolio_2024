import Carousel from "./Carousel";


export default function CarouselContainer() {
    return (
        <div id="about" className="px-16 py-24 bg-cream text-zinc-950 relative overflow-hidden">
            <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#EDCEE2] absolute top-[15rem] right-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem]"></div>
            <Carousel />
        </div>
    );
  };