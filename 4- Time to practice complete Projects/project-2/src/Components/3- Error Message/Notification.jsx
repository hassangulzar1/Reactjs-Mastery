import React from "react";
import classes from "./Notification.module.css";
import Button from "react-bootstrap/Button";
const Notification = (props) => {
  const cancleNotiHandler = () => {
    props.onCancle(true);
  };

  return (
    <div style={{ zIndex: "1" }}>
      <div className={`${classes.width}`}>
        <h3 className=" bg-danger m-0 text-light py-2 px-2 rounded-top">
          Invalid Input
        </h3>
        <div className="bg-light rounded-bottom">
          <p className="pt-2 pb-5 ms-2 fs-5 fw-bold">{props.text}</p>
          <div className="text-center pb-2">
            <Button variant="success" onClick={cancleNotiHandler}>
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
