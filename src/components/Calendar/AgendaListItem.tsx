import { ServiceEventExceptionInterface } from "../../types";
import { useState } from "react";
import format from "date-fns/format";
import { Popover, PopoverTrigger, PopoverContent } from "../Popover";
import { Link } from "react-router-dom";
import { FaEllipsisVertical } from "react-icons/fa6";

interface Props {
  event: ServiceEventExceptionInterface;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function AgendaListItem({ event }: Props) {
  console.log(event.status);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <li
      className={
        " h-11 text-sm grid grid-cols-12 px-2 items-center relative even:bg-gray-100"
      }
    >
      <div
        className={
          (event.status === "COMPLETE"
            ? "bg-green-400"
            : event.status === "IN_PROGRESS"
            ? "bg-orange-300"
            : "bg-cyan-300") + " h-3 w-3  col-start-1 ml-1 rounded-full "
        }
      />
      <p className=" col-start-2 col-span-1 ">
        {format(event.exception_date, "do")}
      </p>
      <p className="col-start-4 col-span-3">
        {event.service_schedule.service.name}
      </p>
      <p className="col-start-7 col-span-3">
        {event.service_schedule.equipment.equipment_type.name}
      </p>
      <p className="col-start-10 col-span-1">
        {event.service_schedule.equipment.location.name}
      </p>
      <Popover
        placement="left"
        open={popoverOpen}
        onOpenChange={setPopoverOpen}
      >
        <PopoverTrigger
          className="col-start-12 col-span-1  flex justify-center items-center h-7"
          onClick={() => setPopoverOpen((prev) => !prev)}
        >
          <div>
            <FaEllipsisVertical />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col rounded-lg border bg-white">
          {[
            { title: "Edit", to: `edit/${event._id}` },
            // todo add update status
            { title: "Delete", to: `delete/${event._id}` },
          ].map((link, i, arr) => (
            <Link
              to={link.to}
              key={link.title}
              className={
                "px-4 py-2  border-gray-200 hover:bg-orange-200 " +
                (i === 0
                  ? " rounded-t-lg border-t-0 "
                  : i === arr.length - 1
                  ? " rounded-b-lg border-b-0 "
                  : "")
              }
            >
              {link.title}{" "}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </li>
  );
}
