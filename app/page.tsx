import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Saturn from "@/components/sections/Saturn";
import InterIIT from "@/components/sections/InterIIT";
import Past from "@/components/sections/Past";
import Trxnd from "@/components/sections/Trxnd";
import Philosophy from "@/components/sections/Philosophy";
import Thoughts from "@/components/sections/Thoughts";
import Applications from "@/components/sections/Applications";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <Intro />
      <Saturn />
      <InterIIT />
      <Past />
      <Trxnd />
      <Philosophy />
      <Thoughts />
      <Applications />
      <Contact />
    </main>
  );
}
