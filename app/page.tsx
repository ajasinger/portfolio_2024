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
      < AboutAccordion />
      {/* < About />
      < Carousel /> */}
      < Work />
      {/* < Text /> */}
      < Contact />
    </main>
  );
}
