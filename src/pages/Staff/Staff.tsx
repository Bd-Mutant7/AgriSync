import { ActionButton } from "../../components/ActionButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addStaff, updateStaff, deleteStaff } from "../../reducers/StaffSlice";
import { useState } from "react";
import { Staff as StaffModel } from "../../models/Staff";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCar, FaVenusMars, FaBirthdayCake, FaBriefcase, FaSave, FaEdit, FaTrash } from "react-icons/fa";

export function Staff() {
    const dispatch = useDispatch();
    const staffList = useSelector((state: RootState) => state.staff);
    const [staff, setStaff] = useState<StaffModel | null>(null);

   
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

    // UPDATED: Section header style with gradient text
    const sectionHeaderStyle = { 
        marginBottom: "20px", 
        borderBottom: "2px solid #1abc9c", 
        paddingBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "linear-gradient(135deg, #2c3e50, #34495e)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: "600"
    };

    const genderOptions = [
        { value: "MALE", label: "Male" },
        { value: "FEMALE", label: "Female" },
    ];

  
    const fieldCodeOptions = [
        { value: "", label: "Select Field Code" },
        { value: "FLD001", label: "FLD001 - North Field" },
        { value: "FLD002", label: "FLD002 - South Field" },
        { value: "FLD003", label: "FLD003 - East Field" },
    ];

    const vehicleCodeOptions = [
        { value: "", label: "Select Vehicle Code" },
        { value: "VH001", label: "VH001 - Truck" },
        { value: "VH002", label: "VH002 - Tractor" },
        { value: "VH003", label: "VH003 - Van" },
    ];

    const handleSave = () => {
        if (staff) {
            dispatch(addStaff(staff));
            setStaff(null);
            const form = document.getElementById("staffForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (staff) {
            dispatch(updateStaff(staff));
            setStaff(null);
            const form = document.getElementById("staffForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (staff) {
            dispatch(deleteStaff(staff.staffId));
            setStaff(null);
            const form = document.getElementById("staffForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStaff(prev => ({ ...prev, [name]: value } as StaffModel));
    };

    const handleRowDoubleClick = (s: StaffModel) => {
        setStaff(s);
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <div className="container-fluid mt-3">
                <h2 className="text-center mb-4" style={headerStyle}>
                    <FaUser /> Staff Management
                </h2>
                
                <form id="staffForm">
                    {/* Personal Information Section */}
                    <div className="form-section mb-4 p-4" style={{ background: "linear-gradient(145deg, rgba(52, 152, 219, 0.05), rgba(26, 188, 156, 0.05))", borderRadius: "12px" }}>
                        <h5 style={sectionHeaderStyle}>
                            <FaUser /> Personal Information
                        </h5>
                        
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="staffId1" style={labelStyle}>
                                    Staff ID
                                </label>
                                <input type="text" className="form-control" id="staffId1" name="staffId" value={staff?.staffId || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="firstName" style={labelStyle}>
                                    First Name
                                </label>
                                <input type="text" className="form-control" id="firstName" name="firstName" required value={staff?.firstName || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="lastName" style={labelStyle}>
                                    Last Name
                                </label>
                                <input type="text" className="form-control" id="lastName" name="lastName" required value={staff?.lastName || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="designation" style={labelStyle}>
                                    <FaBriefcase />
                                    Designation
                                </label>
                                <input type="text" className="form-control" id="designation" name="designation" required value={staff?.designation || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="gender" style={labelStyle}>
                                    <FaVenusMars />
                                    Gender
                                </label>
                                <select className="form-control" id="gender" name="gender" style={inputStyle} value={staff?.gender || ''} onChange={handleChange}>
                                    {genderOptions.map(option => (
                                        <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="joinedDate" style={labelStyle}>
                                    Joined Date
                                </label>
                                <input type="date" className="form-control" id="joinedDate" name="joinedDate" required value={staff?.joinedDate || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="dob" style={labelStyle}>
                                    <FaBirthdayCake />
                                    Date of Birth
                                </label>
                                <input type="date" className="form-control" id="dob" name="dob" required value={staff?.dob || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="members" style={labelStyle}>
                                    Members
                                </label>
                                <input type="number" className="form-control" id="members" name="members" style={inputStyle} value={staff?.members || ''} onChange={handleChange} min="0" />
                            </div>
                        </div>
                    </div>

                    {/* Contact & Assignment Section */}
                    <div className="form-section mb-4 p-4" style={{ background: "linear-gradient(145deg, rgba(155, 89, 182, 0.05), rgba(52, 152, 219, 0.05))", borderRadius: "12px" }}>
                        <h5 style={{ ...sectionHeaderStyle, borderBottom: "2px solid #9b59b6" }}>
                            <FaMapMarkerAlt /> Contact & Assignment
                        </h5>
                        
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="contactNo" style={labelStyle}>
                                    <FaPhone />
                                    Contact No
                                </label>
                                <input type="text" className="form-control" id="contactNo" name="contactNo" required value={staff?.contactNo || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="email1" style={labelStyle}>
                                    <FaEnvelope />
                                    Email
                                </label>
                                <input type="email" className="form-control" id="email1" name="email" required value={staff?.email || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="fieldCode1" style={labelStyle}>
                                    <FaMapMarkerAlt />
                                    Field Code
                                </label>
                                <select className="form-control" id="fieldCode1" name="fieldCode" style={inputStyle} value={staff?.fieldCode || ''} onChange={handleChange}>
                                    {fieldCodeOptions.map(option => (
                                        <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="vCode" style={labelStyle}>
                                    <FaCar />
                                    Vehicle Code
                                </label>
                                <select className="form-control" id="vCode" name="vcode" style={inputStyle} value={staff?.vcode || ''} onChange={handleChange}>
                                    {vehicleCodeOptions.map(option => (
                                        <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>
                                            {option.label}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <div className="row">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div className="col-md-2 mb-3" key={num}>
                                    <label htmlFor={`addressLine${num}`} style={labelStyle}>
                                        Address Line {num}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id={`addressLine${num}`} 
                                        name={`addressLine${num}`} 
                                        required 
                                        value={staff?.[`addressLine${num}` as keyof StaffModel] as string || ''} 
                                        style={inputStyle} 
                                        onChange={handleChange} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="row mt-4 mb-4">
                        <div className="col-md-12 d-flex justify-content-start gap-3">
                            <ActionButton 
                                id="saveStaffBtn" 
                                label={
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaSave /> SAVE
                                    </span>
                                } 
                                style={buttonStyle} 
                                onClick={handleSave}
                            />
                            <ActionButton 
                                id="updateStaffBtn" 
                                label={
                                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <FaEdit /> UPDATE
                                    </span>
                                } 
                                style={{ ...buttonStyle, background: "linear-gradient(135deg, #3498db, #9b59b6)" }} 
                                onClick={handleUpdate}
                            />
                            <ActionButton 
                                id="deleteStaffBtn" 
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

                {/* Staff Table */}
                <div className="container mt-4">
                    <div style={{ overflowX: "auto", overflowY: "auto" }}>
                        <table 
                            className="table table-bordered table-striped table-hover" 
                            id="staffTable"
                            style={{ 
                                borderRadius: "12px", 
                                overflow: "hidden", 
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                minWidth: "1000px"
                            }}
                        >
                            <thead id="tableHead" style={{
                                background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
                                color: "white",
                                fontWeight: "600",
                                border: "none",
                                position: "sticky",
                                top: 0
                            }}>
                                <tr>
                                    <th>Staff ID</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Gender</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Field Code</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="staffTboady" style={{ backgroundColor: "#f8f9fa" }}>
                            {Array.isArray(staffList) && staffList.map((s) => (
                                <tr key={s.staffId} onDoubleClick={() => handleRowDoubleClick(s)}
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
                                            {s.staffId}
                                        </span>
                                    </td>
                                    <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                        <strong>{s.firstName} {s.lastName}</strong>
                                    </td>
                                    <td style={{ color: "#2c3e50", fontWeight: "500" }}>{s.designation}</td>
                                    <td>
                                        <span style={{
                                            padding: "4px 12px",
                                            borderRadius: "20px",
                                            fontSize: "0.85rem",
                                            fontWeight: "600",
                                            backgroundColor: s.gender === "MALE" 
                                                ? "rgba(52, 152, 219, 0.15)" 
                                                : "rgba(155, 89, 182, 0.15)",
                                            color: s.gender === "MALE" ? "#3498db" : "#9b59b6"
                                        }}>
                                            {s.gender}
                                        </span>
                                    </td>
                                    <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <FaPhone size={12} color="#7f8c8d" />
                                            {s.contactNo}
                                        </span>
                                    </td>
                                    <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <FaEnvelope size={12} color="#7f8c8d" />
                                            {s.email}
                                        </span>
                                    </td>
                                    <td style={{ color: "#2c3e50", fontWeight: "500" }}>{s.fieldCode || "Not Assigned"}</td>
                                    <td>
                                        <button 
                                            className="btn btn-sm"
                                            style={{ 
                                                background: "linear-gradient(135deg, #1abc9c, #3498db)",
                                                color: "white",
                                                border: "none",
                                                padding: "4px 12px",
                                                borderRadius: "4px",
                                                fontSize: "0.8rem",
                                                fontWeight: "600"
                                            }}
                                            onClick={() => handleRowDoubleClick(s)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {staffList.length === 0 && (
                            <div className="text-center py-5" style={{ color: "#7f8c8d" }}>
                                <FaUser size={48} style={{ marginBottom: "20px", opacity: 0.5 }} />
                                <h5>No Staff Records Found</h5>
                                <p>Add new staff members using the form above</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
