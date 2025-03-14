
interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  subtext: string;
  features: string[];
  icon: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

export function PricingCard({
  name,
  description,
  price,
  period,
  subtext,
  features,
  icon,
  buttonText,
  buttonVariant,
}: PricingCardProps) {
  return (
    <div className="bg-[#111111] relative min-w-60 min-h-[541px] max-w-[420px] overflow-hidden flex-1 shrink basis-[0%] pt-6 pb-[143px] px-6 rounded-xl max-md:pb-[100px] max-md:px-5">
      <div className="z-0 w-full max-w-[460px]">
        <div className="flex w-full items-center gap-2 text-xl text-neutral-50 font-semibold whitespace-nowrap leading-[1.4] justify-center">
          <div className="bg-zinc-900 w-4 h-4 rounded-full flex items-center justify-center">
            <img
              src={icon}
              alt={`${name} icon`}
              className="aspect-[1] object-contain w-2 self-stretch shrink-0 my-auto"
            />
          </div>
          <span className="self-stretch flex-1 shrink basis-[0%] my-auto">
            {name}
          </span>
        </div>

        <p className="text-zinc-400 text-base font-normal leading-6 mt-2">
          {description}
        </p>
      </div>

      <div className="z-0 flex w-full items-center gap-2 mt-6">
        <div className="self-stretch flex min-h-[66px] gap-2 font-semibold whitespace-nowrap my-auto">
          <span className="text-zinc-400 text-base">$</span>
          <span className="text-neutral-50 text-6xl leading-none max-md:text-[40px]">
            {price}
          </span>
        </div>

        <div className="self-stretch text-base font-normal flex-1 shrink basis-[0%] max-w-[460px] my-auto pt-1.5">
          <div className="text-neutral-50">/ {period}</div>
          <div className="text-zinc-400">{subtext}</div>
        </div>
      </div>

      <button
        className={`self-stretch z-0 w-full gap-2 text-sm font-medium whitespace-nowrap leading-none mt-6 px-4 py-2.5 rounded-md transition-colors
          ${
            buttonVariant === "primary"
              ? "bg-white text-zinc-900 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)] hover:bg-neutral-100"
              : "text-neutral-50 hover:bg-zinc-900"
          }`}
      >
        {buttonText}
      </button>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f863695b2f7565de891ba88d9e730940b7a00142de4f3f309dfa08c13151dfb8?placeholderIfAbsent=true"
        alt="Divider"
        className="aspect-[333.33] object-contain w-full z-0 mt-6"
      />

      <div className="z-0 w-full text-base text-neutral-50 font-normal mt-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-2 mt-2 first:mt-0"
          >
            <div className="bg-zinc-900 w-4 h-4 rounded-full flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f4103a25a8c70ad0efe35825f8382d81a4d1e15c262ab854036ac0e56ff3d5?placeholderIfAbsent=true"
                alt="Check"
                className="aspect-[1] object-contain w-2 self-stretch shrink-0 my-auto"
              />
            </div>
            <span className="self-stretch flex-1 shrink basis-[0%] my-auto">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
