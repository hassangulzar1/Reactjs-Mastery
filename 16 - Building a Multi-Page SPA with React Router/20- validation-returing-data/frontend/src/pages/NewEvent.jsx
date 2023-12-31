import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";
const NewEvent = () => {
  //! One way of sending data is as before we doing but we have better alternative approach using router
  // function submitHandler(event) {
  //   event.preventDefault();
  // }

  return <EventForm />;
};

export default NewEvent;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  //! if user accidentally submitted wrong data
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Couldn't save event data" }, { status: 500 });
  }

  return redirect("/events");
}
