// Import using relational paths
import '../App.css';


function PlantSearch({setScreen}) {
  // Write in Javascript here


  return (
    <div className="plant-search page">
      <h1> Plant Search </h1>
      <button onClick={()=> setScreen("dashboard")}>Back To Dashboard</button>
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {PlantSearch}; 
// Use {} notation to export more than one component;
