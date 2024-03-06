import Header from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";
import BackgroundGradient from "@/components/ui/BackgroundGradient";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <BackgroundGradient>
    <div className="bg-zinc-950 pb-10 opacity-0d">
      <Header />
      <main className="z-10 flex  w-full justify-center mt-10 gap-10 h-[900px]">
        <RightSidebar />
        <div className="z-10 flex w-8/12 border-[3px] border-pink1 h-[100%] rounded-2xl">
          {children}
        </div>
      </main>
    </div>
  </BackgroundGradient>
);
export default Layout;
