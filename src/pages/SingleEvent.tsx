import PositionsTable from "@/components/PositionsTable";
import BgShadow from "@/components/ui/BgShadow";
import { cn } from "@/lib/utils";
import { MEETING_ROOMS, POSITIONS } from "@/utils/data";
import clsx from "clsx";
const EventRequest = () => {
  return (
    <section className="w-full py-0 z-10 relative">
      <div className="flex  items-end gap-2 px-10 w-full h-fit py-3 text-white">
        <span className={" py-0 font-kanit text-4xl"}>Event Name</span>
        <span className={"font-kanit text-3xl"}>(Venue Details)</span>
      </div>
      <div className=" text-pink1 h-10 pl-5 mt-2 flex items-center flex-wrap">
        <button className="border-[3px]  border-pink1 py-2 px-3 rounded-l-lg">
          Event Details
        </button>
        <button className=" border-[3px] border-l-0 bg-pink1 text-white border-pink1 py-2 px-3 ">
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
      <div className="text-white flex flex-col lg:flex-row w-full gap-5 mt-5 px-7 max-lg:mt-16">
        <div className="max-lg:w-full w-6/12  flex flex-col">
          <h4 className="font-kanit text-3xl">Assign Coordinator</h4>
          <div className="border-[3px] rounded-lg py-3 px-5 flex justify-between cursor-pointer">
            Search Coordinator
            <img src="/assets/down.svg" alt="down" />
          </div>
          <span className="text-pink1 mt-3 text-lg">Add New Coordinator</span>
        </div>
        <div className="flex flex-col max-lg:w-full w-6/12">
          <h4 className="font-kanit text-3xl">Event name (Venue Here)</h4>
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
      <div className="text-white px-5 max-lg:mt-10 overflow-y-auto">
        <div className="min-w-[1010px]">
          <h3 className="text-3xl my-2">Assign Contractor</h3>
          <div className="flex gap-8 ">
            <div className="w-5/12 border-[3px] border-pink1 rounded-lg flex bg-zinc-950">
              <div className="flex flex-col w-full">
                {MEETING_ROOMS?.map((meeting, index) => (
                  <BgShadow opacity={10}>
                    <div
                      className={clsx(
                        "flex pl-2 py-2 w-11/12 flex-col border-[3px] border-pink1  rounded-lg my-3 mx-auto",
                        index === 0 ? "bg-pink1" : "bg-zinc-950/100 z-20"
                      )}
                    >
                      <div className="flex gap-2 items-center">
                        <span className="text-2xl">{meeting.title}</span>
                        <img src="/assets/star.svg" height={18} width={18} />
                        <span
                          className={clsx(
                            "font-bold",
                            index === 0 ? "text-zinc-950" : "text-pink1"
                          )}
                        >
                          {meeting.position} Positions
                        </span>
                      </div>
                      <span>
                        Starts from {meeting.starts} - Ends at {meeting.ends}
                      </span>
                    </div>
                  </BgShadow>
                ))}
              </div>
            </div>
            <div className="w-8/12 ">
              <h4 className="text-3xl mb-2">Position</h4>
              <div className="flex relative h-[417px] pb-28 border-[3px] border-pink1 border-pink rounded-2xl bg-zinc-950">
                <PositionsTable data={POSITIONS} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Edit */}
      <BgShadow className="w-fit mx-auto justify-center  mt-5 relative">
        <button className="bg-pink1 text-white px-10 py-3 font-bold text-xl rounded-xl">
          Save Edits
        </button>
      </BgShadow>
    </section>
  );
};

export default EventRequest;
