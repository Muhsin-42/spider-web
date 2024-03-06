import clsx from "clsx";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import BgShadow from "./ui/BgShadow";
import { SIDE_BARS } from "@/utils/data";

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState({
    main: "Events",
    sub: "New Requests",
  });

  const toggleSubItems = (title: string) => {
    setActiveSection((prevState) => ({
      ...prevState,
      main: prevState.main === title ? "" : title,
    }));
  };

  return (
    <div className="bg-opacity-0 text-black border-[3px] min-w-[256px] border-pink1  w-3/12 bg-sky-100  z-10 rounded-2xl relative">
      {SIDE_BARS.map((item) => (
        <div className="flex flex-col z-10" key={item.title}>
          <Link
            to="/"
            className={clsx(
              "main-section-btn z-20 text-lg",
              item.title !== activeSection.main && "border-none"
            )}
            onClick={() => toggleSubItems(item.title)}
          >
            {item.title}
            {item.subItems && <FaAngleDown />}
          </Link>
          <div
            className={clsx(
              "flex flex-col items-center transition-all duration-300 ease-in-out",
              {
                "max-h-0 overflow-hidden": activeSection.main !== item.title,
                "max-h-[100vh] overflow-hidden":
                  activeSection.main === item.title,
              }
            )}
          >
            {item.subItems &&
              item.subItems.map((subItem, index) => (
                <div
                  key={index}
                  className={clsx(
                    "relative w-9/12 mb-3 ",
                    activeSection.sub === subItem ? "mt-1" : "mt-3"
                  )}
                >
                  <img
                    src={`/assets/${index === 0 ? "curved-line-small.svg" : "curved-line.svg"}`}
                    className="absolute bottom-2"
                  />
                  <button
                    className={clsx(
                      "text-white block ml-5 text-lg",
                      activeSection.sub === subItem ? "sub-section-btn" : "ml-8"
                    )}
                    key={subItem}
                  >
                    {subItem}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
      <div className="absolute bottom-7 left-8 w-10/12">
        <BgShadow className="!z-0" opacity={20}>
          <button className="bg-black !z-20 flex items-center text-white py-3 rounded-lg w-full justify-center gap-3 mx-auto ">
            <img src="/assets/logout.svg" alt="logout" />
            Logout
          </button>
        </BgShadow>
      </div>
    </div>
  );
};

export default RightSidebar;
