import "./App.css";
import React, { useState } from "react";
import AddUser from "./Components/1-Add Users/AddUser";
import UserList from "./Components/2-User List/UserList";
function App() {
  const [usersData, setUsersData] = useState([]);

  const statedUpData = (data1) => {
    //! changing state logic
    setUsersData((prevState) => {
      let data = { ...data1, id: Math.random().toString() };
      return [...prevState, data];
    });
  };
  //! for deleting particular list
  const deleting = (id) => {
    setUsersData((prevState) => {
      return prevState.filter((items) => items.id !== id);
    });
  };
  return (
    <>
      <AddUser onSubmit={statedUpData} />;
      <UserList del={deleting} data={usersData} />;
    </>
  );
}

export default App;
