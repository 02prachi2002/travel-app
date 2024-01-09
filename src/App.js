import './App.css';
import data from './data';
import {useState} from "react";
import React from 'react';
import Tour from './components/Tour';
function App() {
  const [tours, settours] = useState (data);
  function removetour(id){
    const newtour = tours.filter(tour => tour.id !== id);
    settours(newtour);
  }

  if(tours.length===0){
   return(
    <div className='lastpage'>
      <div className='notours'>No tours left</div>
      <button className="refreshbtn"onClick={() => settours(data)}>Refresh</button>
    </div>
   )
  }
  return (
    <div className="App">
      <Tour tours = {tours} removetour={removetour}></Tour>
    </div>
  );
}

export default App;
