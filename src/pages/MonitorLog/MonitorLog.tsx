import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addLog } from "../../reducers/LogSlice";
import { Log } from "../../models/Log";
import { FaClipboardList, FaCalendarAlt, FaInfoCircle, FaUserTie, FaMapMarkerAlt, FaSave } from "react-icons/fa";

export function MonitorLog() {
    const dispatch = useDispatch();
    const logList = useSelector((state: RootState) => state.log.logs);
    const fieldList = useSelector((state: RootState) => state.field.fields);
    const [log, setLog] = useState<Log | null>(null);

  
    const headerStyle = { 
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)", 
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        marginBottom: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px"
    };

    const inputStyle = { 
        backgroundColor: "#34495e", 
        color: "#ecf0f1",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        width: "100%"
    };

    const buttonStyle = { 
        background: "linear-gradient(135deg, #1abc9c, #3498db)",
        border: "none",
        color: "white",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "10px 25px",
        borderRadius: "8px"
    };

    const navButtonStyle = {
        ...buttonStyle,
        background: "linear-gradient(135deg, #34495e, #2c3e50)",
        marginRight: "10px"
    };

    const handleSave = () => {
        if (log) {
            dispatch(addLog(log));
            setLog(null);
            const form = document.getElementById("logForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLog(prev => ({ ...prev, [name]: value } as Log));
    };

    const handleRowDoubleClick = (lg: Log) => {
        setLog(lg);
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <h2 className="text-center mb-4 mt-3" style={headerStyle}>
                <FaClipboardList /> Monitor Log
            </h2>

            {/* Navigation Buttons */}
            <div className="mb-4">
                <button 
                    type="button" 
                    className="btn" 
                    style={navButtonStyle}
                    id="navLog"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                    }}
                >
                    <FaClipboardList /> Logs
                </button>
                <button 
                    type="button" 
                    className="btn" 
                    style={navButtonStyle}
                    id="navCrop"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                    }}
                >
                    <FaClipboardList /> Crop Details
                </button>
            </div>

            <section id="log-page" className="container-fluid mt-3">
                <form id="logForm" style={{ marginBottom: "30px" }}>
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <label htmlFor="logCode" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaClipboardList style={{ marginRight: "6px" }} />
                                Log Code
                            </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                style={inputStyle} 
                                id="logCode" 
                                name="logCode" 
                                required 
                                value={log?.logCode || ""} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="logDate" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaCalendarAlt style={{ marginRight: "6px" }} />
                                Log Date
                            </label>
                            <input 
                                type="date" 
                                className="form-control" 
                                style={inputStyle} 
                                id="logDate" 
                                name="logDate" 
                                required 
                                value={log?.logDate || ""} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="logDetail" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaInfoCircle style={{ marginRight: "6px" }} />
                                Log Details
                            </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                style={inputStyle} 
                                id="logDetail" 
                                name="logDetails" 
                                required 
                                value={log?.logDetails || ""} 
                                onChange={handleChange} 
                                placeholder="Enter log details..."
                            />
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-3">
                            <label htmlFor="role" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaUserTie style={{ marginRight: "6px" }} />
                                Role
                            </label>
                            <select 
                                className="form-control" 
                                style={inputStyle} 
                                id="role" 
                                name="UserRole" 
                                value={log?.UserRole || ""} 
                                onChange={handleChange}
                            >
                                <option value="" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>Select Role</option>
                                <option value="ADMINISTRATIVE" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>ADMINISTRATIVE</option>
                                <option value="MANAGER" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>MANAGER</option>
                                <option value="SCIENTIST" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>SCIENTIST</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="fieldCode" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaMapMarkerAlt style={{ marginRight: "6px" }} />
                                Field Code
                            </label>
                            <select 
                                className="form-control" 
                                style={inputStyle} 
                                id="fieldCode" 
                                name="Field" 
                                value={log?.Field || ""} 
                                onChange={handleChange}
                            >
                                <option value="" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>Select Field</option>
                                {fieldList.map(field => (
                                    <option 
                                        key={field.fieldCode} 
                                        value={field.fieldCode}
                                        style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}
                                    >
                                        {field.fieldCode}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 col-md-12 d-flex justify-content-start">
                        <button 
                            type="button" 
                            className="btn" 
                            style={buttonStyle}
                            id="saveLog" 
                            onClick={handleSave}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <FaSave /> SAVE LOG
                        </button>
                    </div>
                </form>

                {/* Log Table */}
                <table 
                    className="table table-bordered table-striped table-hover" 
                    id="logTable"
                    style={{ 
                        borderRadius: "12px", 
                        overflow: "hidden", 
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        marginTop: "20px"
                    }}
                >
                    <thead className="table-header" style={{
                        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                        color: "white",
                        fontWeight: "600",
                        border: "none"
                    }}>
                        <tr>
                            <th scope="col">Log Code</th>
                            <th scope="col">Log Date</th>
                            <th scope="col">Log Details</th>
                            <th scope="col">Role</th>
                            <th scope="col">Field Code</th>
                        </tr>
                    </thead>
                    <tbody id="tblLog" style={{ backgroundColor: "#f8f9fa" }}>
                        {logList.map((lg) => (
                            <tr 
                                key={lg.logCode} 
                                onDoubleClick={() => handleRowDoubleClick(lg)}
                                style={{ 
                                    cursor: "pointer",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(26, 188, 156, 0.05)"}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ""}
                            >
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    <span style={{
                                        padding: "4px 10px",
                                        backgroundColor: "rgba(26, 188, 156, 0.15)",
                                        borderRadius: "4px",
                                        fontWeight: "600",
                                        color: "#1abc9c"
                                    }}>
                                        {lg.logCode}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <FaCalendarAlt size={12} color="#7f8c8d" />
                                        {lg.logDate}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{lg.logDetails}</td>
                                <td>
                                    <span style={{
                                        padding: "4px 12px",
                                        borderRadius: "20px",
                                        fontSize: "0.85rem",
                                        fontWeight: "600",
                                        backgroundColor: lg.UserRole === "ADMINISTRATIVE" 
                                            ? "rgba(231, 76, 60, 0.15)" 
                                            : lg.UserRole === "MANAGER"
                                            ? "rgba(52, 152, 219, 0.15)"
                                            : "rgba(46, 204, 113, 0.15)",
                                        color: lg.UserRole === "ADMINISTRATIVE" 
                                            ? "#e74c3c" 
                                            : lg.UserRole === "MANAGER"
                                            ? "#3498db"
                                            : "#27ae60"
                                    }}>
                                        {lg.UserRole}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{lg.Field}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {logList.length === 0 && (
                    <div className="text-center py-5" style={{ color: "#7f8c8d" }}>
                        <FaClipboardList size={48} style={{ marginBottom: "20px", opacity: 0.5 }} />
                        <h5>No Log Records Found</h5>
                        <p>Add new log entries using the form above</p>
                    </div>
                )}
            </section>
        </div>
    );
}
