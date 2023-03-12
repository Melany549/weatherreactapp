import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Currentdate from "./currentDate";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [result, setResult] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setResult({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function search (){
  const apiKey = "7cb2a32ea8de3f803ad9b28912dac910";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);}

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

  if (result.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
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
                    className="todayimg"
                    src={`https://openweathermap.org/img/wn/${result.icon}.png`}
                    alt={result.description}
                  />
                  <span className="temp">{Math.round(result.temperature)}°C</span>
                </li>

                <li>Description: {result.description}</li>
                <li>Humidity: {result.humidity}%</li>
                <li>Wind: {result.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col"><ul><li>Wedesday</li>
          <li><img
                  src={`https://openweathermap.org/img/wn/${result.icon}.png`}
                  alt={result.description}
                /></li><li>9°</li></ul></div>
          <div className="col"><ul><li>Thursday</li>
          <li><img
                  src={`https://openweathermap.org/img/wn/${result.icon}.png`}
                  alt={result.description}
                /></li><li>9°</li></ul></div>
          <div className="col"><ul><li>Friday</li>
          <li><img
                  src={`https://openweathermap.org/img/wn/${result.icon}.png`}
                  alt={result.description}
                /></li><li>9°</li></ul></div>
        </div></form>
      </div>
      
      
      
    );
    
    
  } else {
    search();
    return "loading..."

  }
}
