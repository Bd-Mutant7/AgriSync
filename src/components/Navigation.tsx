import { NavLink } from "react-router";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faList,
    faPaperPlane, 
    faRightFromBracket,
    faShapes,
    faTractor,
    faTrowel,
    faUsersBetweenLines
} from '@fortawesome/free-solid-svg-icons';
import {faPagelines} from "@fortawesome/free-brands-svg-icons";

export function Navigation() {
    return (
        <div className="sidebar">
            <div className="logo-menu">
                <h2 className="logo">Menu</h2>
            </div>
            <ul className="nav flex-column" id="list">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/dashboard"
                        id="btnDash"
                    >
                        <FontAwesomeIcon icon={faPaperPlane} size="lg"/>
                        <span className="nav-text">Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/vehicle"
                        id="btnVehicle"
                    >
                        <FontAwesomeIcon icon={faTractor} size="lg"/>
                        <span className="nav-text">Vehicles</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/crop"
                        id="btnCrop"
                    >
                        <FontAwesomeIcon icon={faPagelines} size="lg"/>
                        <span className="nav-text">Crops</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/staff"
                        id="btnStaff"
                    >
                        <FontAwesomeIcon icon={faUsersBetweenLines} size="lg"/>
                        <span className="nav-text">Staff</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/equipment"
                        id="btnEquipment"
                    >
                        <FontAwesomeIcon icon={faTrowel} size="lg"/>
                        <span className="nav-text">Equipment</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/field"
                        id="btnField"
                    >
                        <FontAwesomeIcon icon={faShapes} size="lg"/>
                        <span className="nav-text">Fields</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/log"
                        id="btnLog"
                    >
                        <FontAwesomeIcon icon={faList} size="lg"/>
                        <span className="nav-text">Monitoring</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        to="/logout"
                        id="btnLogout"
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} size="lg"/>
                        <span className="nav-text">Logout</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}