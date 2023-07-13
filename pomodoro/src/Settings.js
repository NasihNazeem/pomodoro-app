import React from "react";
import "./index.css";

function Settings(props) {
  const handleClose = () => {
    props.setShowSettings(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
}

export default Settings;
