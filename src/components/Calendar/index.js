import React from "react";
import "./index.css";
import CalendarContext from "../../context/CalendarContext";

const dates = [
  { id: 1, date: new Date("2023-09-22"), event: false },
  { id: 2, date: new Date("2023-09-23"), event: false },
  { id: 3, date: new Date("2023-09-24"), event: false },
  { id: 5, date: new Date("2023-09-25"), event: false },
  { id: 5, date: new Date("2023-09-26"), event: false },
  { id: 6, date: new Date("2023-09-27"), event: false },
  { id: 7, date: new Date("2023-09-28"), event: false },
];

const Calendar = () => {
  const checkEventsInDay = (inputDate) => {
    console.log("input date", inputDate);
    if (inputDate !== undefined) {
      dates.forEach((day) => {
        if (
          parseInt(day.date.getDate()) ===
          parseInt(new Date(inputDate).getDate())
        ) {
          day.event = true;
        }
      });
    }
  };

  return (
    <CalendarContext.Consumer>
      {(value) => {
        const { events } = value;
        if (events.length > 1) {
          // const a = events.map((day) => {
          //   console.log("aray", day.date);
          //   const eventsList = checkEventsInDay(day.date);
          // });
          // eventsList = a;
          for (const object of events) {
            checkEventsInDay(object.date);
          }
        }
        const getDays = () => {
          const days = dates.map((day) => {
            return (
              <div>
                <p className="day-name">
                  {day.date.toLocaleDateString("en-US", { weekday: "long" })}
                </p>
                <p className="date">{day.date.getDate()}</p>
                <div>
                  {Array.from({ length: 24 }).map((e, index) => {
                    return (
                      <div className="event-cell">
                        {day.event === true
                          ? events.map((event) => {
                              const timeNumber =
                                index < 10
                                  ? "0" + index + ":00"
                                  : index % 12 < 10
                                  ? "0"
                                  : "" + (index % 12) + ":00";
                              const amPm = index < 12 ? "AM" : "PM";
                              const time = timeNumber + " " + amPm;
                              return (
                                <div>
                                  {event.startTime === time && (
                                    <div className="event-card">
                                      <p className="event-title">
                                        <span className="d-flex">
                                          <div className="dot"></div>

                                          {event.title}
                                        </span>
                                      </p>
                                      <div className="d-flex time-card">
                                        <p>{event.startTime} - </p>
                                        <p> {event.endTime}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          : ""}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          });
          return days;
        };

        return (
          <div className="d-flex w-100 cell-container">
            <div className="">
              <h1 className="time">time</h1>
              {Array.from({ length: 24 }).map((_, i) => {
                return (
                  <p className="time-and-minutes">{`${
                    i < 10 ? "0" + i : i % 12
                  }:00 
            ${i < 12 ? "AM" : "PM"}`}</p>
                );
              })}
            </div>
            <div className="calendar-grid">{getDays()}</div>
          </div>
        );
      }}
    </CalendarContext.Consumer>
  );
};

export default Calendar;
