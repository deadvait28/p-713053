
import { FeatureCard } from "../ui/FeatureCard";

export function Features() {
  return (
    <section className="bg-zinc-950 flex w-full flex-col items-center px-8 py-24 max-md:px-5">
      <h2 className="text-neutral-50 text-4xl font-semibold leading-none text-center mb-16">
        What is The Relay?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <FeatureCard
          title="A single hub to get shit done"
          description="Stop juggling lots of services. Chat with all your apps in one place. Ask questions, give instructions, and automate everyday tasks—all within easy to use panels."
          icon="hub"
          logoIcons={[
            "github",
            "google",
            "microsoft",
            "slack"
          ]}
        />

        <FeatureCard
          title="Your apps are ready to work for you"
          description="Just talk or type your requests, and watch as your apps work together intelligently to complete tasks. Say goodbye to manual management and hello to effortless orchestration."
          icon="apps"
          showcaseImages={[
            "/lovable-uploads/64167ca6-a599-48e5-8632-53e5ae09ecd1.png",
          ]}
        />

        <FeatureCard
          title="Easy automation"
          description="Automate Tasks: Create repeatable tasks for your apps to do as you want and The Relay handles the rest. Get daily insights across all your apps."
          icon="automation"
        />

        <FeatureCard
          title="Your personal assistant"
          description="The Relay learns your preferences and habits to provide personalized assistance, making your digital life smoother and more efficient."
          icon="assistant"
        />
      </div>
    </section>
  );
}
