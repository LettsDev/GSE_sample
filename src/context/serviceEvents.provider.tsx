import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  ServiceEventExceptionInterface,
  LocalStorageServiceScheduleInterface,
  ServiceScheduleInterface,
} from "../types";
import useProcessSchedule from "../hooks/useProcessSchedule";
import startOfMonth from "date-fns/startOfMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
interface ServiceEventInterface {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  events: ServiceEventExceptionInterface[];
}

const ServiceEventsContext = createContext<ServiceEventInterface>(null!);

export function useServiceEventsContext() {
  return useContext(ServiceEventsContext);
}

export function ServiceEventsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { createServiceEvents } = useProcessSchedule();
  const { read } = useLocalStorage();

  function loadServicesFromLocalStorage() {
    const dataString = read("service_schedule");
    if (typeof dataString === "string") {
      return JSON.parse(dataString) as LocalStorageServiceScheduleInterface[];
    }
    return undefined;
  }
  const unprocessedData =
    loadServicesFromLocalStorage() as LocalStorageServiceScheduleInterface[];
  const processedData: ServiceScheduleInterface[] = [];
  unprocessedData.forEach((schedule) => {
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
  const events = createServiceEvents(
    processedData,
    startOfMonth(selectedDate),
    lastDayOfMonth(selectedDate)
  );

  return (
    <ServiceEventsContext.Provider
      value={{ selectedDate, setSelectedDate, events }}
    >
      {children}
    </ServiceEventsContext.Provider>
  );
}
