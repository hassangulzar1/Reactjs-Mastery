import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { defer, json, useLoaderData, Await } from "react-router-dom";

function EventsPage() {
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

//* Why use Defer?
// Sometimes you wanna load this page before the data is there and show parts of the page already until all the data is there.
// And that's where we can defer loading and tell React router tha we actually wanna render a component already even the data is not fully there yet.
