import { useState } from "react";
import { PricingCard } from "../ui/PricingCard";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "For those that need to try out what The Relay offers",
      price: "0",
      period: "free",
      subtext: "for everyone",
      features: ["Connect up to 3 apps", "Get 3 automations", "Free forever"],
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60c1642b5efc6b44ee75a0c2400c732e771d53ffc094d336417c68228165118d?placeholderIfAbsent=true",
      buttonText: "Download",
      buttonVariant: "secondary",
    },
    {
      name: "Pro",
      description:
        "For those that need to get the most out of their work, the unrelentless power users",
      price: isYearly ? "9.99" : "11.99",
      period: "month",
      subtext: isYearly ? "billed yearly" : "billed monthly",
      features: [
        "Connect up to 10 apps",
        "Get 20 automations",
        "Higher rate limits",
      ],
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/928eef33e71a621ba902119e4a7ba403595c23f518172427a5f795f2c5845808?placeholderIfAbsent=true",
      buttonText: "Download",
      buttonVariant: "primary",
    },
    {
      name: "Enterprise",
      description:
        "Military grade security and features for companies that want to transcend the limits",
      price: isYearly ? "299.99" : "359.99",
      period: "month",
      subtext: isYearly ? "billed yearly" : "billed monthly",
      features: [
        "Connect unlimited apps",
        "Get unlimited automations",
        "Get your own enterprise grade servers",
        "Personalized setup suited to your needs",
      ],
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3a36246138b497b003e46b2fa0f1612533fea2aaef2ca5d6eb8aae687c8088?placeholderIfAbsent=true",
      buttonText: "Enquire",
      buttonVariant: "secondary",
    },
  ];

  return (
    <section className="bg-zinc-950 flex w-full flex-col items-stretch px-8 py-20 max-md:max-w-full max-md:px-5">
      <h2 className="text-neutral-50 text-center text-5xl font-semibold leading-[48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
        Stop doing menial work,
        <br />
        focus on what matters
      </h2>

      <p className="text-zinc-400 text-center text-xl font-medium leading-[1.4] self-center mt-12 max-md:max-w-full max-md:mt-10">
        The Relay has plans for{" "}
      </p>

      <div className="self-center flex gap-2 justify-center mt-12 max-md:mt-10">
        <span
          className={`text-base ${isYearly ? "text-zinc-400" : "text-neutral-50"}`}
        >
          Monthly
        </span>

        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`bg-orange-400 flex min-h-5 items-center gap-2 w-9 p-0.5 rounded-full transition-all`}
        >
          <div
            className={`shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)] bg-neutral-50 self-stretch flex min-h-4 w-4 h-4 my-auto rounded-[100px] transform transition-transform ${isYearly ? "translate-x-4" : ""}`}
          />
        </button>

        <span
          className={`text-base ${isYearly ? "text-neutral-50" : "text-zinc-400"}`}
        >
          Yearly
        </span>

        {isYearly && (
          <div className="self-stretch border gap-2 text-xs text-zinc-400 font-semibold leading-none px-2.5 py-1 rounded-full border-[rgba(255,255,255,0.2)] border-solid">
            Save 20%
          </div>
        )}
      </div>

      <div className="flex w-full gap-4 justify-center flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
