import React from "react";
import { Formik } from "formik";
import "./index.css";
import CalendarContext from "../../context/CalendarContext";

export default function EventsFroms() {
  return (
    <CalendarContext>
      {(value) => {
        const { events, setEvents } = value;
        const onSubmitEvents = (inputValue) => {
          const { title, date, startTime, endTime } = inputValue;
          const inputStartTime = startTime.slice(0, 2);
          const inputEndTime = endTime.slice(0, 2);
          let timeStart;
          if (inputStartTime > 12) {
            const t = inputStartTime % 12;
            if (t > 10) {
              timeStart = t + startTime.slice(2, 5) + "PM";
            } else {
              timeStart = "0" + t + startTime.slice(2, 5) + " PM";
            }
          } else {
            timeStart = startTime + " AM";
          }
          let timeEnd;
          if (inputEndTime > 12) {
            const t = inputEndTime % 12;
            if (t > 10) {
              timeEnd = t + endTime.slice(2, 5) + " PM";
            } else {
              timeEnd = "0" + t + endTime.slice(2, 5) + " PM";
            }
          } else {
            timeEnd = endTime + " AM";
          }
          const updatedEvents = {
            title,
            date,
            startTime: timeStart,
            endTime: timeEnd,
          };

          setEvents([...events, updatedEvents]);
        };

        return (
          <div className="form-container">
            <h1 className="form-heading">Add Your Events</h1>
            <Formik
              initialValues={{
                title: "",
                date: "",
                startTime: "",
                endTime: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.title) {
                  errors.title = "Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  onSubmitEvents(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <label className="label mt-4" htmlFor="title">
                    Add Title
                  </label>
                  <input
                    id="title"
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Add Title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  <p className="error">
                    {errors.title && touched.title && errors.title}
                  </p>
                  <label className="label mt-2" htmlFor="title">
                    Date
                  </label>
                  <input
                    id="date"
                    className="input"
                    type="date"
                    name="date"
                    onChange={handleChange}
                  />
                  <p className="error">
                    {errors.date && touched.date && errors.date}
                  </p>
                  <label className="label" htmlFor="startTime">
                    Start Time
                  </label>
                  <input
                    id="startTime"
                    type="time"
                    className="input"
                    name="startTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.startTime}
                  />
                  {errors.startTime && touched.startTime && errors.startTime}
                  <label className="label mt-2" htmlFor="endTime">
                    End Time
                  </label>
                  <input
                    id="endTime"
                    type="time"
                    className="input"
                    name="endTime"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.endTime}
                  />
                  {errors.endTime && touched.endTime && errors.endTime}
                  <button
                    className="event-button btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        );
      }}
    </CalendarContext>
  );
}
