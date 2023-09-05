import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
const UserList = (props) => {
  if (props.data.length === 0) {
    return;
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <ListGroup as="ol" className="w-50 rounded-4">
        {props.data.map((items) => (
          <ListGroup.Item style={{ cursor: "pointer" }} as="li">
            {`${items.name} (${items.age} years Old)`}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
