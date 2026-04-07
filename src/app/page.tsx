import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Transformation from "@/components/Transformation";
import Solution from "@/components/Solution";
import System from "@/components/System";
import Demo from "@/components/Demo";
import Process from "@/components/Process";
import Filter from "@/components/Filter";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Transformation />
        <Solution />
        <System />
        <Demo />
        <Process />
        <Filter />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
