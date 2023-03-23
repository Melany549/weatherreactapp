import axios from "axios";
import React, { useState} from "react";
import ForecastDay from "./forecastDay";


export default function AppForecast (props) {
  let [loaded, setLoaded]= useState(false);
  let [forecast,setForecast] = useState(null);


  function handleSubmitForecast(response) {
  
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    console.log(forecast);

    return  (
    
    <div className="AppForecast">
      <div className="row">
        <div className="col">
       <ForecastDay data={forecast[1]}  />
        </div>
        <div className="col">
       <ForecastDay data={forecast[2]}  />
        </div>
        <div className="col">
       <ForecastDay data={forecast[3]}  />
        </div>
        <div className="col">
       <ForecastDay data={forecast[4]}  />
        </div>
        <div className="col">
       <ForecastDay data={forecast[5]}  />
        </div>
      </div>
   </div>);

} else { 

  let apiKey="1b4oade44afe2b7ce1f6c19030d6t0b5"; 
  let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.data.cityName}&key=${apiKey}`;

axios.get(apiUrl).then(handleSubmitForecast);
return null;   
}
 
  


}