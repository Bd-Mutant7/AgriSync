import "./Vehicle.css";
import { InputField } from "../../components/InputModal";
import { SelectField } from "../../components/SelectModal";
import { ActionButton } from "../../components/ActionButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, updateVehicle, deleteVehicle } from "../../reducers/VehicleSlice";
import { useState } from "react";
import { Vehicle as VehicleModel } from "../../models/Vehicle";
import { RootState } from "../../store/Store";
import { FaCar, FaGasPump, FaCheckCircle, FaTimesCircle, FaUser, FaComment, FaSave, FaEdit, FaTrash } from "react-icons/fa";

export function Vehicle() {
    const dispatch = useDispatch();
    const vehicles = useSelector((state: RootState) => state.vehicle);
    const staff = useSelector((state: RootState) => state.staff);
    const [vehicle, setVehicle] = useState<VehicleModel>({} as VehicleModel);

    
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
        gap: "8px"
    };

    const vehicleCategories = [
        { value: "CAR", label: "CAR", icon: <FaCar /> },
        { value: "TRUCK", label: "TRUCK", icon: <FaCar /> },
        { value: "TRACTOR", label: "TRACTOR", icon: <FaCar /> },
        { value: "VAN", label: "VAN", icon: <FaCar /> },
        { value: "SUV", label: "SUV", icon: <FaCar /> },
        { value: "CRANE", label: "CRANE", icon: <FaCar /> },
        { value: "ATV", label: "ATV", icon: <FaCar /> },
    ];

    const fuelTypes = [
        { value: "PETROL", label: "PETROL", icon: <FaGasPump /> },
        { value: "DIESEL", label: "DIESEL", icon: <FaGasPump /> },
    ];

    const statuses = [
        { value: "AVAILABLE", label: "AVAILABLE", icon: <FaCheckCircle /> },
        { value: "NOT_AVAILABLE", label: "NOT AVAILABLE", icon: <FaTimesCircle /> },
        { value: "UNDER_MAINTENANCE", label: "UNDER MAINTENANCE", icon: <FaTimesCircle /> },
    ];

    const handleSave = () => {
        if (vehicle) {
            dispatch(addVehicle(vehicle));
            setVehicle({} as VehicleModel);
            const form = document.getElementById("vehicleForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (vehicle) {
            dispatch(updateVehicle(vehicle));
            setVehicle({} as VehicleModel);
            const form = document.getElementById("vehicleForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (vehicle) {
            dispatch(deleteVehicle(vehicle));
            setVehicle({} as VehicleModel);
            const form = document.getElementById("vehicleForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setVehicle(prev => ({ ...prev, [name]: value } as VehicleModel));
    };

    const handleRowDoubleClick = (v: VehicleModel) => {
        setVehicle(v);
    };

    return (
        <div className="container" id="vehicleSection" style={{ padding: "20px" }}>
            <div className="container mt-3">
                <h2 className="text-center mb-4" style={headerStyle}>
                    <FaCar /> Vehicle Management
                </h2>

                <form id="vehicleForm" style={{ marginBottom: "30px" }}>
                    {/* Basic Information Row */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label htmlFor="vehicleCode" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                Vehicle Code
                            </label>
                            <InputField
                                label=""
                                id="vehicleCode"
                                name="vehicleCode"
                                required
                                style={inputStyle}
                                value={vehicle.vehicleCode || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="licensePlateNumber" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                License Plate Number
                            </label>
                            <InputField
                                label=""
                                id="licensePlateNumber"
                                name="licensePlateNumber"
                                required
                                style={inputStyle}
                                value={vehicle.licensePlateNumber || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Category & Status Row */}
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <label htmlFor="vehicleCategory" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaCar style={{ marginRight: "6px" }} />
                                Vehicle Category
                            </label>
                            <SelectField
                                label=""
                                id="vehicleCategory"
                                name="vehicleCategory"
                                options={vehicleCategories.map(cat => ({ ...cat, label: `${cat.label}` }))}
                                required
                                style={inputStyle}
                                value={vehicle.vehicleCategory || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="fuelType" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaGasPump style={{ marginRight: "6px" }} />
                                Fuel Type
                            </label>
                            <SelectField
                                label=""
                                id="fuelType"
                                name="fuelType"
                                options={fuelTypes.map(fuel => ({ ...fuel, label: `${fuel.label}` }))}
                                required
                                style={inputStyle}
                                value={vehicle.fuelType || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="status" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                Status
                            </label>
                            <SelectField
                                label=""
                                id="status"
                                name="status"
                                options={statuses.map(status => ({ 
                                    ...status, 
                                    label: status.value === "AVAILABLE" ? "AVAILABLE" : status.value === "NOT_AVAILABLE" ? "NOT AVAILABLE" : "UNDER MAINTENANCE"
                                }))}
                                required
                                style={inputStyle}
                                value={vehicle.status || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Assignment & Remarks Row */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label htmlFor="allocatedStaffId" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaUser style={{ marginRight: "6px" }} />
                                Allocated Staff
                            </label>
                            <SelectField
                                label=""
                                id="allocatedStaffId"
                                name="allocatedStaffId"
                                options={[
                                    { value: "", label: "Select Staff" },
                                    ...staff.map(s => ({ 
                                        value: s.staffId, 
                                        label: `${s.staffId} - ${s.firstName} ${s.lastName}` 
                                    }))
                                ]}
                                required
                                style={inputStyle}
                                value={vehicle.allocatedStaffId || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="remarks" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>
                                <FaComment style={{ marginRight: "6px" }} />
                                Remarks
                            </label>
                            <InputField
                                label=""
                                id="remarks"
                                name="remarks"
                                style={inputStyle}
                                value={vehicle.remarks || ""}
                                onChange={handleChange}
                                placeholder="Enter any remarks..."
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12 d-flex justify-content-start gap-3">
                            <ActionButton 
                                id="saveVbtn" 
                                label={
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaSave /> SAVE
                                    </span>
                                } 
                                style={buttonStyle} 
                                onClick={handleSave}
                            />
                            <ActionButton 
                                id="updateVbtn" 
                                label={
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaEdit /> UPDATE
                                    </span>
                                } 
                                style={{ ...buttonStyle, background: "linear-gradient(135deg, #3498db, #9b59b6)" }} 
                                onClick={handleUpdate}
                            />
                            <ActionButton 
                                id="deleteVbtn" 
                                label={
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaTrash /> DELETE
                                    </span>
                                } 
                                style={{ ...buttonStyle, background: "linear-gradient(135deg, #e74c3c, #c0392b)" }} 
                                onClick={handleDelete}
                            />
                        </div>
                    </div>
                </form>

                {/* Vehicle Table */}
                <table 
                    className="table table-bordered table-striped table-hover" 
                    id="vTable"
                    style={{ 
                        borderRadius: "12px", 
                        overflow: "hidden", 
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        marginTop: "20px"
                    }}
                >
                    <thead className="thead-dark" style={{
                        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                        color: "white",
                        fontWeight: "600",
                        border: "none"
                    }}>
                        <tr>
                            <th>Vehicle Code</th>
                            <th>License Plate</th>
                            <th>Category</th>
                            <th>Fuel Type</th>
                            <th>Status</th>
                            <th>Allocated Staff</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody id="vTbody" style={{ backgroundColor: "#f8f9fa" }}>
                        {vehicles.map((v: VehicleModel) => (
                            <tr 
                                key={v.vehicleCode} 
                                onDoubleClick={() => handleRowDoubleClick(v)}
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
                                        {v.vehicleCode}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    <span style={{
                                        padding: "4px 10px",
                                        backgroundColor: "rgba(52, 152, 219, 0.15)",
                                        borderRadius: "4px",
                                        fontWeight: "600",
                                        color: "#3498db"
                                    }}>
                                        {v.licensePlateNumber}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <FaCar size={12} color="#7f8c8d" />
                                        {v.vehicleCategory}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <FaGasPump size={12} color="#7f8c8d" />
                                        {v.fuelType}
                                    </span>
                                </td>
                                <td>
                                    <span style={{
                                        padding: "4px 12px",
                                        borderRadius: "20px",
                                        fontSize: "0.85rem",
                                        fontWeight: "600",
                                        backgroundColor: v.status === "AVAILABLE" 
                                            ? "rgba(46, 204, 113, 0.15)" 
                                            : v.status === "UNDER_MAINTENANCE"
                                            ? "rgba(241, 196, 15, 0.15)"
                                            : "rgba(231, 76, 60, 0.15)",
                                        color: v.status === "AVAILABLE" 
                                            ? "#27ae60" 
                                            : v.status === "UNDER_MAINTENANCE"
                                            ? "#f39c12"
                                            : "#e74c3c"
                                    }}>
                                        {v.status.replace("_", " ")}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    {v.allocatedStaffId ? (
                                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <FaUser size={12} color="#7f8c8d" />
                                            {v.allocatedStaffId}
                                        </span>
                                    ) : "Not Assigned"}
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {v.remarks || "No remarks"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {vehicles.length === 0 && (
                    <div className="text-center py-5" style={{ color: "#7f8c8d" }}>
                        <FaCar size={48} style={{ marginBottom: "20px", opacity: 0.5 }} />
                        <h5>No Vehicle Records Found</h5>
                        <p>Add new vehicles using the form above</p>
                    </div>
                )}
            </div>
        </div>
    );
}
