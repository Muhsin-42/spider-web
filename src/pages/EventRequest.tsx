import Table from "@/components/Table";
import { EVENT_REQUESTS } from "@/utils/data";

const EventRequest = () => {
  return (
    <section className="w-full py-0 z-10 relative">
      <div className="flex justify-between px-10 w-full h-fit py-3 max-md:flex-col">
        <h3 className={"text-white  font-kanit text-4xl"}>Event Requests</h3>
        <div className="flex items-center  h-fit gap-2 ">
          <div className="relative">
            <img
              src="/assets/search.svg"
              className="absolute mt-2 ml-4"
              alt=""
            />
            <input
              type="text"
              className="h-10 bg-opacity-30 border border-white  text-white bg-black rounded-lg py-2 pl-14 !z-20"
              placeholder="Search here"
            />
          </div>
          <img
            src="/assets/plus.svg"
            height={34}
            width={34}
            className=" bg-gradient-to-r from-[#FF00FF] via-[#FE00FF] to-[#8F00FF]"
          />
        </div>
      </div>
      <Table data={EVENT_REQUESTS} />
    </section>
  );
};

export default EventRequest;
