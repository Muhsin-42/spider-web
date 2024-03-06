import { TbInfoSquareRounded } from "react-icons/tb";
import BgShadow from "./ui/BgShadow";
const Header = () => {
  return (
    <header className="flex w-full justify-center items-center ">
      <TbInfoSquareRounded className="text-white" size={"2.1rem"} />
      <img src="/assets/notification.svg" alt="notification" />
      <div className=" flex h-fit gap-5 items-center">
        <div className="text-white">
          <p className="text-xl">
            Hi, <span className="text-green1">Muhammad Asad</span>
          </p>
          <p className="text-xl">welcome back!</p>
        </div>
        <BgShadow>
          <div className="rounded-full shadow backdrop-blur-lg backdrop:bg-green1 border-[3px] border-pink1 w-[64px] h-[64px] overflow-hidden">
            <img
              src="/assets/dp.jpg"
              height={64}
              width={64}
              alt="notification"
            />
          </div>
        </BgShadow>
      </div>
    </header>
  );
};

export default Header;
