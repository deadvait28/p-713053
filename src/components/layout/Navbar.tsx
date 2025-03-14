import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-zinc-950 flex w-full items-center gap-[40px_100px] text-sm font-medium leading-none justify-between flex-wrap px-8 py-4 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-4 text-neutral-50 justify-center flex-wrap my-auto max-md:max-w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold text-center tracking-[0.09px] w-[116px] my-auto"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/60c1642b5efc6b44ee75a0c2400c732e771d53ffc094d336417c68228165118d?placeholderIfAbsent=true"
            alt="The Relay Logo"
            className="aspect-[1] object-contain w-6 rounded self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">THE RELAY</span>
        </Link>

        <nav className="flex items-center gap-4">
          <button className="flex items-center gap-2 justify-center my-auto px-4 py-2 rounded-md hover:bg-zinc-900 transition-colors">
            <span>Getting started</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ef526fd568254052d718f5746621f0d6beb290276d768ff7b74771f0014370?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
            />
          </button>

          <button className="flex items-center gap-2 whitespace-nowrap justify-center my-auto px-4 py-2 rounded-md hover:bg-zinc-900 transition-colors">
            <span>Components</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78ef526fd568254052d718f5746621f0d6beb290276d768ff7b74771f0014370?placeholderIfAbsent=true"
              alt="Arrow"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
            />
          </button>

          <button className="gap-2 whitespace-nowrap my-auto px-4 py-2 rounded-md hover:bg-zinc-900 transition-colors">
            Documentation
          </button>
        </nav>
      </div>

      <div className="self-stretch flex gap-4 justify-center my-auto">
        <button className="self-stretch gap-2 text-neutral-50 px-4 py-2 rounded-md hover:bg-zinc-900 transition-colors">
          Sign in
        </button>
        <button className="self-stretch bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] gap-2 text-zinc-900 px-4 py-2 rounded-md hover:bg-neutral-100 transition-colors">
          Get started
        </button>
      </div>
    </header>
  );
}
