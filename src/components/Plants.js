import { useMoisture } from "../context/MoistureContext";
import PlantStatusRow from "./PlantStatusRow";

function Plants() {
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

    return (
        <section className="page-container">
            <h1>All Plants</h1>

            <p>
                View all plants registered in the system and their current status.
            </p>

            <div className="plants-status-list">
                {plants.map((plant) => (
                    <PlantStatusRow
                        key={plant.id}
                        plant={plant}
                        status={getPlantStatus(plant)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Plants;