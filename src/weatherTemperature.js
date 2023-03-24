import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius (event){
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit(){
    return (props.celsius*9)/5+32
  }
  if (unit === "celsius") {
    return (
      <div className="weatherTemp">
        <li className="mainTemp">
          {Math.round(props.celsius)}
          <span >
            °C 
            <a className="unit"href="/" onClick={ShowFahrenheit}>
              {" "}
              °F
            </a>
          </span>
        </li>
      </div>
    );
  } else {
    return (
      <div className="weatherTemp">
        <li className="mainTemp">
          {Math.round(fahrenheit())}
          <span >
            <a className="unit"href="/" onClick={showCelsius}>
              °C{" "}
            </a>
             °F
          </span>
        </li>
      </div>
    );
  }
}
