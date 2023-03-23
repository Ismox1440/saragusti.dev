import clsx from "clsx";

interface IndicatorProps {
  color?: string;
  pulse?: boolean;
  bgColor?: string;
  className?: string
}

export function Indicator({
  className,
  bgColor = "bg-gray-400",
  pulse = false,
}: IndicatorProps): JSX.Element {
    
  return (
    <span
      className={clsx(
        "relative inline-flex justify-center items-center w-5 h-5 mr-3",
        className
      )}
    >
      <span className="absolute flex h-3 w-3">
        {pulse && (
          <span
            className={`${bgColor} absolute inline-flex w-full h-full opacity-75 rounded-full motion-safe:animate-ping`}
          />
        )}
        <span
          className={`${bgColor} relative inline-flex w-3 h-3 rounded-full`}
        />
      </span>
    </span>
  );
}
