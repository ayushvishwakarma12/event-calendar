import React from "react";

const CalendarContext = React.createContext({
  currentDate: "",
  events: [],
  setEvents: () => {},
});

export default CalendarContext;
