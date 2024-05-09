import About from "@/components/About";
import Header from "@/components/Header";
import Work from "@/components/Work";
import Text from "@/components/Text";
import Contact from "@/components/Contact";
import Carousel from "@/components/Carousel";
import AboutAccordion from "@/components/AboutAccordion";

export default function Home() {
  return (
    <main className="font-sans">
      < Header />
      <div className="px-16 py-24 bg-cream text-zinc-950 relative overflow-hidden">
        <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
        <div className="bg-[#EDCEE2] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
          <div className="z-50">
            < AboutAccordion />
          </div>
      </div>
      {/* < About />
      < Carousel /> */}
      < Work />
      {/* < Text /> */}
      < Contact />
    </main>
  );
}
