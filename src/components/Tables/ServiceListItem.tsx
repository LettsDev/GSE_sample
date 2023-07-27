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
      className="even:bg-gray-100 flex py-3 items-center justify-between bg-white"
    >
      <div className=" text-sm flex items-center  ">
        <p className=" line-clamp-2 w-24 ml-4 shrink-0">
          {service.service.name}
        </p>
        <p className="w-24 mx-2 shrink-0">
          {service.service.type.toLowerCase()}
        </p>
        <p className="w-24 mx-2 shrink-0">{`${service.equipment.equipment_type.name} (${service.equipment.location.name})`}</p>
        <p className="w-full hidden sm:inline line-clamp-4 align-middle">
          {service.notes}
        </p>
      </div>
      <Popover
        placement="left"
        open={popoverOpen}
        onOpenChange={setPopoverOpen}
      >
        <PopoverTrigger
          className="flex justify-center items-center  pl-3 py-1 pr-4"
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
