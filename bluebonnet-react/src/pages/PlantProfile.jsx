// Import using relational paths
import '../App.css';


function PlantProfile({setScreen, plant, forum}) { // passed in from App -- use {} for parameter lists
  // Write in Javascript here


  return (
    <div className="plant-profile page">
      <h1> Plant Profile </h1>
      <h2> {plant.name} </h2>
      <p> {plant.description} </p>
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {PlantProfile}; 
// Use {} notation to export more than one component;
