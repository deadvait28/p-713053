
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
            <span>Follow</span>
          </button>

          <button className="flex items-center gap-2 whitespace-nowrap justify-center my-auto px-4 py-2 rounded-md hover:bg-zinc-900 transition-colors">
            <span>About</span>
          </button>
        </nav>
      </div>

      <div className="self-stretch flex gap-4 justify-center my-auto items-center flex-wrap">
        <a 
          href="#" 
          className="h-[28px] transition-opacity hover:opacity-90"
        >
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
            alt="Download on the App Store" 
            className="h-full"
          />
        </a>
        <a 
          href="#" 
          className="h-[28px] transition-opacity hover:opacity-90"
        >
          <img 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
            alt="Get it on Google Play" 
            className="h-full"
          />
        </a>
      </div>
    </header>
  );
}
