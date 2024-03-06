import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const BgShadow = ({
  className = "",
  children,
  opacity = 50,
}: {
  className?: string;
  children: ReactNode;
  opacity?: number;
}) => {
  const myClass = twMerge("flex  relative", className);
  return (
    <div className={myClass}>
      <div
        className={`absolute inset-0 !z-0 bg-pink1 opacity-${opacity} blur-lg `}
      ></div>
      {children}
    </div>
  );
};

export default BgShadow;
