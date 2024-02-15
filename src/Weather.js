import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="text"
          placeholder="Enter a city..."
          className="form-input"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Very cloudy"></img>
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 15%</li>
            <li>Wind Speed: 15 lm/h</li>
          </ul>
        </div>
      </div>
      <p>Hello world</p>;
    </div>
  );
}
