import React from "react";
import {
  LocationData,
  UserData,
  EquipmentData,
  EquipmentInstanceData,
  ServiceData,
  ServiceSchedule,
} from "./datasets";
import useLocalStorage from "../hooks/useLocalStorage";

export default function MockWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { createMock } = useLocalStorage();
  function loadMockIntoLocal() {
    const mockData = [
      { key: "location", data: LocationData },
      { key: "user", data: UserData },
      { key: "equipment", data: EquipmentData },
      { key: "equipment_instance", data: EquipmentInstanceData },
      { key: "service", data: ServiceData },
      { key: "service_schedule", data: ServiceSchedule },
    ];
    mockData.forEach((item) => {
      createMock(item.key, item.data);
    });
  }
  loadMockIntoLocal();
  return <>{children}</>;
}
