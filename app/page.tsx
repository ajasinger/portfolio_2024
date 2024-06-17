import Header from "@/components/Header";
import Work from "@/components/Work";
import AboutAccordion from "@/components/AboutAccordion";
import Text from "@/components/Text";

export default function Home() {
  return (
    <main className="font-sans">
      < Header />
      <div className="px-8 md:px-16 2xl:px-48 py-12 sm:py-24 bg-cream text-zinc-950 relative overflow-hidden flex justify-center">
        <div className="bg-[#E0FEAF] absolute top-[-15rem] right-[20rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[7rem] sm:w-[68.75rem] z-0"></div>
        <div className="bg-[#EDCEE2] absolute top-[25rem] right-[0rem] h-[31.25rem] w-[50rem] rounded-full blur-[7rem] z-0"></div>
          <div className="z-50 max-w-5xl">
            < AboutAccordion />
          </div>
      </div>
      < Work />
      < Text />
    </main>
  );
}
