import { ServiceEventExceptionInterface } from "../../types";
import { FaPlus } from "react-icons/fa6";
interface CellProps {
  currentMonth: boolean;
  date: Date;
  events: ServiceEventExceptionInterface[];
  onClickCell: (date: Date) => void;
  isSelected: boolean;
}
export default function Cell({
  currentMonth,
  date,
  events,
  onClickCell,
  isSelected,
}: CellProps) {
  const baseStyling = "text-center align-top p-1 rounded-full ";
  const sameMonthStyling = "hover:bg-orange-200 cursor-pointer ";
  const otherMonthStyling = "text-slate-400 cursor-default";
  const selectedStyling = "bg-orange-500 text-white ";
  const currentDayStyling = " font-bold ";

  return (
    <td
      className={
        baseStyling +
        (currentMonth ? sameMonthStyling : otherMonthStyling) +
        (isSelected ? selectedStyling : "")
      }
      onClick={() => onClickCell(date)}
    >
      <div className="flex flex-col items-center">
        <p
          className={
            date.getDate() === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
              ? currentDayStyling
              : ""
          }
        >
          {date.getDate().toString()}
        </p>
        <div className="flex gap-x-1">
          {events.length > 2 ? (
            <>
              <div
                className={
                  " w-1.5 h-1.5 rounded" +
                  (isSelected ? " bg-white" : " bg-black")
                }
                key={"more than 3"}
              ></div>
              <FaPlus className="w-1.5 h-1.5" />
            </>
          ) : events.length ? (
            events.map((ev) => (
              <div
                className={
                  " w-1.5 h-1.5 rounded" +
                  (isSelected ? " bg-white" : " bg-black")
                }
                key={ev._id}
              ></div>
            ))
          ) : null}
        </div>
      </div>
    </td>
  );
}
