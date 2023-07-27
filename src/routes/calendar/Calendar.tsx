import CalendarComponent from "../../components/Calendar/Calendar.component";
import Agenda from "../../components/Calendar/Agenda";
import { Outlet } from "react-router-dom";
import { useServiceEventsContext } from "../../context/serviceEvents.provider";

export default function Calendar() {
  const { events, setSelectedDate, selectedDate } = useServiceEventsContext();
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col max-w-lg">
        {CalendarComponent(events, selectedDate, setSelectedDate)}
        <hr className="h-px mt-4 bg-gray-200 border-0 dark:bg-gray-700 " />
        <Agenda
          events={events}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <Outlet />
      </div>
    </div>
  );
}
