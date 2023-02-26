import React, {useState} from "react";
import axios from "axios";
import './App.css';

export default function Search() {
    let [city, setCity] = useState("");
    let [result, setResult] = useState(false);
    let [weather, setWeather] = useState({});
    
  
    function displayWeather(response) {
      setResult(true);
      setWeather({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        Wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        
      }); 
    }
  
    function handleSubmit(event) {
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=260693d14bfef0618d9771c4a5f5a5bb&units=metric`;
        axios.get(url).then(displayWeather);
      }
    
      function updateCity(event) {
        setCity(event.target.value);
      }
    
      let form = (
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Enter a city" onChange={updateCity} />
          <input type="submit" value="Search" />
        </form>
      );
    
      if (result) {
        return (
          <div>
            {form}
            
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°C</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
              <li>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                />
              </li>
            </ul>
          </div>
        );
      } else {
        return form;
      }
    }