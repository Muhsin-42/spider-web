import React, { useState } from "react";
import { EVENT_REQUESTS } from "@/utils/data";
import clsx from "clsx";
import { Link } from "react-router-dom";
interface TableProps {
  data: typeof EVENT_REQUESTS;
}

const Table = ({ data }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
      <div className="overflow-x-auto ">
        <div className="bg-pink1 py-5 min-w-[900px] flex justify-start px-10">
          <span className="w-2/12 flex gap-3 items-center">
            Event Name <img alt="down" src="/assets/up-fill.svg" />{" "}
          </span>
          <span className="w-2/12">Event Start</span>
          <span className="w-2/12 flex gap-3 items-center">
            Event End
            <img alt="down" src="/assets/down-fill.svg" />
          </span>
          <span className="w-2/12 flex gap-3 items-center">
            Client Name
            <img alt="down" src="/assets/up-fill.svg" />
          </span>
          <span className="w-2/12">Contact Info</span>
          <span className="w-2/12">Venue</span>
        </div>
        <div className="flex flex-col justify-start  min-w-[900px]">
          {currentItems.map((row, index) => (
            <div
              className="flex justify-start border-b-[3px] border-pink1 w-full px-10 py-4"
              key={index}
            >
              <Link to="/event" className="w-2/12 flex gap-2 items-center">
                <img src="/assets/eye.svg" alt="eye" />
                {row["Event Name"]}
              </Link>
              <div className="w-2/12 text-lg">{row["Event Start"]}</div>
              <div className="w-2/12 text-lg">{row["Event End"]}</div>
              <div className="w-2/12 text-lg">{row["Client Name"]}</div>
              <div className="w-2/12 text-lg">{row["Contact Info"]}</div>
              <div className="w-2/12 text-lg">{row["Venue"]}</div>
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

export default Table;
