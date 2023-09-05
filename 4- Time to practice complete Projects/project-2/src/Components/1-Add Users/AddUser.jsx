import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  //!  On input Changin
  const onChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  //! On Submit
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(userInput);
    setUserInput({
      name: "",
      age: "",
    });
  };

  return (
    <div className=" d-flex justify-content-center">
      <Form
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
    </div>
  );
};

export default AddUser;
