import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { defer, json, useLoaderData, Await } from "react-router-dom";

function EventsPage() {
  // use loader can use only accessible by tha same level of routes
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json(
      { message: "could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = () => {
  return defer({ events: loadEvents() });
};
