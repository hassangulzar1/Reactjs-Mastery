import "./App.css";
import React, { useState } from "react";
import AddUser from "./Components/1-Add Users/AddUser";
import UserList from "./Components/2-User List/UserList";
import Notification from "./Components/3- Error Message/Notification";
function App() {
  const [usersData, setUsersData] = useState([]);

  const statedUpData = (data) => {
    setUsersData((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <>
      <AddUser onSubmit={statedUpData} />;
      <UserList data={usersData} />;
      <Notification />
    </>
  );
}

export default App;
