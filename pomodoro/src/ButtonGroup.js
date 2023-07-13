import React from "react";
import "./index.css";

export function ButtonGroup(props) {
  const handleButtonClick = (buttonNumber) => {
    props.setActiveButton(buttonNumber);

    if (buttonNumber === 0) {
      props.setActiveMode(props.timerModes.pomodoro);
    } else if (buttonNumber === 1) {
      props.setActiveMode(props.timerModes.short);
    } else if (buttonNumber === 2) {
      props.setActiveMode(props.timerModes.long);
    }
  };

  return (
    <div className="tab-base">
      <div style={{ backgroundColor: "#169873" }} className="tab-options">
        <div className="button-group">
          <button
            className={`option ${
              props.activeButton === 0 ? "active" : "inactive"
            }`}
            onClick={() => handleButtonClick(0)}
            disabled={props.isPlaying}
          >
            <p className="option-title">Pomodoro</p>
          </button>
          <button
            className={`option ${
              props.activeButton === 1 ? "active" : "inactive"
            }`}
            onClick={() => handleButtonClick(1)}
            disabled={props.isPlaying}
          >
            <p className="option-title">Short Break</p>
          </button>
          <button
            className={`option ${
              props.activeButton === 2 ? "active" : "inactive"
            }`}
            onClick={() => handleButtonClick(2)}
            disabled={props.isPlaying}
          >
            <p className="option-title">Long Break</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonGroup;
