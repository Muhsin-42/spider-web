import Header from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <BackgroundGradientAnimation className="!z-0">
    <>
      <Header />
      <main className="z-10 flex  w-full justify-center mt-10 h-[100vh]">
        <div className="flex z-10 w-full justify-center gap-10 h-[85%] ">
          <RightSidebar />
          <div className="z-10 flex w-8/12 border-[3px] border-pink1 rounded-2xl">
            {children}
          </div>
        </div>
      </main>
    </>
  </BackgroundGradientAnimation>
);
export default Layout;
