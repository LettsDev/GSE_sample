import { useMemo } from "react";
import {
  EquipmentInstanceInterface,
  ServiceScheduleInterface,
} from "../../types";
import EquipmentListItem from "./EquipmentListItem";
import ServiceListItem from "./ServiceListItem";
interface Props {
  tableNav: "equipment" | "services" | "tickets";
  equipment: EquipmentInstanceInterface[];
  query: string;
  services: ServiceScheduleInterface[];
}

export default function TableComponent({
  tableNav,
  equipment,
  query,
  services,
}: Props) {
  //use switch function to set the data to use in the table
  function headerSwitch(tableNav: string) {
    const equipmentHeaderConfig = [
      { title: "", class: "col-start-1 col-span-2" },
      { title: "Type", class: "col-start-3 col-span-5" },
      { title: "Location", class: "col-start-8 col-span-3" },
      { title: "", class: "" },
    ];
    const serviceHeaderConfig = [
      { title: "status", class: "col-start-1 col-span-2" },
      { title: "type", class: "col-start-3 col-span-5" },
      { title: "location", class: "col-start-8 col-span-3" },
      { title: "", class: "" },
    ];
    switch (tableNav) {
      case "equipment":
        return equipmentHeaderConfig.map((headerConfig, index) => (
          <li
            key={`${headerConfig.title}-${index}`}
            className={headerConfig.class + ""}
          >
            {headerConfig.title}
          </li>
        ));
      case "services":
        return serviceHeaderConfig.map((headerConfig, index) => (
          <li
            key={`${headerConfig.title}-${index}`}
            className={headerConfig.class + ""}
          >
            {headerConfig.title}
          </li>
        ));
    }
  }
  const filteredData:
    | EquipmentInstanceInterface[]
    | ServiceScheduleInterface[]
    | []
    | undefined = useMemo(() => {
    if (tableNav === "equipment") {
      return equipment.filter((item) => {
        return (
          item.equipment_type.name
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          item.location.city.toLowerCase().includes(query.toLowerCase()) ||
          item.location.name.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else if (tableNav === "services") {
      return services.filter((service) => {
        return (
          service.service.name.toLowerCase().includes(query.toLowerCase()) ||
          service.equipment.location.name
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          service.service.type.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else if (tableNav === "tickets") {
      return [];
    }
  }, [query, equipment, services]);
  console.log(filteredData);
  return (
    <div className="">
      <hr />
      <ol className="grid grid-cols-12 items-center text-sm font-bold px-2 py-2 mb-2 bg-slate-100">
        {headerSwitch(tableNav)}
      </ol>
      <ol className="px-2 overflow-y-auto h-full">
        {filteredData?.map((item) => {
          if (typeof item === "undefined") {
            return <></>;
          } else if (tableNav === "equipment" && "equipment_type" in item) {
            return <EquipmentListItem item={item} key={item._id} />;
          } else if (tableNav === "services" && "completion_date" in item) {
            return <ServiceListItem service={item} />;
          }
        })}
      </ol>
    </div>
  );
}
