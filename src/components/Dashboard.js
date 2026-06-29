import PlantCard from "./PlantCard";
import plantsData from "../data/plants";
import getHealthStatus from "../utils/healthLogic";
import { useState,useEffect } from "react";
import logo from"../assets/logo.png";

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

const totalPlants = plants.length;

const criticalPlants =
    plants.filter(
        plant => plant.moisture < 30
    ).length;

const healthyPlants =
    plants.filter(
        plant => plant.moisture > 60
    ).length;

useEffect(() => {

    const timer = setInterval(() => {

        refreshPlants();

    }, 10000);

    return () => clearInterval(timer);

}, [refreshPlants]);   
   
 
  return (
  <div className="dashboard-container">
    <header>
    <div className="intro">
    <h1>QPi PlantCare Dashboard</h1> 
    <p>Real-time monitoring of plant health</p>
    </div>
    <img src={logo} alt="logo" className ="logo"/>
    </header>
    

    <section className="stats">

        <div className="stat-card">
        <h3> 🌱Total Plants</h3>
         <h2>{totalPlants}</h2>
         </div>

     <div className="stat-card">
        <h3>💚Healthy</h3>
         <h2 style={{color:'#2e7d32'}}>{healthyPlants}</h2>
         </div>

     <div className="stat-card">
        <h3>⚠️Critical</h3>
         <h2 style={{color:'red'}}>{criticalPlants}</h2>
         </div>

     </section>
    
   <section className="actions">
    <button
    onClick={() => setShowCritical(!showCritical)} className="filter-btn">

    {showCritical ? "Show All Plants" : "Show Critical Plants"}
</button>

<button onClick={refreshPlants} className="refresh-btn">
    🔃Refresh Data
</button>

    </section> 

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
  </div> 

  );
}
export default Dashboard;