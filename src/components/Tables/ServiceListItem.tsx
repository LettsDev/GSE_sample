import { ServiceScheduleInterface } from "../../types";
import { Popover, PopoverTrigger, PopoverContent } from "../Popover";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
interface Props {
  service: ServiceScheduleInterface;
}

export default function ServiceListItem({ service }: Props) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <li
      key={service._id}
      className="h-11 text-sm grid grid-cols-12 items-center even:bg-gray-100 px-2"
    >
      {/* <div
        className={
          (service.status === "OPERABLE"
            ? "bg-green-400"
            : item.status === "INOPERABLE" || item.status === "BEING_REPAIRED"
            ? "bg-red-300"
            : item.status === "DAMAGED" || item.status === "OUT_OF_SERVICE"
            ? " bg-orange-300 "
            : "") + " h-3 w-3  col-start-1 col-span-2 ml-1 rounded-full "
        }
      ></div> */}
      <p className=" col-start-3 col-span-5 ">{}</p>
      <p className="col-start-8 col-span-3">{}</p>
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
            { title: "Edit", to: `edit/${service._id}` },
            // todo add update status
            { title: "Delete", to: `delete/${service._id}` },
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
