import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button
                className={`menu-button ${isOpen ? "move-button" : ""}`}
                onClick={toggleSidebar}
                aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-comp">
                    <div className="sidebar-header">
                        <h2>QPi PlantCare</h2>

                        {/* <button
                            className="close-button"
                            onClick={closeSidebar}
                            aria-label="Close sidebar"
                        >
                            ✕
                        </button> */}
                    </div>

                    <div className="sidebar-content">
                        <NavLink
                            to="/dashboard"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                
                        >
                            🏠 Dashboard
                        </NavLink>

                        <NavLink
                            to="/plants"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            🌱 Plants
                        </NavLink>

                        <NavLink
                            to="/analytics"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            📊 Analytics
                        </NavLink>

                        <NavLink
                            to="/alerts"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            🔔 Alerts
                        </NavLink>

                        <NavLink
                            to="/settings"
                            onClick={closeSidebar}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            ⚙ Settings
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;