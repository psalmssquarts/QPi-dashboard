import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Plants from "./components/Plants";
import Analytics from "./components/Analytics";
import Alerts from "./components/Alerts";
import Settings from "./components/Settings";

import { MoistureProvider } from "./context/MoistureContext";

function App() {
    return (
        <MoistureProvider>
            <BrowserRouter>
                <Sidebar />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/plants" element={<Plants />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/alerts" element={<Alerts />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </MoistureProvider>
    );
}

export default App;