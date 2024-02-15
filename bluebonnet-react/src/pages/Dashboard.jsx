// Import using relational paths
import '../App.css';


function Dashboard({setScreen}) { 
  // Write in Javascript here


  return (
    <div className="dashboard page">
      <h1> Dashboard </h1>
      <button onClick={()=> setScreen("plant-search")}>Add Plant</button>
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {Dashboard}; 
// Use {} notation to export more than one component;
