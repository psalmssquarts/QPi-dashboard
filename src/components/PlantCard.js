function PlantCard(props) {

    const statusClass =
    props.status === "Good"
        ? "good"
        : props.status === "Warning"
        ? "warning"
        : "critical";
    return (
        <div className="plant-card">

            <h2>{props.name}</h2>

            <p>Moisture: {props.moisture}%</p>

            <p>Temperature: {props.temperature}°C</p>

            <p>Light: {props.light}%</p>

            <p className={statusClass}>Status: {props.status}</p>

        </div>
    );

}

export default PlantCard;