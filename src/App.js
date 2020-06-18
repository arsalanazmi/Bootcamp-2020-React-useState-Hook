import React, { useState } from "react";
import "./App.css";
import RoomLight from "./Component/Room_Light";
import StopWatch from "./Component/StopWatch";

let timer = null;

function App() {
  let [isDay, setDay] = useState(true);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  let [disableStartTimer, setDisableStartTimer] = useState(false);
  let [disableStopTimer, setDisableStopTimer] = useState(false);

  const startCounter = () => {
    timer = setInterval(() => {
      if (seconds >= 59) {
        setSeconds((seconds = -1));
        setMinutes((minutes = minutes + 1));
      } else if (minutes >= 59) {
        setMinutes((minutes = -1));
        setHours((hours = hours + 1));
      }
      setSeconds((seconds = seconds + 1));
      setDisableStartTimer((disableStartTimer = true));
      setDisableStopTimer((disableStopTimer = false));
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(timer);
    setDisableStopTimer((disableStopTimer = true));
    setDisableStartTimer((disableStartTimer = false));
  };

  const resetCounter = () => {
    clearInterval(timer);
    setSeconds((seconds = 0));
    setMinutes((minutes = 0));
    setHours((hours = 0));
    setDisableStartTimer((disableStartTimer = false));
    setDisableStopTimer((disableStopTimer = false));
  };

  return (
    <div className={`main ${isDay ? "morning" : "night"}`}>
      <h1
        style={{
          textDecoration: "underline",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        React Hooks
      </h1>
      <br />
      <br />

      <RoomLight Day={isDay} setDay={setDay} />
      <br />
      <br />

      <StopWatch
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        startCounter={startCounter}
        stopCounter={stopCounter}
        resetCounter={resetCounter}
        disableStartCounter={disableStartTimer}
        disableStopCounter={disableStopTimer}
      />
    </div>
  );
}

export default App;