import React from "react";
import ReactDOM from "react-dom";
import "./LoginModal.css";
const LoginModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="custom-modal-overlay" />
          <div
            className="custom-modal-wrapper" // Áp dụng lớp CSS tùy chỉnh
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="custom-modal">
              <div className="custom-modal-header">
                <button
                  type="button"
                  className="custom-modal-close-button"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Hello, I'm a modal.</p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default LoginModal;
