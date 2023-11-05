import React from "react";
import "./App.css";
import Modal from "./LoginModal";
import useModal from "./useModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button className="button-default" onClick={toggle}>
        Show Modal
      </button>
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default App;
