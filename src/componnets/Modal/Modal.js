import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      window.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <CSSTransition in={props.show} unmountOnExit timeout={300}>
      <div
        className="modal"
        onClick={props.onClose}
        onScroll={(e) => e.preventDefault()}
      >
        <div className="modal-content" onClick={props.onClose}>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
