
import { FeatureCard } from "../ui/FeatureCard";

export function Features() {
  return (
    <section className="bg-zinc-950 flex w-full flex-col items-stretch px-8 py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-neutral-50 text-5xl font-semibold leading-none text-center max-md:max-w-full max-md:text-[40px]">
        What is The Relay?
      </h2>

      <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        <FeatureCard
          title="Work with Your Apps Like Never Before"
          description="Stop juggling apps and endless notifications. With The Relay, chat directly with your favorite apps in one unified inbox. Ask questions, give instructions, and automate everyday tasks—all effortlessly from your phone"
          image="/lovable-uploads/7f9b1697-37c4-4d3f-addb-89bc189b7019.png"
          illustration="/golden-app-icons.png"
          iconBg="bg-zinc-900"
        />

        <div className="flex min-h-[656px] w-full items-center gap-4 flex-wrap mt-4 max-md:max-w-full">
          <FeatureCard
            title="Your Apps Are Ready to work for you"
            description="Just talk or type your requests, and watch as your apps work together intelligently to complete tasks. Say goodbye to manual management and hello to effortless orchestration."
            image="/lovable-uploads/7f9b1697-37c4-4d3f-addb-89bc189b7019.png"
            illustration="/golden-globe.png"
            iconBg="bg-zinc-900"
            fullWidth
          />

          <FeatureCard
            title="Easy Automation"
            description="Automate Tasks: Create repeatable tasks for your apps to do as you want and The Relay handles the rest. Simple Reports: Ask for quick summaries and get daily insights across all your apps."
            image="/lovable-uploads/7f9b1697-37c4-4d3f-addb-89bc189b7019.png"
            illustration="/golden-circles.png"
            iconBg="bg-zinc-900"
            compact
          />
        </div>
      </div>
    </section>
  );
}
