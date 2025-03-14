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
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/cd7886a118eae06474401ea657a06a7201e8d3b689c8299709ab5e1819bd1721?placeholderIfAbsent=true"
          illustration="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3a90122c567e6d1903217f83a19f444b7fdddbe15d294312191fff08ca6365?placeholderIfAbsent=true"
        />

        <div className="flex min-h-[656px] w-full items-center gap-4 flex-wrap mt-4 max-md:max-w-full">
          <FeatureCard
            title="Your Apps Are Ready to work for you"
            description="Just talk or type your requests, and watch as your apps work together intelligently to complete tasks. Say goodbye to manual management and hello to effortless orchestration."
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/c70bc833ed30cc82c484225091c072ca2f9df9a618d014fcc8843192a3d6b97e?placeholderIfAbsent=true"
            fullWidth
          />

          <FeatureCard
            title="Easy Automation"
            description="Automate Tasks: Create repeatable tasks for your apps to do as you want and The Relay handles the rest. Simple Reports: Ask for quick summaries and get daily insights across all your apps."
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/e8cdc5d01713f078e450477f3bd2788dd584c544861af71fe4def99bc64c970b?placeholderIfAbsent=true"
            compact
          />
        </div>
      </div>
    </section>
  );
}
