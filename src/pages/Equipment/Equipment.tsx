import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addEquipment, updateEquipment, deleteEquipment } from "../../reducers/EquipmentSlice";
import { Equipment as EquipmentModel } from "../../models/Equipment";
import { FaTools, FaSave, FaEdit, FaTrash, FaUser, FaTractor } from "react-icons/fa";

export function Equipment() {
    const dispatch = useDispatch();
    const equipmentList = useSelector((state: RootState) => state.equipment);
    const [equipment, setEquipment] = useState<EquipmentModel | null>(null);

    // UPDATED: Label style with gradient text
    const labelStyle = { 
        fontWeight: "600", 
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "linear-gradient(135deg, #1abc9c, #3498db)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
    };

    const staffOptions = [
        { id: "ST001", name: "John Doe" },
        { id: "ST002", name: "Jane Smith" },
        { id: "ST003", name: "Robert Johnson" },
    ];

    const fieldOptions = [
        { code: "FLD001", name: "North Field" },
        { code: "FLD002", name: "South Field" },
        { code: "FLD003", name: "East Field" },
    ];

    const handleSave = () => {
        if (equipment) {
            dispatch(addEquipment(equipment));
            setEquipment(null);
            const form = document.getElementById("equipmentForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (equipment) {
            dispatch(updateEquipment(equipment));
            setEquipment(null);
            const form = document.getElementById("equipmentForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (equipment) {
            dispatch(deleteEquipment(equipment));
            setEquipment(null);
            const form = document.getElementById("equipmentForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEquipment(prev => ({ ...prev, [name]: value } as EquipmentModel));
    };

    const handleRowDoubleClick = (eq: EquipmentModel) => {
        setEquipment(eq);
    };

    
    const headerStyle = { 
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)", 
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        marginBottom: "25px"
    };

    const inputStyle = { 
        backgroundColor: "#34495e", 
        color: "#ecf0f1",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px"
    };

    const buttonStyle = { 
        background: "linear-gradient(135deg, #1abc9c, #3498db)",
        border: "none",
        color: "white",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        padding: "10px 25px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "8px"
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <h2 className="text-center mt-3 mb-4" style={headerStyle}>
                <FaTools style={{ marginRight: "10px" }} />
                Equipment Management
            </h2>

            {/* Form for Equipment Entry */}
            <form id="equipmentForm" style={{ marginBottom: "30px" }}>
                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-3">
                        <label htmlFor="equipmentId" style={labelStyle}>
                            Equipment ID
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            style={inputStyle} 
                            id="equipmentId" 
                            name="equipmentId" 
                            required 
                            value={equipment?.equipmentId || ""} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="name1" style={labelStyle}>
                            Name
                        </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            style={inputStyle} 
                            id="name1" 
                            name="name" 
                            required 
                            value={equipment?.name || ""} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="type" style={labelStyle}>
                            Type
                        </label>
                        <select 
                            className="form-control" 
                            style={inputStyle} 
                            id="type" 
                            name="type" 
                            required 
                            value={equipment?.type || ""} 
                            onChange={handleChange}
                        >
                            <option value="" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>Select Type</option>
                            <option value="ELECTRICAL" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>ELECTRICAL</option>
                            <option value="MECHANICAL" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>MECHANICAL</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="status1" style={labelStyle}>
                            Status
                        </label>
                        <select 
                            className="form-control" 
                            style={inputStyle} 
                            id="status1" 
                            name="status" 
                            required 
                            value={equipment?.status || ""} 
                            onChange={handleChange}
                        >
                            <option value="" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>Select Status</option>
                            <option value="AVAILABLE" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>AVAILABLE</option>
                            <option value="NOT_AVAILABLE" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>NOT AVAILABLE</option>
                            <option value="UNDER_MAINTENANCE" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>UNDER MAINTENANCE</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="quantity" style={labelStyle}>
                            Quantity
                        </label>
                        <input 
                            type="number" 
                            className="form-control" 
                            style={inputStyle} 
                            id="quantity" 
                            name="equantity" 
                            required 
                            value={equipment?.equantity || ""} 
                            onChange={handleChange} 
                            min="1"
                        />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-3">
                        <label htmlFor="assignedStaffId" style={labelStyle}>
                            <FaUser />
                            Assigned Staff
                        </label>
                        <select 
                            className="form-control" 
                            style={inputStyle} 
                            id="assignedStaffId" 
                            name="assignedStaffId" 
                            value={equipment?.assignedStaffId || ""} 
                            onChange={handleChange}
                        >
                            <option value="" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>Select Staff</option>
                            {staffOptions.map(staff => (
                                <option 
                                    key={staff.id} 
                                    value={staff.id}
                                    style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}
                                >
                                    {staff.name} ({staff.id})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="assignedFieldCode" style={labelStyle}>
                            <FaTractor />
                            Assigned Field Code
                        </label>
                        <select 
                            className="form-control" 
                            style={inputStyle} 
                            id="assignedFieldCode" 
                            name="assignedFieldCode" 
                            value={equipment?.assignedFieldCode || ""} 
                            onChange={handleChange}
                        >
                            <option value="" style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>Select Field</option>
                            {fieldOptions.map(field => (
                                <option 
                                    key={field.code} 
                                    value={field.code}
                                    style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}
                                >
                                    {field.name} ({field.code})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-4 mb-3 col-md-12 d-flex justify-content-start gap-3">
                        <button 
                            type="button" 
                            className="btn mt-4" 
                            style={buttonStyle}
                            id="saveEq" 
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
                            <FaSave /> SAVE
                        </button>
                        <button 
                            type="button" 
                            className="btn mt-4" 
                            style={{ ...buttonStyle, background: "linear-gradient(135deg, #3498db, #9b59b6)" }}
                            id="updateEq" 
                            onClick={handleUpdate}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <FaEdit /> UPDATE
                        </button>
                        <button 
                            type="button" 
                            className="btn mt-4" 
                            style={{ ...buttonStyle, background: "linear-gradient(135deg, #e74c3c, #c0392b)" }}
                            id="deleteEq" 
                            onClick={handleDelete}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <FaTrash /> DELETE
                        </button>
                    </div>
                </div>
            </form>

            {/* Table to display equipment data */}
            <div className="table-container">
                <table 
                    className="table table-bordered table-striped table-hover" 
                    id="eqTable"
                    style={{ 
                        borderRadius: "12px", 
                        overflow: "hidden", 
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        marginTop: "20px"
                    }}
                >
                    <thead style={{
                        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                        color: "white",
                        fontWeight: "600",
                        border: "none"
                    }}>
                        <tr>
                            <th>Equipment ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Assigned Staff</th>
                            <th>Assigned Field Code</th>
                        </tr>
                    </thead>
                    <tbody id="equipmentTableBody" style={{ backgroundColor: "#f8f9fa" }}>
                        {equipmentList.map((eq) => (
                            <tr 
                                key={eq.equipmentId} 
                                onDoubleClick={() => handleRowDoubleClick(eq)}
                                style={{ 
                                    cursor: "pointer",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(26, 188, 156, 0.05)"}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ""}
                            >
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{eq.equipmentId}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{eq.name}</td>
                                <td>
                                    <span 
                                        style={{
                                            padding: "4px 12px",
                                            borderRadius: "20px",
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            backgroundColor: eq.type === "ELECTRICAL" 
                                                ? "rgba(52, 152, 219, 0.15)" 
                                                : "rgba(155, 89, 182, 0.15)",
                                            color: eq.type === "ELECTRICAL" ? "#3498db" : "#9b59b6"
                                        }}
                                    >
                                        {eq.type}
                                    </span>
                                </td>
                                <td>
                                    <span 
                                        style={{
                                            padding: "4px 12px",
                                            borderRadius: "20px",
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            backgroundColor: eq.status === "AVAILABLE" 
                                                ? "rgba(46, 204, 113, 0.15)" 
                                                : eq.status === "UNDER_MAINTENANCE"
                                                ? "rgba(241, 196, 15, 0.15)"
                                                : "rgba(231, 76, 60, 0.15)",
                                            color: eq.status === "AVAILABLE" 
                                                ? "#27ae60" 
                                                : eq.status === "UNDER_MAINTENANCE"
                                                ? "#f39c12"
                                                : "#e74c3c"
                                        }}
                                    >
                                        {eq.status.replace("_", " ")}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{eq.equantity}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{eq.assignedStaffId || "Not Assigned"}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{eq.assignedFieldCode || "Not Assigned"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {equipmentList.length === 0 && (
                    <div className="text-center py-5" style={{ color: "#7f8c8d" }}>
                        <FaTools size={48} style={{ marginBottom: "20px", opacity: 0.5 }} />
                        <h5>No Equipment Records Found</h5>
                        <p>Add new equipment using the form above</p>
                    </div>
                )}
            </div>
        </div>
    );
}
