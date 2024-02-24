// Import using relational paths
import '../App.css';
import React, { useState } from 'react';  
import {plantList, user} from "../AppConfig"


function List({}){
  const [collapseList, setCollapseList] = useState(false);  

  const handleCollapse = ()=>{
    setCollapseList(!collapseList);
  }

  return (

      <h2>Stable Plants </h2>
      <button onClick={handleCollapse}> {collapseList ? "Expand":"Collapse"} </button>
      {
        stablePlants.length == 0 && (
          <p> There are no stable plants. You are a terrible gardener.</p>
        )
      }

      {stablePlants.length > 0 && (<ul>  
        {!collapseList && stablePlants.map((plant) => (  
          <li key={plant.name}>{plant.name}</li>  
        ))}  
      </ul>)}  
    
  )
}

function Dashboard({setScreen}) { 
  

  // CONTROLLER
  const endangeredPlants = plantList.filter((plant)=>{
    return plant.warning.length > 0;
  });
  const stablePlants = plantList.filter((plant)=>{
    return plant.warning.length === 0;
  });

 

  // VIEW
  return (
    <div className="dashboard page">
      <h1> Hello, {user} </h1>
      <List/>
      <List/>
      <button onClick={()=> setScreen("plant-search")}>Add Plant</button>
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {Dashboard}; 
// Use {} notation to export more than one component;
