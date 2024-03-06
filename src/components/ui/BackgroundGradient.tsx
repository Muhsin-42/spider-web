import { ReactNode } from "react";

const BackgroundGradient = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="animate-blob-1 animation-delay-2s mix-blend-hard-light filter blur-3xl opacity-100  absolute top-0 size-[1000px] right-0 bg-[#383a8f] rounded-full"></div>
      <div className="animate-blob-3 animation-delay-2s mix-blend-hard-light filter blur-3xl opacity-10  absolute top-96 size-[1000px]  bg-pink-300 rounded-full"></div>
      {children}
    </div>
  );
};

export default BackgroundGradient;
