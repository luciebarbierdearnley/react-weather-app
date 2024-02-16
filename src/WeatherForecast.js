import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <img src={props.icon} alt={props.description} />
          <div className="forecastTemps">
            <span className="forecastTempMax">19º</span>{" "}
            <span className="forecastTempMin">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
