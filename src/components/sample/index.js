import React from "react";
import "./index.css";
import CalendarContext from "../../context/CalendarContext";

const Calendar = () => {
  // Logic for getting the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Function to generate days of the month
  //   const generateDays = () => {
  //     const days = [];
  //     const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  //     const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  //     const numDays = lastDayOfMonth.getDate();

  //     for (let day = 1; day <= numDays; day++) {
  //       days.push(<div key={day}>{day}</div>);
  //     }

  //     return days;
  //   };

  //   const days = generateDays();
  //   const selectedElements = days.splice(0, 7);
  //   console.log(selectedElements);

  function getDatesInMonth(year, month, date) {
    const startDate = new Date(year, month, date);
    const endDate = new Date(year, month + 1, 0); // Last day of the month

    const datesInMonth = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      datesInMonth.push(
        <div className="time-grid" key={new Date(currentDate)}>
          <div className="time-row w-100">
            <div className="w-100">
              <p className="day-name">
                {currentDate.toLocaleDateString("en-US", { weekday: "long" })}
              </p>
              <p className="date">{currentDate.getDate()}</p>
            </div>
            {Array.from({ length: 24 }).map((_, index) => {
              const time = `${index}:00 am`;
              return (
                <div key={index} className="cell">
                  {index}
                </div>
              );
            })}
          </div>
        </div>
      );
      currentDate.setDate(currentDate.getDate() + 1); // Increment the day
    }

    return datesInMonth;
  }
  const datesInMonth = getDatesInMonth(currentYear, currentMonth);
  const sevennDays = datesInMonth.splice(0, 7);

  console.log(datesInMonth);

  return (
    // <div className="calendar">
    //   <div className="calendar-header">
    //     <h2>
    //       {new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    //         currentDate
    //       )}{" "}
    //       {currentYear}
    //     </h2>
    //   </div>
    //   <div className="calendar-grid">{generateDays()}</div>
    // </div>
    <CalendarContext.Consumer>
      {(value) => {
        const { currentDate } = value;
        const date = currentDate.getDate();
        const getWeek = getDatesInMonth(currentYear, currentMonth, date - 3);

        console.log(getWeek);

        return <div className="calendar-grid">{getWeek}</div>;
      }}
    </CalendarContext.Consumer>
  );
};

export default Calendar;
