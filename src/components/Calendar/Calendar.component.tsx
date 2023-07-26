import { Children, ReactNode } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  getDay,
  addDays,
  addMonths,
  subMonths,
  getDaysInMonth,
} from "date-fns";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import {
  ServiceEventExceptionInterface,
  ServiceScheduleInterface,
} from "../../types";
import Cell from "./Cell";

export default function CalendarComponent(
  data: ServiceEventExceptionInterface[],
  selectedDate: Date,
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
) {
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = getDaysInMonth(selectedDate);

  function monthlyDaysDate() {
    let dayIndex = 0;
    const days = [];
    const monthStart = startOfMonth(selectedDate);
    while (dayIndex < daysInMonth) {
      const currentDate = addDays(monthStart, dayIndex);
      days.push(currentDate);
      dayIndex += 1;
    }
    return days;
  }
  function previousMonthsDateCalendarOverlap(): DateItemInterface[] {
    const fill = [];
    const previousMonth = subMonths(selectedDate, 1);
    const numberOfDaysPreviousMonth = getDaysInMonth(previousMonth);
    const firstDayOfMonth = getDay(startOfMonth(selectedDate));
    const previousMonthYear = previousMonth.getFullYear();
    for (let d = firstDayOfMonth; d > 0; d--) {
      fill.push({
        date: new Date(
          previousMonthYear,
          previousMonth.getMonth(),
          numberOfDaysPreviousMonth + 1 - d
        ),
      });
    }
    return fill;
  }
  function nextMonthsDateCalendarOverlap(): DateItemInterface[] {
    const fill = [];
    const lastDateOfMonth = endOfMonth(selectedDate);
    const lastDayOfMonth = getDay(lastDateOfMonth);
    const nextMonth = addMonths(selectedDate, 1);
    for (let d = 0; d < 6 - lastDayOfMonth; d++) {
      fill.push({
        date: new Date(nextMonth.getFullYear(), nextMonth.getMonth(), d + 1),
      });
    }
    return fill;
  }
  interface DateItemInterface {
    date: Date;
    events?: ServiceScheduleInterface[];
  }

  function createCalendarDates(): DateItemInterface[] {
    const frontFill = previousMonthsDateCalendarOverlap();
    const backFill = nextMonthsDateCalendarOverlap();
    const datesOfCurrentMonth = monthlyDaysDate();
    const formattedDatesOfCurrentMonth: DateItemInterface[] =
      datesOfCurrentMonth.map((day) => ({
        date: day,
      }));
    return [...frontFill, ...formattedDatesOfCurrentMonth, ...backFill];
  }

  function createWeekElems(cellElements: JSX.Element[]) {
    //create a <tr> element for each week
    const week: JSX.Element[] = [];
    const month: JSX.Element[] = [];
    cellElements.forEach((cell, i) => {
      if (i % 7 !== 0) {
        week.push(cell);
      } else {
        const weekCopy = week.slice();
        month.push(<tr key={i}>{...weekCopy}</tr>);
        week.length = 0;
        week.push(cell);
      }
      if (i === cellElements.length - 1) {
        const weekCopy = week.slice();
        month.push(<tr key={i}>{...weekCopy}</tr>);
      }
    });
    return month;
  }
  const CalendarElements = () => {
    const dates = createCalendarDates();
    const cellElements = dates.map((date, index) => {
      const dateInMonth = selectedDate.getMonth() === date.date.getMonth();
      //add in logic for adding events and styling
      const events = data.filter(
        (event) =>
          event.exception_date.getDate() === date.date.getDate() &&
          event.exception_date.getMonth() === date.date.getMonth()
      );

      return (
        <Cell
          date={date.date}
          currentMonth={dateInMonth}
          onClickCell={onClickCell}
          isSelected={
            selectedDate.getDate() === date.date.getDate() &&
            selectedDate.getMonth() === date.date.getMonth()
          }
          key={date.date.toDateString()}
          events={events}
        />
      );
    });
    return createWeekElems(cellElements);
  };

  function onClickCell(date: Date) {
    setSelectedDate(date);
  }
  console.log(data);
  return (
    <div className="flex flex-col w-full max-w-sm min-w-fit mb-5">
      {/* toolbar */}
      <div className="flex justify-between grow items-center">
        <button
          className="text-neutral-500 hover:text-neutral-700 p-3"
          onClick={() => setSelectedDate((current) => subMonths(current, 1))}
        >
          {<FaArrowLeft />}
        </button>
        <h1
          className="text-gray-900 font-bold cursor-pointer p-3 text-lg"
          onClick={() => setSelectedDate(new Date())}
        >
          {format(selectedDate, "LLLL yyyy")}
        </h1>
        <button
          className="text-neutral-500 hover:text-neutral-700 p-3 "
          onClick={() => setSelectedDate((current) => addMonths(current, 1))}
        >
          {<FaArrowRight />}
        </button>
      </div>
      <table className=" table-fixed w-full ">
        {/* headers */}
        <thead>
          <tr>
            {dayLabels.map((label) => (
              <th className="text-gray-900" key={label}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <CalendarElements />
        </tbody>
      </table>
    </div>
  );
}
