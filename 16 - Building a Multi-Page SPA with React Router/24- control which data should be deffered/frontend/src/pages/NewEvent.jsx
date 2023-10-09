import React from "react";
import EventForm from "../components/EventForm";
const NewEvent = () => {
  //! One way of sending data is as before we doing but we have better alternative approach using router
  // function submitHandler(event) {
  //   event.preventDefault();
  // }

  return <EventForm method="post" />;
};

export default NewEvent;
