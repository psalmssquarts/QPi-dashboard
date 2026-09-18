import PlantCard from "./PlantCard";
import { useState } from "react";
import logo from "../assets/qpi-logo.png";
import { useMoisture } from "../context/MoistureContext";

function Dashboard() {
    const [showCritical, setShowCritical] = useState(false);

    const {
        plants,
        getMoistureSetting
    } = useMoisture();

    const getPlantStatus = (plant) => {
        const setting = getMoistureSetting(plant.id);

        if (plant.moisture < setting.minimum) {
            return "Critical";
        }

        if (plant.moisture > setting.maximum) {
            return "Warning";
        }

        return "Good";
    };

    const displayedPlants = showCritical
        ? plants.filter((plant) => getPlantStatus(plant) === "Critical")
        : plants;

    const totalPlants = plants.length;

    const criticalPlants = plants.filter(
        (plant) => getPlantStatus(plant) === "Critical"
    ).length;

    const healthyPlants = plants.filter(
        (plant) => getPlantStatus(plant) === "Good"
    ).length;

    return (
        <div className="dashboard-container">
            <header className="header">
                <div className="intro">
                    <h1>QPi PlantCare Dashboard</h1>
                    <p>Real-time monitoring of plant health</p>
                </div>

                <img
                    src={logo}
                    alt="QPi PlantCare logo"
                    className="logo"
                />
            </header>

            <section className="stats">
                <div className="stat-card">
                    <h3>Total Plants</h3>
                    <h2>{totalPlants}</h2>
                </div>

                <div className="stat-card">
                    <h3>Healthy</h3>
                    <h2 style={{ color: "#2e7d32" }}>
                        {healthyPlants}
                    </h2>
                </div>

                <div className="stat-card">
                    <h3>Critical</h3>
                    <h2 style={{ color: "red" }}>
                        {criticalPlants}
                    </h2>
                </div>
            </section>

            <section className="actions">
                <button
                    onClick={() => setShowCritical(!showCritical)}
                    className="filter-btn"
                >
                    {showCritical
                        ? "Show All Plants"
                        : "Show Critical Plants"}
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
                        status={getPlantStatus(plant)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;