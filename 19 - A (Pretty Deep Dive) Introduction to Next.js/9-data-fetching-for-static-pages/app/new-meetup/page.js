"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const page = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default page;
