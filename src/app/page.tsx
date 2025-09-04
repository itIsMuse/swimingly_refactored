// src/app/page.tsx
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Packages from "@/components/Packages";
import CTA from "@/components/CTA";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Classes />
        <Packages />
        <CTA />
      </main>
      {/* <Footer /> */}
    </>
  );
}
