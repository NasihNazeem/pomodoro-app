import React, { useContext, useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./index.css";
import { TimerModesContext } from "./TimerModesContext";

function Timer(props) {
  const { timerModes } = useContext(TimerModesContext);
  const [prevState, setPrevState] = useState(timerModes.long);

  useEffect(() => {
    // Access the updated timerModes state here
  }, [timerModes]);

  const children = ({ remainingTime }) => {
    const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
    const seconds = String(remainingTime % 60).padStart(2, "0");

    return (
      <div className="timer-value">
        <p className="values">{minutes}</p>
        <span className="separator">:</span>
        <p className="values">{seconds}</p>
      </div>
    );
  };

  const timerKey = `${props.activeMode.minutes}:${props.activeMode.seconds}`;
  return (
    <div className="timer-base">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={timerKey}
          isPlaying={props.isPlaying}
          duration={props.activeMode.minutes * 60 + props.activeMode.seconds}
          colors={"#169873"}
          children={children}
          size={250}
          onComplete={() => {
            props.setIsPlaying(false);
            if (props.activeMode === timerModes.short) {
              setPrevState(props.activeMode);
              props.setActiveMode(timerModes.pomodoro);
              props.setActiveButton(0);
            } else if (props.activeMode === timerModes.long) {
              setPrevState(props.activeMode);
              props.setActiveMode(timerModes.pomodoro);
              props.setActiveButton(0);
            } else if (props.activeMode === timerModes.pomodoro) {
              if (prevState === timerModes.long) {
                props.setActiveMode(timerModes.short);
                props.setActiveButton(1);
              } else if (prevState === timerModes.short) {
                props.setActiveMode(timerModes.long);
                props.setActiveButton(2);
              }
            }
          }}
        ></CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Timer;
