import About from "@/components/About";
import Header from "@/components/Header";
import Work from "@/components/Work";
import Text from "@/components/Text";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="font-sans">
      < Header />
      < About />
      < Work />
      {/* < Text /> */}
      < Contact />
    </main>
  );
}
