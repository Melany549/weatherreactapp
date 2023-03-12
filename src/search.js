import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Currentdate from "./currentdate";

export default function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = "";
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=260693d14bfef0618d9771c4a5f5a5bb&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=260693d14bfef0618d9771c4a5f5a5bb&units=metric`;
    }
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form id="cityinput" onSubmit={handleSubmit}>
      <input
        type="search"
        value={city}
        placeholder="Enter a city"
        onChange={updateCity}
      />
      <input type="submit" value="⌕" />
    </form>
  );

  if (result) {
    return (
      <div className="container">
        <div className="row" id="search">
          <div className="col">
            {form}
            <div>
              <Currentdate />
            </div>
            <h2>{city}</h2>
            <ul>
              <li>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                />
              </li>
              <li>Temperature: {Math.round(weather.temperature)}°C</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col"><ul><li>Wedesday</li>
          <li><img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                /></li><li>9°</li></ul></div>
          <div className="col"><ul><li>Thursday</li>
          <li><img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                /></li><li>9°</li></ul></div>
          <div className="col"><ul><li>Friday</li>
          <li><img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                /></li><li>9°</li></ul></div>
        </div>
      </div>
      
      
    );
    
    
  } else {
    return form;
  }
}