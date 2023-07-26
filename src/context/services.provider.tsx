import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  ServiceScheduleInterface,
  LocalStorageServiceScheduleInterface,
} from "../types";

interface ServiceContextInterface {
  services: ServiceScheduleInterface[];
}

const ServiceContext = createContext<ServiceContextInterface>(null!);

export function useServiceContext() {
  return useContext(ServiceContext);
}

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const { read } = useLocalStorage();
  function loadServicesFromLocalStorage() {
    const dataString = read("service_schedule");
    return JSON.parse(dataString) as LocalStorageServiceScheduleInterface[];
  }

  function formatServicesDates(
    unprocessedServices: LocalStorageServiceScheduleInterface[]
  ) {
    const processedData: ServiceScheduleInterface[] = [];
    unprocessedServices.forEach((schedule) => {
      processedData.push({
        service: schedule.service,
        created_by: schedule.created_by,
        creation_date: new Date(schedule.creation_date),
        equipment: schedule.equipment,
        notes: schedule.notes,
        start_date: new Date(schedule.start_date),
        completion_date: new Date(schedule.completion_date),
        _id: schedule._id,
      });
    });
    return processedData;
  }
  const unprocessedServices = loadServicesFromLocalStorage();
  const services = formatServicesDates(unprocessedServices);

  return (
    <ServiceContext.Provider value={{ services }}>
      {children}
    </ServiceContext.Provider>
  );
}
