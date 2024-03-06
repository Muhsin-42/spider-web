import { ReactNode } from "react";

const BackgroundGradient = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="animate-blob-1d animate-first animation-delay-2s mix-blend-hard-light filter blur-3xl opacity-10  absolute top-0 size-[700px] right-0 bg-purple-300 rounded-full"></div>
      <div className="animate-blob-2d animate-second animation-delay-4s mix-blend-hard-light filter blur-3xl opacity-10  absolute top-0 size-[700px] -bottom-8 left-20 bg-blue-300 rounded-full"></div>
      <div className="animate-blob-3d animate-third animation-delay-2s mix-blend-hard-light filter blur-3xl opacity-10  absolute top-96 size-[700px]  bg-pink-300 rounded-full"></div>
      {children}
    </div>
  );
};

export default BackgroundGradient;
