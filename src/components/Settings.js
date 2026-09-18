import { useState } from "react";
import plants from "../data/plants";
import { useMoisture } from "../context/MoistureContext";

function Settings() {
    const {
        getMoistureSetting,
        updateMoistureSetting
    } = useMoisture();

    const [message, setMessage] = useState("");

    const handleSave = (plantId, minimum, maximum) => {
        const minValue = Number(minimum);
        const maxValue = Number(maximum);

        if (
            minValue < 0 ||
            maxValue > 100 ||
            minValue >= maxValue
        ) {
            setMessage(
                "Minimum moisture must be lower than maximum moisture, and values must be between 0 and 100."
            );
            return;
        }

        updateMoistureSetting(plantId, minValue, maxValue);
        setMessage("✅ Moisture condition updated successfully.");
    };

    return (
        <section className="page-container">
            <h1>Moisture Settings</h1>

            <p>
                Configure the optimum moisture condition for each plant.
            </p>

            <div className="settings-list">
                {plants.map((plant) => {
                    const setting = getMoistureSetting(plant.id);

                    return (
                        <PlantMoistureSetting
                            key={plant.id}
                            plant={plant}
                            setting={setting}
                            onSave={handleSave}
                        />
                    );
                })}
            </div>

            {message && (
                <p className="settings-message">
                    {message}
                </p>
            )}
        </section>
    );
}

function PlantMoistureSetting({
    plant,
    setting,
    onSave
}) {
    const [minimum, setMinimum] = useState(setting.minimum);
    const [maximum, setMaximum] = useState(setting.maximum);

    return (
        <div className="plant-setting-card">
            <div className="plant-setting-heading">
                <h3>{plant.name}</h3>

                <span>
                    Current moisture: {plant.moisture}%
                </span>
            </div>

            <div className="moisture-inputs">
                <div className="form-group">
                    <label htmlFor={`minimum-${plant.id}`}>
                        Minimum moisture (%)
                    </label>

                    <input
                        id={`minimum-${plant.id}`}
                        type="number"
                        min="0"
                        max="100"
                        value={minimum}
                        onChange={(event) =>
                            setMinimum(event.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label htmlFor={`maximum-${plant.id}`}>
                        Maximum moisture (%)
                    </label>

                    <input
                        id={`maximum-${plant.id}`}
                        type="number"
                        min="0"
                        max="100"
                        value={maximum}
                        onChange={(event) =>
                            setMaximum(event.target.value)
                        }
                    />
                </div>
            </div>

            <button
                className="save-button"
                onClick={() =>
                    onSave(plant.id, minimum, maximum)
                }
            >
                Save {plant.name} Settings
            </button>
        </div>
    );
}

export default Settings;