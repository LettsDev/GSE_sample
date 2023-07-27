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
      { title: "", class: "w-10" },
      { title: "Type", class: "w-24 mr-2 shrink-0" },
      { title: "Services", class: "w-28 mr-4 shrink-0" },
      { title: "Location", class: "w-20 pr-2 shrink-0" },
      {
        title: "Model-Number",
        class: "w-24 mr-4 hidden sm:inline shrink-0 line-clamp-2",
      },
      { title: "Notes", class: "w-28 min-w-fit hidden md:inline shrink-0" },
    ];
    const serviceHeaderConfig = [
      { title: "Name", class: "w-24 ml-4 shrink-0" },
      { title: "Type", class: "w-24 mx-2 shrink-0" },
      { title: "Equipment", class: "w-28 mr-2 " },
      { title: "Notes", class: "w-28 min-w-fit hidden sm:inline shrink-0 " },
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
          service.service.type.toLowerCase().includes(query.toLowerCase()) ||
          service.equipment.equipment_type.name
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          service.equipment.location.name
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          service.equipment.location.city
            .toLowerCase()
            .includes(query.toLowerCase())
        );
      });
    } else if (tableNav === "tickets") {
      return [];
    }
  }, [query, equipment, services, tableNav]);
  return (
    <div className="">
      <hr />
      <ol className="flex items-center text-sm font-bold py-2 mb-2 bg-slate-100 h-10 font-serif">
        {headerSwitch(tableNav)}
      </ol>
      <ol className="overflow-y-auto">
        {filteredData?.map((item) => {
          if (typeof item === "undefined") {
            return <></>;
          } else if (tableNav === "equipment" && "equipment_type" in item) {
            return (
              <EquipmentListItem
                item={item}
                key={item._id}
                services={services}
              />
            );
          } else if (tableNav === "services" && "completion_date" in item) {
            return <ServiceListItem service={item} />;
          }
        })}
      </ol>
    </div>
  );
}
