import React from "react";

export default function Room_Light(props) {
  return (
    <div>
      <h1>{props.Day ? "Good Morning" : "Good Night"}</h1>
      <button
        onClick={() => props.setDay(!props.Day)}
        className={`btn btn-${props.Day ? "secondary" : "warning"}`}
      >
        {props.Day ? "Night" : "Morning"}
      </button>
    </div>
  );
}