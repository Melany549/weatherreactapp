
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from './search';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1 id="mainCity">
         Weather Search
        </h1>
      
      <Search />
      
    
      </header>
    </div>
    

    
  );
 
}
  

export default App;
