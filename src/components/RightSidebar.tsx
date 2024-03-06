import clsx from "clsx";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const SIDE_BARS = [
  {
    title: "Events",
    subItems: ["New Requests", "Estimate", "Events", "Partial Requests"],
  },
  {
    title: "Positions",
  },
  {
    title: "Contractors",
  },
  {
    title: "Users",
    subItems: ["Admins", "Clients", "Coordinators"],
  },
  {
    title: "Profile",
  },
];

const RightSidebar = () => {
  const [activeSection] = useState({
    main: "Events",
    sub: "New Requests",
  });
  return (
    <div className="bg-opacity-0 text-black border-[3px] border-pink1  w-3/12 bg-sky-100  z-10 rounded-2xl">
      {SIDE_BARS.map((item) => (
        <div className="flex flex-col z-10" key={item.title}>
          <button
            onClick={() => console.log("hee")}
            className={clsx(
              "main-section-btn z-20",
              item.title !== activeSection.main && "border-none"
            )}
          >
            {item.title}
            {item.subItems && <FaAngleDown />}
          </button>
          <div className=" flex flex-col items-center">
            {item.subItems &&
              item.subItems.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "relative  w-9/12 mb-3",
                    activeSection.sub === item ? "mt-1" : "mt-3"
                  )}
                >
                  <img
                    src={`/assets/${index === 0 ? "curved-line-small.svg" : "curved-line.svg"}`}
                    className="absolute bottom-2"
                  />
                  <button
                    className={clsx(
                      "text-white block ml-5",
                      activeSection.sub === item ? "sub-section-btn" : "ml-8"
                    )}
                    key={item}
                  >
                    {item}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
