import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
const UserList = (props) => {
  if (props.data.length === 0) {
    return;
  }

  const deleting = (id) => {
    props.del(id);
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <ListGroup as="ol" className="w-50 rounded-4">
        {props.data.map((items, i) => (
          <ListGroup.Item
            key={items.id}
            style={{ cursor: "pointer" }}
            as="li"
            onClick={() => deleting(items.id)}
          >
            {`${i + 1}: ${items.name} (${items.age} years Old)`}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
