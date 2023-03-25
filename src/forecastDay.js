import React from "react";
import "./App.css";
import WeatherIcon from "./weatherIcon";
export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <ul>
      <li className="weekDay">{day()}</li>
      <li>
        <WeatherIcon code={props.data.condition.icon} size={38} />
      </li>
      <li className="dayTemp">
        <span>{Math.round(props.data.temperature.maximum)}°</span> /
        <span>{Math.round(props.data.temperature.minimum)}°</span>
      </li>
    </ul>
  );
}
