
interface FeatureCardProps {
  title: string;
  description: string;
  icon?: "hub" | "apps" | "automation" | "assistant";
  logoIcons?: string[];
  showcaseImages?: string[];
}

export function FeatureCard({
  title,
  description,
  icon = "hub",
  logoIcons = [],
  showcaseImages = [],
}: FeatureCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 flex flex-col h-full">
      <div className="mb-4">
        {icon === "hub" && (
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16V21M12 16L18 20M12 16L6 20M12 3V8M12 8L18 4M12 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        {icon === "apps" && (
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4H6C4.89543 4 4 4.89543 4 6V8M4 16V18C4 19.1046 4.89543 20 6 20H8M16 20H18C19.1046 20 20 19.1046 20 18V16M20 8V6C20 4.89543 19.1046 4 18 4H16M12 12L12 12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        {icon === "automation" && (
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15V17M7 10V12M17 10V12M7 6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18V6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        {icon === "assistant" && (
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 10.5364 5.48351 11.9617 6.32239 13.1351C6.5473 13.4451 6.59125 13.8471 6.43047 14.1964L5 17.5L8.4467 16.1161C8.79272 15.9514 9.19643 15.993 9.50908 16.2185C10.2977 16.7336 11.2234 17 12 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>

      <h3 className="text-neutral-50 text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-base mb-4">{description}</p>

      {logoIcons.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {logoIcons.map((logo, index) => (
            <div key={index} className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center">
              <span className="text-white text-xs">{logo.charAt(0).toUpperCase()}</span>
            </div>
          ))}
          <div className="w-8 h-8 bg-zinc-800 rounded-md flex items-center justify-center">
            <span className="text-white text-xs">+50</span>
          </div>
        </div>
      )}

      {showcaseImages.length > 0 && (
        <div className="mt-4">
          {showcaseImages.map((image, index) => (
            <div key={index} className="bg-zinc-800 rounded-md p-2">
              <img src={image} alt="Showcase" className="w-full h-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
