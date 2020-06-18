import React from "react";

const StopWatch = (props) => {
  const {
    hours,
    minutes,
    seconds,
    startCounter,
    stopCounter,
    resetCounter,
    disableStartCounter,
    disableStopCounter,
  } = props;

  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>StopWatch</h1>
      <h1>
        {hours} h. : {minutes} m. : {seconds} s.
      </h1>
      <button
        onClick={startCounter}
        disabled={disableStartCounter}
        className="btn btn-success"
      >
        Start
      </button>{" "}
      <button
        onClick={stopCounter}
        disabled={disableStopCounter}
        className="btn btn-danger"
      >
        Stop
      </button>{" "}
      <button onClick={resetCounter} className="btn btn-warning">
        Reset
      </button>
    </div>
  );
};
export default StopWatch;