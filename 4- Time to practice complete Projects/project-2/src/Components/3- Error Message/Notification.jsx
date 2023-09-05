import React from "react";
import classes from "./Notification.module.css";
import Button from "react-bootstrap/Button";
const Notification = () => {
  return (
    <div className={`${classes.width}`}>
      <h3 className=" bg-danger m-0 text-light py-2 px-2 ">Invalid Input</h3>
      <div className="bg-light">
        <p className="pt-2 pb-5">please Enter valid details</p>
        <div className="text-center pb-2">
          <Button variant="success">Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
