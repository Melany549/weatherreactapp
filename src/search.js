import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Currentdate from "./currentdate";
import AppForecast from "./appForecast";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./weatherTemperature";

export default function Search(props) {
  const [result, setResult] = useState({ ready: false });
  const [weather, setWeather] = useState(props.mainCity);

  function displayWeather(response) {
    setResult({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      cityName: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setWeather(event.target.value);
    
  }

  function search() {
    const apiKey = "1b4oade44afe2b7ce1f6c19030d6t0b5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weather}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form id="cityinput" onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="⌕" />
    </form>
  );

  if (result.ready) {
    return (
      <div className="container">
        <div className="row" id="search">
          <div className="col">
            {form}
            <div>
              <Currentdate />
            </div>
            <h2 className="mainCity">{result.cityName}</h2>
            <ul>
              <li>
              <WeatherIcon code={result.icon} size={70} />
              </li>
              <WeatherTemperature celsius= {result.temperature} />
              
              <li>{result.description}</li>
              <li>Humidity: {result.humidity}%</li>
              <li>Wind: {result.wind} km/h</li>
            </ul>
          </div>
        </div>
        <AppForecast data={result} />
       
      </div>
    );
  } else {
    search();
    return form;
  }
}