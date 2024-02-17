import React from "react";
import "./DisplayUnits.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <img src={props.icon} alt={props.description}></img>
      <span className="temp">{props.celsius}</span>
      <span className="unit"> ⁰C</span>{" "}
    </div>
  );
}
