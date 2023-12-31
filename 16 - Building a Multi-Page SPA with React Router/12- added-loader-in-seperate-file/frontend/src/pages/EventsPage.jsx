import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // use loader can use only accessible by tha same level of routes
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
// advantage of the loader function is when you click that route before going to that page react router fetch data from backend and show in frontend and we don't want to use any loading state
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
