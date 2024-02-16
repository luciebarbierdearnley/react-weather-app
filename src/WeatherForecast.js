import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "d2fcf0to3278b4e6ab12b4d9a002d5f2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);

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
