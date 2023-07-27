import {
  EquipmentInstanceInterface,
  ServiceScheduleInterface,
} from "../../types";
import { Popover, PopoverTrigger, PopoverContent } from "../Popover";
import { FaEllipsisVertical } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function EquipmentListItem({
  item,
  services,
}: {
  item: EquipmentInstanceInterface;
  services: ServiceScheduleInterface[];
}) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  return (
    <li
      key={item._id}
      className="even:bg-gray-100 flex my-6 items-center justify-between"
    >
      <div className=" text-sm flex items-center pr-2 ">
        <div className="w-10 pl-3">
          {/* container for status */}
          <div
            className={
              (item.status === "OPERABLE"
                ? "bg-green-400"
                : item.status === "INOPERABLE" ||
                  item.status === "BEING_REPAIRED"
                ? "bg-red-300"
                : item.status === "DAMAGED" || item.status === "OUT_OF_SERVICE"
                ? " bg-orange-300 "
                : "") + " h-3 w-3 rounded-full "
            }
          ></div>
        </div>
        <p className=" w-28 mr-2">{item.equipment_type.name}</p>
        <ul className="w-32 shrink-0 mr-2">
          {services
            .filter((service) => service.equipment._id === item._id)
            .map((foundService) => (
              <li>-{foundService.service.name}</li>
            ))}
        </ul>
        <p className="w-8 pr-2">{item.location.name}</p>
        <p className="w-28 hidden md:inline shrink-0">{item.model_number}</p>
        <p className="w-28 min-w-fit hidden md:inline shrink-0">
          {item.purchase_date?.toDateString()}
        </p>
      </div>
      <Popover
        placement="left"
        open={popoverOpen}
        onOpenChange={setPopoverOpen}
      >
        <PopoverTrigger
          className="  flex justify-center items-center  pl-3 py-1 pr-4"
          onClick={() => setPopoverOpen((prev) => !prev)}
        >
          <div>
            <FaEllipsisVertical />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col rounded-lg border bg-white">
          {[
            { title: "Edit", to: `edit/${item._id}` },
            // todo add update status
            { title: "Delete", to: `delete/${item._id}` },
          ].map((link, i, arr) => (
            <Link
              to={link.to}
              key={link.title}
              className={
                "px-4 py-2  border-gray-200 hover:bg-orange-500 hover:text-white  " +
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
