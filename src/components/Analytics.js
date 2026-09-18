import { useMoisture } from "../context/MoistureContext";

function Analytics() {
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

    const totalPlants = plants.length;

    const healthyPlants = plants.filter(
        (plant) => getPlantStatus(plant) === "Good"
    ).length;

    const criticalPlants = plants.filter(
        (plant) => getPlantStatus(plant) === "Critical"
    ).length;

    const warningPlants = plants.filter(
        (plant) => getPlantStatus(plant) === "Warning"
    ).length;

    const averageMoisture =
        totalPlants === 0
            ? 0
            : (
                  plants.reduce(
                      (total, plant) => total + plant.moisture,
                      0
                  ) / totalPlants
              ).toFixed(1);

    return (
        <section className="page-container">
            <h1>Plant Analytics</h1>

            <p>
                Analyze the current moisture conditions and health status of
                your plants.
            </p>

            <div className="analytics-grid">
                <div className="analytics-card">
                    <h3>🌱 Total Plants</h3>
                    <strong>{totalPlants}</strong>
                </div>

                <div className="analytics-card">
                    <h3>💧 Average Moisture</h3>
                    <strong>{averageMoisture}%</strong>
                </div>

                <div className="analytics-card">
                    <h3>💚 Healthy Plants</h3>
                    <strong>{healthyPlants}</strong>
                </div>

                <div className="analytics-card">
                    <h3>⚠️ Critical Plants</h3>
                    <strong>{criticalPlants}</strong>
                </div>

                <div className="analytics-card">
                    <h3>🌊 Wet Plants</h3>
                    <strong>{warningPlants}</strong>
                </div>
            </div>

            <div className="analytics-table-container">
              <div className="analysis-heading">
                 <div>
                   <h2>Plant Moisture Analysis</h2>
            <p>
                Current moisture readings compared with each plant's
                configured moisture range.
            </p>
        </div>

        <span className="analysis-count">
            {plants.length} Plants
        </span>
    </div>

    <div className="table-wrapper">
        <table className="analytics-table">
            <thead>
                <tr>
                    <th>Plant</th>
                    <th>Current Moisture</th>
                    <th>Configured Range</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {plants.map((plant) => {
                    const setting = getMoistureSetting(plant.id);
                    const status = getPlantStatus(plant);

                    return (
                        <tr key={plant.id}>
                            <td>
                                <div className="plant-name-cell">
                                    <span className="plant-icon">🌱</span>
                                    <strong>{plant.name}</strong>
                                </div>
                            </td>

                            <td>
                                <span className="moisture-value">
                                    {plant.moisture}%
                                </span>
                            </td>

                            <td>
                                <span className="range-value">
                                    {setting.minimum}% - {setting.maximum}%
                                </span>
                            </td>

                            <td>
                                <span
                                    className={`status-badge ${status.toLowerCase()}`}
                                >
                                    {status === "Good" && "✓"}
                                    {status === "Critical" && "!"}
                                    {status === "Warning" && "⚠"}
                                    {status}
                                </span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
</div>
        </section>
    );
}

export default Analytics;