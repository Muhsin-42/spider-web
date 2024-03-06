import React, { useState } from "react";
import { POSITIONS } from "@/utils/data";
import clsx from "clsx";
interface TableProps {
  data: typeof POSITIONS;
}

const PositionsTable = ({ data }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentPage(Number(event.currentTarget.value));
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="text-white w-full ">
      <div className="">
        <div className=" py-5 border-b-[3px] border-pink1 flex justify-start px-10">
          <span className="w-3/12">Position</span>
          <span className="w-3/12">Time</span>
          <span className="w-3/12">Info</span>
          <span className="w-3/12">Quantity</span>
        </div>
        <div className="flex flex-col justify-start w-full">
          {currentItems.map((row, index) => (
            <div
              className="flex justify-start border-b-[3px] border-pink1 w-full px-10 py-4"
              key={index}
            >
              <div className="w-3/12">{row["Position"]}</div>
              <div className="w-3/12">{row["Time"]}</div>
              <div className="w-3/12">{row["Info"]}</div>
              <div className="w-3/12">{row["Quantity"]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full  absolute bottom-0 flex border-t-[3px] border-pink1 items-center justify-center">
        <div className="flex justify-center  py-3">
          <img
            src="/assets/arrow-left.svg"
            alt="left"
            className="cursor-pointer"
            onClick={handlePrevClick}
          />
          {pageNumbers.map((number) => (
            <button
              key={number}
              value={number}
              onClick={handleClick}
              className={clsx(
                "mr-2 px-3 py-1  rounded text-sm font-medium",
                number === currentPage ? "text-pink1" : "text-gray-100"
              )}
            >
              {number}
            </button>
          ))}
          <img
            src="/assets/arrow-right.svg"
            alt="left"
            className="cursor-pointer"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PositionsTable;
