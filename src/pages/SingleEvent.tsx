import { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";
import React from "react";
import { MEETING_ROOMS } from "@/utils/data";
const EventRequest = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <section className="w-full py-0 z-10 relative">
      <div className="flex justify-between px-10 w-full h-fit py-3 ">
        <h3 className={"text-white py-0"}>Event Request</h3>
      </div>
      <div className=" text-pink1 h-10 pl-5 mt-2">
        <button className="border-[3px]  border-pink1 py-2 px-3 rounded-l-lg">
          Event Details
        </button>
        <button className="border-[3px] border-l-0 bg-pink1 text-white border-pink1 py-2 px-3 ">
          Assign Coordinator
        </button>
        <button className="border-[3px] border-l-0  border-pink1 py-2 px-3 ">
          Session Management
        </button>
        <button className="border-[3px] border-l-0 border-pink1 rounded-r-lg py-2 px-3 ">
          Generate Show
        </button>
      </div>

      {/* Assign Coordinator */}
      <div className="text-white flex w-full gap-5">
        <div className="w-6/12  flex flex-col">
          <h4>Assign Coordinator</h4>
          <div className="border-[3px] rounded-lg py-3 px-5">
            Search Coordinator
          </div>
          <span className="text-pink1">Add New Coordinator</span>
        </div>
        <div className="flex flex-col w-6/12">
          <h4>Event name (Venue Here)</h4>
          <div className={cn("grid gap-2")}>
            <div className="border-[3px] rounded-lg py-3 px-5 flex justify-between">
              <span>Start: 12-12-2023</span>
              <span>Ends: 12-12-2023</span>
            </div>
            <div className="border-[3px] rounded-lg py-3 px-5 flex justify-between">
              Venue Address: Mg Road Bengalore
            </div>
          </div>
        </div>
      </div>

      {/* Assign Contractor */}
      <div className="text-white px-5 ">
        <h3>Assign Contractor</h3>
        <div className="flex">
          <div className="w-4/12 border-[3px] border-pink1 rounded-lg flex">
            <div className="flex flex-col">
              {MEETING_ROOMS?.map((meeting) => (
                <div className="flex pl-2 py-2 flex-col border-[3px] border-pink1 rounded-lg my-3 mx-2">
                  <div className="flex gap-2">
                    {meeting.title}
                    <span>{meeting.position}</span>
                  </div>
                  <span>
                    Starts from {meeting.starts} - Ends at {meeting.ends}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4>Position</h4>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRequest;
