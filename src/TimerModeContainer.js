// TimerModesContainer.js
import React, { useContext } from "react";
import { TimerModesContext } from "./TimerModesContext";

const TimerModesContainer = () => {
  const { timerModes, updateTimerModes } = useContext(TimerModesContext);

  const handleUpdate = () => {
    updateTimerModes("pomodoro", { minutes: 30 });
    updateTimerModes("short", { minutes: 10 });
  };

  return (
    <div>
      <h2>Timer Modes Container</h2>
      <button onClick={handleUpdate}>Update Timer Modes</button>
      <p>Pomodoro minutes: {timerModes.pomodoro.minutes}</p>
      <p>Short minutes: {timerModes.short.minutes}</p>
      <p>Long minutes: {timerModes.long.minutes}</p>
    </div>
  );
};

export default TimerModesContainer;
