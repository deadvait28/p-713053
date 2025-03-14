import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="bg-zinc-950 flex flex-col items-center min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center w-full max-w-[1312px]">
        <Hero />
        <Features />
        <CTA />
        <Pricing />
        <section className="w-full text-center pt-32 pb-20 px-8 max-md:pt-[100px] max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0285c4d7bce7e6ee52403e9f11d82ac20bc9816dad18853531baa577bf6dea6c?placeholderIfAbsent=true"
            alt="Feature radar"
            className="aspect-[2] object-contain w-full max-md:max-w-full"
          />
          <div className="flex w-full flex-col items-stretch mt-24 max-md:max-w-full max-md:mt-10">
            <h2 className="text-7xl font-semibold leading-none bg-clip-text text-neutral-50 max-md:max-w-full max-md:text-[40px]">
              Gone are the days of task droning
            </h2>
            <p className="text-zinc-400 text-xl font-medium leading-7 self-center w-[580px] mt-12 max-md:max-w-full max-md:mt-10">
              Work shouldn't be about endless emails and notifications. With The
              Relay, anyone can easily chat with and coordinate tasks across
              apps, becoming a smart director of their digital world. Take
              control, simplify your day, and reclaim your freedom.
            </p>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
