export function CTA() {
  return (
    <section className="bg-zinc-950 relative flex min-h-[306px] w-full flex-col overflow-hidden items-stretch justify-center px-8 max-md:max-w-full max-md:px-5">
      <div className="z-0 flex w-full flex-col items-stretch flex-1 pt-32 pb-48 max-md:max-w-full max-md:py-[100px]">
        <h2 className="text-neutral-50 text-center text-5xl font-semibold leading-none max-md:max-w-full max-md:text-[40px]">
          Just say the word and it will be done
        </h2>

        <div className="self-center flex gap-4 text-sm font-medium whitespace-nowrap leading-none mt-12 max-md:mt-10">
          <button className="self-stretch bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] gap-2 text-zinc-900 px-4 py-2 rounded-md hover:bg-neutral-100 transition-colors">
            Download
          </button>
          <button className="self-stretch gap-2 text-neutral-50 px-4 py-2 rounded-md hover:bg-zinc-900 transition-colors">
            Github
          </button>
        </div>
      </div>

      <div className="absolute z-0 flex min-h-[280px] w-full h-[280px] bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
    </section>
  );
}
