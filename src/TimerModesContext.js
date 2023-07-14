// TimerModesContext.js
import React, { createContext, useState } from "react";

const TimerModesContext = createContext();

const TimerModesProvider = ({ children }) => {
  const [timerModes, setTimerModes] = useState({
    pomodoro: {
      minutes: 25,
      seconds: 0,
    },
    short: {
      minutes: 5,
      seconds: 0,
    },
    long: {
      minutes: 15,
      seconds: 0,
    },
  });

  const updateTimerModes = (modeName, updatedValues) => {
    setTimerModes((prevTimerModes) => ({
      ...prevTimerModes,
      [modeName]: {
        ...prevTimerModes[modeName],
        ...updatedValues,
      },
    }));
  };

  return (
    <TimerModesContext.Provider value={{ timerModes, updateTimerModes }}>
      {children}
    </TimerModesContext.Provider>
  );
};

export { TimerModesContext, TimerModesProvider };
