import React, { useState } from "react";
import { Toolbar, TableComponent } from "../../components/Tables";
import { useEquipmentContext } from "../../context/equipment.provider";
import { useServiceContext } from "../../context/services.provider";
export default function Table() {
  const [tableNav, setTableNav] = useState<
    "equipment" | "services" | "tickets"
  >("equipment");
  const [query, setQuery] = useState("");

  const { equipment } = useEquipmentContext();
  const { services } = useServiceContext();
  return (
    <div className="h-full">
      <Toolbar
        tableNav={tableNav}
        setTableNav={setTableNav}
        query={query}
        setQuery={setQuery}
      />
      <TableComponent
        tableNav={tableNav}
        equipment={equipment}
        query={query}
        services={services}
      />
      {/* toolbar */}
      {/* *nav list */}
      {/* *search */}
      {/* table */}
      {/* *headerTabs with filter */}
      {/* *rows */}
    </div>
  );
}
