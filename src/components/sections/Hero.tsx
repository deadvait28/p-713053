
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-zinc-950 flex w-full flex-col md:flex-row items-center justify-between gap-12 px-8 py-20 max-md:px-5">
      <div className="flex flex-col items-start text-left max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
          Make your apps do the work you hate
        </h1>
        <p className="text-zinc-400 text-xl mb-8">
          Bring all your work apps together. Chat, automate, and get work done right from your phone with The Relay
        </p>
        <Button className="bg-white text-black hover:bg-gray-200 px-6 py-6 h-auto text-base">
          Join Waitlist
        </Button>
      </div>

      <div className="flex-shrink-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56ef5a85bdac91f40be0c70f66658d00f42ae4339dd81f7a553214a80b011c3?placeholderIfAbsent=true"
          alt="The Relay App Interface"
          className="max-w-[320px] h-auto"
        />
      </div>
    </section>
  );
}
