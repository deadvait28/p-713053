export function Footer() {
  return (
    <footer className="bg-zinc-950 w-full text-zinc-400 font-normal p-8 max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-4 text-sm leading-none flex-wrap pt-12 pb-24 border-[rgba(255,255,255,0.1)] border-b max-md:max-w-full">
        <div className="flex min-w-[104px] items-center gap-2 text-lg text-neutral-50 font-bold text-center leading-loose flex-1 shrink basis-[0%]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c1642b5efc6b44ee75a0c2400c732e771d53ffc094d336417c68228165118d?placeholderIfAbsent=true"
            alt="The Relay Logo"
            className="aspect-[1] object-contain w-6 rounded self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">Launch UI</span>
        </div>

        {/* Product Column */}
        <div className="flex min-w-[104px] flex-col items-stretch whitespace-nowrap justify-center flex-1 shrink basis-[0%]">
          <h3 className="text-neutral-50 font-semibold leading-5">Product</h3>
          <a href="#" className="mt-4 hover:text-neutral-50 transition-colors">
            Changelog
          </a>
          <a href="#" className="mt-4 hover:text-neutral-50 transition-colors">
            Documentation
          </a>
        </div>

        {/* Company Column */}
        <div className="flex min-w-[104px] flex-col items-stretch whitespace-nowrap justify-center flex-1 shrink basis-[0%]">
          <h3 className="text-neutral-50 font-semibold leading-5">Company</h3>
          <a href="#" className="mt-4 hover:text-neutral-50 transition-colors">
            About
          </a>
          <a href="#" className="mt-4 hover:text-neutral-50 transition-colors">
            Careers
          </a>
          <a href="#" className="mt-4 hover:text-neutral-50 transition-colors">
            Blog
          </a>
        </div>

        {/* Contact Columns */}
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="flex min-w-[104px] flex-col items-stretch whitespace-nowrap justify-center flex-1 shrink basis-[0%]"
          >
            <h3 className="text-neutral-50 font-semibold leading-5">Contact</h3>
            <a
              href="#"
              className="mt-4 hover:text-neutral-50 transition-colors"
            >
              Github
            </a>
            <a
              href="#"
              className="mt-4 hover:text-neutral-50 transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="mt-4 hover:text-neutral-50 transition-colors"
            >
              Twitter
            </a>
          </div>
        ))}
      </div>

      <div className="flex w-full gap-4 text-xs leading-none flex-wrap mt-4 max-md:max-w-full">
        <div className="flex-1 shrink basis-[0%] max-md:max-w-full">
          © 2024 Mikołaj Dobrucki. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-50 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-neutral-50 transition-colors">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
}
