import React from "react";
import { ServiceEventExceptionInterface } from "../../types";
import AgendaListItem from "./AgendaListItem";
import AgendaIndex from "./AgendaIndex";
interface Props {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  events: ServiceEventExceptionInterface[];
}
export default function Agenda({
  selectedDate,
  setSelectedDate,
  events,
}: Props) {
  return (
    <div className="relative h-full">
      <AgendaIndex />
      <ol className="flex flex-col space-y-3  overflow-y-auto h-full relative">
        {events
          .sort((a, b) => {
            if (a.exception_date > b.exception_date) {
              return 1;
            }
            return -1;
          })
          .filter((item) => {
            return item.exception_date.getDate() === selectedDate.getDate();
          })
          .map((ev) => (
            <AgendaListItem
              event={ev}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              key={ev._id}
            />
          ))}
      </ol>
    </div>
  );
}
