import React, { useState } from "react";
import "./Weather.css";
import DateDisplay from "./DateDisplay.js";

import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function showData(response) {
    console.log(response.data);

    setWeatherData({
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "d2fcf0to3278b4e6ab12b4d9a002d5f2";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city..."
            className="form-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary search-button"
          />
        </form>
        <h1>{city}</h1>
        <ul>
          <li>
            <DateDisplay date={weatherData.date} />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <span className="temp">{Math.round(weatherData.temperature)}</span>
            <span className="unit">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Description: {weatherData.description}</li>
              <li>Wind Speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
