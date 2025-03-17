
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="bg-zinc-950 flex w-full items-center justify-between flex-wrap px-8 py-4 max-md:px-5">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold text-center text-neutral-50"
        >
          <img
            src="/lovable-uploads/64167ca6-a599-48e5-8632-53e5ae09ecd1.png"
            alt="The Relay Logo"
            className="w-8 h-8 object-contain"
          />
          <span>THE RELAY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-neutral-50 hover:bg-zinc-900">
            About
          </Button>
          <Button variant="ghost" className="text-neutral-50 hover:bg-zinc-900">
            Register an App
          </Button>
        </nav>
      </div>

      <div>
        <Button className="bg-white text-black hover:bg-gray-200">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
