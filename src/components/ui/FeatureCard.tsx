interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  illustration?: string;
  fullWidth?: boolean;
  compact?: boolean;
}

export function FeatureCard({
  title,
  description,
  image,
  illustration,
  fullWidth,
  compact,
}: FeatureCardProps) {
  const containerClasses = `
    bg-[rgba(250,250,250,0.02)] 
    flex 
    overflow-hidden 
    p-6 
    rounded-xl 
    max-md:px-5
    ${fullWidth ? "self-stretch min-w-[360px] min-h-[656px] flex-1 shrink basis-[0%]" : ""}
    ${compact ? "min-w-[360px] min-h-[656px] w-[360px]" : ""}
    ${!fullWidth && !compact ? "min-w-[360px] min-h-[424px] w-full" : ""}
  `;

  return (
    <div className={containerClasses}>
      <div className="min-w-60 flex-1 shrink basis-[0%] max-w-[460px] max-md:max-w-full">
        <img
          src={image}
          alt={title}
          className="aspect-[1] object-contain w-8"
        />

        <h3 className="text-neutral-50 text-2xl font-semibold leading-none mt-2 max-md:max-w-full">
          {title}
        </h3>

        <p className="text-zinc-400 text-base font-normal leading-6 mt-2 max-md:max-w-full">
          {description}
        </p>

        {illustration && (
          <div className="flex min-w-60 items-stretch h-full flex-1 shrink basis-[0%] max-md:max-w-full mt-4">
            <img
              src={illustration}
              alt="Feature illustration"
              className="w-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
