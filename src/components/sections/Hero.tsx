
import { Download, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-zinc-950 flex w-full items-center gap-[40px_96px] overflow-hidden font-semibold justify-center flex-wrap px-8 py-20 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="border flex items-center gap-2 text-xs leading-none justify-center w-fit px-2.5 py-1 rounded-full border-[rgba(255,255,255,0.2)] border-solid">
          <span className="text-zinc-400 self-stretch my-auto">
            New version of Launch UI is out!
          </span>
          <div className="self-stretch flex items-center gap-1 text-neutral-50 my-auto">
            <span className="self-stretch my-auto cursor-pointer hover:underline">
              Read more
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1346fe48f27641819aaa3917cff116cc595dd4ee7e4334dc6eaee695407ccb8?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>

        <h1 className="text-7xl leading-[72px] text-neutral-50 mt-12 max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:mt-10">
          Make your apps work for you effortlessly
        </h1>

        <p className="text-zinc-400 text-xl font-medium leading-7 mt-12 max-md:max-w-full max-md:mt-10">
          Bring all your apps together. Chat, automate, and simplify tasks right
          from your phone with The Relay
        </p>

        <div className="flex gap-4 mt-12 max-md:mt-10 flex-wrap">
          <a 
            href="#" 
            className="h-[40px] transition-opacity hover:opacity-90"
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="h-full"
            />
          </a>
          <a 
            href="#" 
            className="h-[40px] transition-opacity hover:opacity-90"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-full"
            />
          </a>
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e56ef5a85bdac91f40be0c70f66658d00f42ae4339dd81f7a553214a80b011c3?placeholderIfAbsent=true"
        alt="App Preview"
        className="aspect-[0.49] object-contain w-[391px] self-stretch min-w-60 my-auto"
      />
    </section>
  );
}
