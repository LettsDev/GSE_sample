import {
  ServiceEventExceptionInterface,
  ServiceScheduleInterface,
  UserInterface,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import {
  add,
  getDay,
  getDate,
  set,
  isBefore,
  getDayOfYear,
  setDayOfYear,
  nextDay,
  Day,
} from "date-fns";

export default function useProcessSchedule() {
  //The upper and lower date ranges need to be at midnight so that the filter works properly???

  // filter functions
  const endBefore = (
    serviceSchedule: ServiceScheduleInterface,
    lowerDateRange: Date
  ): boolean => {
    return isBefore(serviceSchedule.completion_date, lowerDateRange);
  };

  const startAfter = (
    serviceSchedule: ServiceScheduleInterface,
    upperDateRange: Date
  ): boolean => {
    return isBefore(upperDateRange, serviceSchedule.start_date);
  };

  const withinRange = (
    date: Date,
    lowerDateRange: Date,
    upperDateRange: Date
  ): boolean => {
    //if within the lower and upper date ranges
    if (date >= lowerDateRange && date <= upperDateRange) {
      return true;
    }
    return false;
  };

  function Daily(
    start_date: Date,
    completion_date: Date,
    interval: number,
    schedule: ServiceScheduleInterface,
    lowerDateRange: Date,
    upperDateRange: Date,
    created_by: UserInterface
  ): ServiceEventExceptionInterface[] {
    const events: ServiceEventExceptionInterface[] = [];
    for (
      let day = start_date;
      day <= completion_date;
      day = add(day, { days: interval })
    ) {
      if (withinRange(day, lowerDateRange, upperDateRange)) {
        events.push({
          _id: uuidv4(),
          service_schedule: schedule,
          exception_date: day,
          is_cancelled: false,
          is_rescheduled: false,
          created_by,
          status: isBefore(new Date(), day) ? "NOT_STARTED" : "IN_PROGRESS",
          notes: "This is a very important note!",
        });
      }
    }
    return events;
  }

  function Weekly(
    start_date: Date,
    completion_date: Date,
    interval: number,
    schedule: ServiceScheduleInterface,
    lowerDateRange: Date,
    upperDateRange: Date,
    created_by: UserInterface
  ): ServiceEventExceptionInterface[] {
    const events: ServiceEventExceptionInterface[] = [];
    //if your day of the week interval is before the starting date day of the week: start the next week on the interval
    //example start date is set for a Friday, but the interval is every Tuesday, the first event would be on the following Tuesday
    let realStart = new Date();
    if (getDay(start_date) != interval) {
      realStart = nextDay(start_date, interval as Day);
    } else {
      realStart = start_date;
    }
    for (
      let day = realStart;
      day <= completion_date;
      day = add(day, { weeks: 1 })
    ) {
      if (withinRange(day, lowerDateRange, upperDateRange)) {
        events.push({
          _id: uuidv4(),
          service_schedule: schedule,
          exception_date: day,
          is_cancelled: false,
          is_rescheduled: false,
          created_by,
          status: isBefore(new Date(), day) ? "NOT_STARTED" : "IN_PROGRESS",
          notes: "This is a very important note!",
        });
      }
    }
    return events;
  }

  function Monthly(
    start_date: Date,
    completion_date: Date,
    interval: number,
    schedule: ServiceScheduleInterface,
    lowerDateRange: Date,
    upperDateRange: Date,
    created_by: UserInterface
  ): ServiceEventExceptionInterface[] {
    const events: ServiceEventExceptionInterface[] = [];
    let realStart = set(start_date, { date: interval });
    if (getDate(start_date) > interval) {
      realStart = set(add(start_date, { months: 1 }), { date: interval });
    }
    for (
      let day = realStart;
      day <= completion_date;
      day = add(day, { months: 1 })
    ) {
      if (withinRange(day, lowerDateRange, upperDateRange)) {
        events.push({
          _id: uuidv4(),
          service_schedule: schedule,
          exception_date: day,
          is_cancelled: false,
          is_rescheduled: false,
          created_by,
          status: isBefore(new Date(), day) ? "NOT_STARTED" : "IN_PROGRESS",
          notes: "This is a very important note!",
        });
      }
    }

    return events;
  }

  function Annually(
    start_date: Date,
    completion_date: Date,
    interval: number,
    schedule: ServiceScheduleInterface,
    lowerDateRange: Date,
    upperDateRange: Date,
    created_by: UserInterface
  ): ServiceEventExceptionInterface[] {
    const events: ServiceEventExceptionInterface[] = [];
    let realStart = setDayOfYear(start_date, interval);
    if (getDayOfYear(start_date) > interval) {
      realStart = setDayOfYear(add(start_date, { years: 1 }), interval);
    }

    for (
      let day = realStart;
      day <= completion_date;
      day = add(day, { years: 1 })
    ) {
      if (withinRange(day, lowerDateRange, upperDateRange)) {
        events.push({
          _id: uuidv4(),
          service_schedule: schedule,
          exception_date: day,
          is_cancelled: false,
          is_rescheduled: false,
          created_by,
          status: isBefore(new Date(), day) ? "NOT_STARTED" : "IN_PROGRESS",
          notes: "This is a very important note!",
        });
      }
    }
    return events;
  }

  const createEvents = (
    schedule: ServiceScheduleInterface,
    lowerDateRange: Date,
    upperDateRange: Date
  ): ServiceEventExceptionInterface[] => {
    const { created_by, service, start_date, completion_date } = schedule;
    const { frequency, interval } = service;
    switch (frequency) {
      case "ONCE":
        if (withinRange(start_date, lowerDateRange, upperDateRange)) {
          return [
            {
              _id: uuidv4(),
              service_schedule: schedule,
              exception_date: start_date,
              is_cancelled: false,
              is_rescheduled: false,
              created_by,
              status: isBefore(new Date(), start_date)
                ? "NOT_STARTED"
                : "IN_PROGRESS",
              notes: "This is a very important note!",
            },
          ];
        } else {
          return [];
        }
      case "DAILY":
        return Daily(
          start_date,
          completion_date,
          interval,
          schedule,
          lowerDateRange,
          upperDateRange,
          created_by
        );
      case "WEEKLY":
        return Weekly(
          start_date,
          completion_date,
          interval,
          schedule,
          lowerDateRange,
          upperDateRange,
          created_by
        );
      case "MONTHLY":
        return Monthly(
          start_date,
          completion_date,
          interval,
          schedule,
          lowerDateRange,
          upperDateRange,
          created_by
        );
      case "ANNUALLY":
        return Annually(
          start_date,
          completion_date,
          interval,
          schedule,
          lowerDateRange,
          upperDateRange,
          created_by
        );
      default:
        return [];
    }
  };

  const createServiceEvents = (
    serviceSchedules: ServiceScheduleInterface[],
    lowerDateRange: Date,
    upperDateRange: Date
  ): ServiceEventExceptionInterface[] => {
    const events: ServiceEventExceptionInterface[] = [];
    serviceSchedules.forEach((schedule) => {
      if (
        endBefore(schedule, lowerDateRange) !== true &&
        startAfter(schedule, upperDateRange) !== true
      ) {
        events.push(...createEvents(schedule, lowerDateRange, upperDateRange));
      }
    });
    return events;
  };
  return { createServiceEvents };
}
