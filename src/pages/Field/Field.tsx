import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addField, updateField, deleteField } from "../../reducers/FieldSlice";
import { Field as FieldModel } from "../../models/Field";
import { InputField } from "../../components/InputModal";
import { SelectField } from "../../components/SelectModal";
import { ActionButton } from "../../components/ActionButtonModal";
import { FaMapMarkerAlt, FaSeedling, FaUser, FaImage, FaSave, FaEdit, FaTrash } from "react-icons/fa";

export function Field() {
    const dispatch = useDispatch();
    const fields = useSelector((state: RootState) => state.field.fields);
    const [field, setField] = useState<FieldModel>({} as FieldModel);

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

  
    const cropOptions = [
        { value: "", label: "Select CROP ID" },
        { value: "CROP001", label: "CROP001 - Rice" },
        { value: "CROP002", label: "CROP002 - Maize" },
        { value: "CROP003", label: "CROP003 - Tea" },
    ];

    const staffOptions = [
        { value: "", label: "Select Staff ID" },
        { value: "ST001", label: "ST001 - John Doe" },
        { value: "ST002", label: "ST002 - Jane Smith" },
        { value: "ST003", label: "ST003 - Robert Johnson" },
    ];

    const handleSave = () => {
        if (field) {
            dispatch(addField(field));
            setField({} as FieldModel);
            const form = document.getElementById("fieldForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (field) {
            dispatch(updateField(field));
            setField({} as FieldModel);
            const form = document.getElementById("fieldForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (field) {
            dispatch(deleteField(field));
            setField({} as FieldModel);
            const form = document.getElementById("fieldForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setField(prev => ({ ...prev, [name]: value } as FieldModel));
    };

    const handleRowDoubleClick = (f: FieldModel) => {
        setField(f);
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <h2 className="text-center mb-4 mt-3" style={headerStyle}>
                <FaMapMarkerAlt /> Field Management
            </h2>
            <div className="container">
                <form id="fieldForm" className="mb-5">
                    {/* First Row */}
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <label htmlFor="fieldCode" style={labelStyle}>
                                Field Code
                            </label>
                            <InputField
                                label=""
                                id="fieldCode"
                                name="fieldCode"
                                required
                                style={inputStyle}
                                value={field.fieldCode || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="fieldName" style={labelStyle}>
                                Field Name
                            </label>
                            <InputField
                                label=""
                                id="fieldName"
                                name="fieldName"
                                required
                                style={inputStyle}
                                value={field.fieldName || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="fieldLocation" style={labelStyle}>
                                <FaMapMarkerAlt />
                                Field Location
                            </label>
                            <InputField
                                label=""
                                id="fieldLocation"
                                name="fieldLocation"
                                required
                                style={inputStyle}
                                value={field.fieldLocation || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="size" style={labelStyle}>
                                Size (Acres)
                            </label>
                            <InputField
                                label=""
                                id="size"
                                name="size"
                                type="number"
                                required
                                style={inputStyle}
                                value={field.size || ""}
                                onChange={handleChange}
                                min="0"
                                step="0.1"
                            />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <label htmlFor="cropCode" style={labelStyle}>
                                <FaSeedling />
                                Crop Code
                            </label>
                            <SelectField
                                label=""
                                id="cropCode"
                                name="cropCode"
                                options={cropOptions}
                                required
                                style={inputStyle}
                                value={field.cropCode || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="nameOfCrop" style={labelStyle}>
                                Crop Name
                            </label>
                            <InputField
                                label=""
                                id="nameOfCrop"
                                name="nameOfCrop"
                                required
                                style={inputStyle}
                                value={field.nameOfCrop || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="staffId" style={labelStyle}>
                                <FaUser />
                                Staff ID
                            </label>
                            <SelectField
                                label=""
                                id="staffId"
                                name="staffId"
                                options={staffOptions}
                                required
                                style={inputStyle}
                                value={field.staffId || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="fieldImage1" style={labelStyle}>
                                <FaImage />
                                Field Image
                            </label>
                            <InputField
                                label=""
                                id="fieldImage1"
                                name="fieldImageFile"
                                type="file"
                                accept="image/*"
                                required
                                style={inputStyle}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 mb-3 col-md-12 d-flex justify-content-start gap-3">
                        <ActionButton 
                            id="savefieldbtn" 
                            label={
                                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <FaSave /> SAVE
                                </span>
                            } 
                            style={buttonStyle} 
                            onClick={handleSave}
                        />
                        <ActionButton 
                            id="updatefields" 
                            label={
                                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <FaEdit /> UPDATE
                                </span>
                            } 
                            style={{ 
                                ...buttonStyle, 
                                background: "linear-gradient(135deg, #3498db, #9b59b6)" 
                            }} 
                            onClick={handleUpdate}
                        />
                        <ActionButton 
                            id="deleteFiled" 
                            label={
                                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <FaTrash /> DELETE
                                </span>
                            } 
                            style={{ 
                                ...buttonStyle, 
                                background: "linear-gradient(135deg, #e74c3c, #c0392b)" 
                            }} 
                            onClick={handleDelete}
                        />
                    </div>
                </form>

                {/* Field Table */}
                <table 
                    className="table table-bordered table-striped table-hover" 
                    id="filedTable"
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
                            <th scope="col">Field Code</th>
                            <th scope="col">Field Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Size</th>
                            <th scope="col">Crop Code</th>
                            <th scope="col">Crop Name</th>
                            <th scope="col">Staff ID</th>
                            <th scope="col">Field Image</th>
                        </tr>
                    </thead>
                    <tbody id="fieldTableBody" style={{ backgroundColor: "#f8f9fa" }}>
                        {fields.map((f: FieldModel) => (
                            <tr 
                                key={f.fieldCode} 
                                onDoubleClick={() => handleRowDoubleClick(f)}
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
                                        {f.fieldCode}
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{f.fieldName}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                        <FaMapMarkerAlt size={12} color="#7f8c8d" />
                                        {f.fieldLocation}
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
                                        {f.size} acres
                                    </span>
                                </td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{f.cropCode}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{f.nameOfCrop}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>{f.staffId}</td>
                                <td style={{ color: "#2c3e50", fontWeight: "500" }}>
                                    {f.fieldImage ? (
                                        <span style={{
                                            padding: "4px 10px",
                                            backgroundColor: "rgba(155, 89, 182, 0.15)",
                                            borderRadius: "4px",
                                            fontWeight: "600",
                                            color: "#9b59b6",
                                            cursor: "pointer"
                                        }}>
                                            View Image
                                        </span>
                                    ) : "No Image"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {fields.length === 0 && (
                    <div className="text-center py-5" style={{ color: "#7f8c8d" }}>
                        <FaMapMarkerAlt size={48} style={{ marginBottom: "20px", opacity: 0.5 }} />
                        <h5>No Field Records Found</h5>
                        <p>Add new fields using the form above</p>
                    </div>
                )}
            </div>
        </div>
    );
}
