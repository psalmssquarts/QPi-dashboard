import { useMoisture } from "../context/MoistureContext";

function Alerts() {
    const {
        plants,
        getMoistureSetting
    } = useMoisture();

    const alertPlants = plants.filter((plant) => {
        const setting = getMoistureSetting(plant.id);

        return (
            plant.moisture < setting.minimum ||
            plant.moisture > setting.maximum
        );
    });

    return (
        <section className="page-container">
            <h1>Plant Alerts</h1>

            <p>
                These plants are outside their configured moisture range.
            </p>

            {alertPlants.length === 0 ? (
                <div className="success-message">
                    ✅ All plants are within their recommended moisture
                    conditions.
                </div>
            ) : (
                <div className="alerts-list">
                    {alertPlants.map((plant) => {
                        const setting = getMoistureSetting(plant.id);

                        const isTooDry =
                            plant.moisture < setting.minimum;

                        return (
                            <div
                                className="alert-card"
                                key={plant.id}
                            >
                                <h3>{plant.name}</h3>

                                <p>
                                    Current moisture:{" "}
                                    <strong>{plant.moisture}%</strong>
                                </p>

                                <p>
                                    Recommended range:{" "}
                                    <strong>
                                        {setting.minimum}% -{" "}
                                        {setting.maximum}%
                                    </strong>
                                </p>

                                {isTooDry ? (
                                    <p className="dry-alert">
                                        ⚠ This plant is too dry and may need
                                        watering.
                                    </p>
                                ) : (
                                    <p className="wet-alert">
                                        ⚠ This plant is too wet.
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Alerts;