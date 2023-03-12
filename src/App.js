
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from './search';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
      
        <h1 id="mainCity">
         Weather Search
        </h1>
      
      <Search mainCity="New York"/>
      
    
      </header>
    </div>
   </div> 

    
  );
 
}
  




