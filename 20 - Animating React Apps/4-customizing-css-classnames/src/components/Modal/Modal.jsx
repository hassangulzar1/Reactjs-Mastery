import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 400,
};

const Modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
      // onEnter={() => console.log("onEnter")}
      // onEntering={() => console.log("onEntering")}
      // onEntered={() => console.log("onEntered")}
      // onExit={() => console.log("onExit")}
      // onExiting={() => console.log("onExiting")}
      // onExited={() => console.log("onExited")}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
