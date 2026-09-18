import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import plantsData from "../data/plants";

const MoistureContext = createContext();

export function MoistureProvider({ children }) {
    const [plants, setPlants] = useState(plantsData);

    const [moistureSettings, setMoistureSettings] = useState({});

    const updateMoistureSetting = (plantId, minimum, maximum) => {
        setMoistureSettings((previousSettings) => ({
            ...previousSettings,
            [plantId]: {
                minimum: Number(minimum),
                maximum: Number(maximum)
            }
        }));
    };

    const getMoistureSetting = (plantId) => {
        return (
            moistureSettings[plantId] || {
                minimum: 40,
                maximum: 70
            }
        );
    };

    const refreshPlants = () => {
        setPlants((previousPlants) =>
            previousPlants.map((plant) => ({
                ...plant,
                moisture: Math.floor(Math.random() * 100) + 1
            }))
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            refreshPlants();
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <MoistureContext.Provider
            value={{
                plants,
                moistureSettings,
                updateMoistureSetting,
                getMoistureSetting,
                refreshPlants
            }}
        >
            {children}
        </MoistureContext.Provider>
    );
}

export function useMoisture() {
    return useContext(MoistureContext);
}