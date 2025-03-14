
export function CTA() {
  return (
    <section className="bg-zinc-950 relative flex min-h-[306px] w-full flex-col overflow-hidden items-stretch justify-center px-8 max-md:max-w-full max-md:px-5">
      <div className="z-0 flex w-full flex-col items-stretch flex-1 pt-32 pb-48 max-md:max-w-full max-md:py-[100px]">
        <h2 className="text-neutral-50 text-center text-5xl font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
          Just say the word and it will be done
        </h2>

        <div className="self-center flex gap-4 mt-12 max-md:mt-10 flex-wrap">
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

      <div className="absolute z-0 flex min-h-[280px] w-full h-[280px] bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
    </section>
  );
}
