
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-zinc-950 flex flex-col w-full">
      <div className="py-32 flex flex-col items-center text-center px-8 max-w-3xl mx-auto">
        <img
          src="/lovable-uploads/64167ca6-a599-48e5-8632-53e5ae09ecd1.png"
          alt="The Relay Logo"
          className="w-16 h-16 mb-8"
        />
        <h2 className="text-neutral-50 text-5xl font-semibold leading-tight mb-8">
          Gone are the days of task droning
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mb-8">
          Work shouldn't be about endless emails and notifications. With The
          Relay, anyone can easily chat with and coordinate tasks across
          apps, becoming a smart director of their digital world. Take
          control, simplify your day, and reclaim your freedom.
        </p>
      </div>

      <div className="bg-zinc-900 py-32 px-8 flex flex-col items-center text-center">
        <h2 className="text-neutral-50 text-5xl font-semibold leading-tight mb-8">
          Just say the word and it will be done
        </h2>
        <p className="text-zinc-400 text-xl max-w-2xl mb-12">
          The Relay is powered by MCP (Model Context Protocol), 
          an open-source, secure and standard connector between apps that will 
          allow you to command them with The Relay's toolkit agent called Spark.
        </p>
        <Button className="bg-white text-black hover:bg-gray-200 px-6 py-6 h-auto text-base">
          Join Waitlist
        </Button>
      </div>
    </section>
  );
}
