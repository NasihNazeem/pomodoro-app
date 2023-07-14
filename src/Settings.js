import React, { useContext, useState } from "react";
import "./index.css";
import { TimerModesContext } from "./TimerModesContext";

function Settings(props) {
  const { timerModes, updateTimerModes } = useContext(TimerModesContext);
  const [pomoValue, setPomoValue] = useState(timerModes.pomodoro.minutes);
  const [shortValue, setShortValue] = useState(timerModes.short.minutes);
  const [longValue, setLongValue] = useState(timerModes.long.minutes);
  const [edited, setEdited] = useState(false);

  const handlePomoValue = (event) => {
    setPomoValue(event.target.value);
    if (Number(event.target.value) === timerModes.pomodoro.minutes) {
      setEdited(false);
    } else {
      setEdited(true);
    }

    updateTimerModes("pomodoro", { minutes: Number(event.target.value) });
  };
  const handleShortValue = (event) => {
    if (Number(event.target.value) === timerModes.short.minutes) {
      setEdited(false);
    } else {
      setEdited(true);
    }
    setShortValue(event.target.value);
    updateTimerModes("short", { minutes: Number(event.target.value) });
  };
  const handleLongValue = (event) => {
    if (Number(event.target.value) === timerModes.long.minutes) {
      setEdited(false);
    } else {
      setEdited(true);
    }

    setLongValue(event.target.value);
    updateTimerModes("long", { minutes: Number(event.target.value) });
  };

  const handleClose = () => {
    props.setShowSettings(false);
  };

  // Add an event listener to handle arrow key updates
  return (
    <div className="modal">
      <div className="modal-layout">
        <div className="modal-header">
          <h2 className="modal-title">Settings</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="close"
            onClick={handleClose}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <hr className="line-break" />
        <div className="modal-content">
          <div className="timer-section">
            <div className="timer-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="timer-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h5 className="timer-title">Timer</h5>
            </div>
            <div className="timer-subheader">Time (minutes)</div>

            <div className="edit-timer-section">
              <div className="input-section">
                <label>Pomodoro</label>
                <input
                  id="input-value"
                  className="timer-inputs"
                  type="number"
                  min={0}
                  max={25}
                  step={1}
                  value={pomoValue}
                  onChange={handlePomoValue}
                ></input>
              </div>
              <div className="input-section">
                <label>Short Break</label>
                <input
                  className="timer-inputs"
                  type="number"
                  min={0}
                  step={1}
                  value={shortValue}
                  onChange={handleShortValue}
                ></input>
              </div>
              <div className="input-section">
                <label>Long Break</label>
                <input
                  className="timer-inputs"
                  type="number"
                  min={0}
                  step={1}
                  value={longValue}
                  onChange={handleLongValue}
                ></input>
              </div>
            </div>
            <div className="button-layout">
              <button
                type="submit"
                className="save-button"
                disabled={!edited}
                onClick={handleClose}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Settings;
