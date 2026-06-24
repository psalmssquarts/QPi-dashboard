import PlantCard from "./PlantCard";
import plantsData from "../data/plants";
import getHealthStatus from "../utils/healthLogic";
import { useState } from "react";

function Dashboard() {
    
  const[showCritical,setShowCritical]=useState(false);
  const[plants,setPlants]= useState(plantsData);
  const displayedPlants = showCritical
    ? plants.filter((plant) => plant.moisture < 30)
    : plants;

function refreshPlants() {

const updatedPlants = plants.map((plant) => {

        return {

            ...plant,

            moisture: Math.floor(Math.random() * 100) + 1

        };

    });

    setPlants(updatedPlants);

}
   
 
  return (
  <div>

    <h1>QPi PlantCare Dashboard</h1>
<button
    onClick={() => setShowCritical(!showCritical)} className="filter-btn">

    {showCritical ? "Show All Plants" : "Show Critical Plants"}
</button>

    <div className="dashboard">

        {displayedPlants.map((plant) => (

            <PlantCard
                key={plant.id}
                name={plant.name}
                moisture={plant.moisture}
                temperature={plant.temperature}
                light={plant.light}
                status={getHealthStatus(plant.moisture)}
            />

        ))}

    </div>
<button onClick={refreshPlants} className="refresh-btn">
    Refresh Data
</button>

  </div> 

  );
}
export default Dashboard;