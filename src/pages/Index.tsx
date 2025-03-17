
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="bg-zinc-950 flex flex-col items-center min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Features />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
