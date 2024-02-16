import React, { useState } from "react";
import "./DisplayUnits.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <img src={props.icon} alt={props.description}></img>
        <span className="temp">{props.celsius}</span>
        <span className="unit">
          {" "}
          ⁰C |
          <a href="/" onClick={convertToFahrenheit}>
            ⁰F
          </a>{" "}
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <img src={props.icon} alt={props.description}></img>
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            ⁰C
          </a>
          | ⁰F{" "}
        </span>{" "}
      </div>
    );
  }
}
