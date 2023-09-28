//Components
import CalendarContext from "./context/CalendarContext";
import EventsFroms from "./components/eventsForm";
import Calendar from "./components/Calendar";
import Navbar from "./components/navbar";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Hooks
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: "", startTime: "", endTime: "", date: "" },
  ]);
  console.log(events);

  return (
    <div>
      <CalendarContext.Provider
        value={{
          currentDate: new Date(),
          events: events,
          setEvents: setEvents,
        }}
      >
        <Navbar />
        <div className="d-flex flex-row">
          <EventsFroms />
          <Calendar setEvents={setEvents} />
        </div>
      </CalendarContext.Provider>
    </div>
  );
}

export default App;
