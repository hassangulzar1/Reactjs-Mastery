import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Notification from "../3- Error Message/Notification";
const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });
  //! Notification States
  const [initalNoti, setInitialNoti] = useState(true);
  const [text, setText] = useState("");

  //!  On input Changing
  const onChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  //! On Submit
  const submitHandler = (event) => {
    event.preventDefault();

    //! Notification Logic
    if (userInput.name === "" || userInput.age === "") {
      setInitialNoti(false);
      setText("please enter a valid number and age (non-empty values)");
      return;
    } else if (userInput.age < 1) {
      setText("Please enter a valid age (> 0)");
      setInitialNoti(false);
      return;
    }

    props.onSubmit(userInput);
    setUserInput({
      name: "",
      age: "",
    });
  };

  //! on Cancle logic
  const onCancling = (bolian) => {
    setInitialNoti(bolian);
  };

  return (
    <div className=" d-flex justify-content-center">
      <Form
        style={{
          zIndex: !initalNoti && "-1",
          filter: !initalNoti && "brightness(50%)",
        }}
        className=" bg-light w-50 mt-5 px-4 py-3 rounded-4"
        onSubmit={submitHandler}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Username</Form.Label>
          <Form.Control
            value={userInput.name}
            type="text"
            name="name"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Age (Year)</Form.Label>
          <Form.Control
            value={userInput.age}
            type="number"
            name="age"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          addUser
        </Button>
      </Form>
      {!initalNoti && <Notification text={text} onCancle={onCancling} />}
    </div>
  );
};

export default AddUser;
