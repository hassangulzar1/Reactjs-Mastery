import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // use loader can use only accessible by tha same level of routes
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
//! advantage of the loader function is when you click that route before going to that page react router fetch data from backend and show in frontend and we don't want to use any loading state
export const loader = async () => {
  //! you use anything javascript features except react hooks
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
  } else {
    return response;

    //! this is the response when you return someresponse like this then useloader can get the data of that response and give to that component or route you define
    // const res = new Response("any data", { status: 202 });
    // return res;
  }
};
