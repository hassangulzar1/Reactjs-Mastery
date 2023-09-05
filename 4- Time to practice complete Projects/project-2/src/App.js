import "./App.css";
import React, { useState } from "react";
import AddUser from "./Components/1-Add Users/AddUser";
import UserList from "./Components/2-User List/UserList";
function App() {
  const [usersData, setUsersData] = useState([]);

  const statedUpData = (data) => {
    //! changing state logic
    setUsersData((prevState) => {
      return [...prevState, data];
    });
  };
  // for Changin list brightness

  return (
    <>
      <AddUser onSubmit={statedUpData} />;
      <UserList data={usersData} />;
    </>
  );
}

export default App;
