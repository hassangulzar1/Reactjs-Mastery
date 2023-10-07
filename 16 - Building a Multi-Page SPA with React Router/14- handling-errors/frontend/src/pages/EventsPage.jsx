import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  // use loader can use only accessible by tha same level of routes
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //! 1st Method
    // return { isError: true, message: "Could not fetch event" };
    //! 2nd Method
    // throw { message: "Could not fetch event " };
    //! 3rd Method
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    return response;

    // const res = new Response("any data", { status: 202 });
    // return res;
  }
};
