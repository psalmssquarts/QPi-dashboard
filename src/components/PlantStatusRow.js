function PlantStatusRow({ plant, status }) {
    const statusClass = status
        .toLowerCase()
        // .replace(/\s+/g, "-");

    return (
        <div className="plant-status-row">
            <div className="plant-status-name">
                <span>{plant.name}</span>
            </div>

            <div className={`plant-status-badge ${statusClass}`}>
                {status}
            </div>
        </div>
    );
}

export default PlantStatusRow;