import "./Crop.css";
import { ActionButton } from "../../components/ActionButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addCrop, updateCrop, deleteCrop } from "../../reducers/CropSlice";
import { useState } from "react";
import { Crop as CropModel } from "../../models/Crop";

export function Crop() {
    const dispatch = useDispatch();
    const crops = useSelector((state: RootState) => state.crop);
    const fields = useSelector((state: RootState) => state.field.fields);
    const [crop, setCrop] = useState<CropModel | null>(null);

    const commonNames = [
        { value: "RICE", label: "RICE" },
        { value: "COWPEA", label: "COWPEA" },
        { value: "GREENGRAM", label: "GREENGRAM" },
        { value: "CHIKPEA", label: "CHIKPEA" },
        { value: "SWEETPOTATO", label: "SWEETPOTATO" },
        { value: "CASSAVA", label: "CASSAVA" },
        { value: "MAIZE", label: "MAIZE" },
        { value: "TEA", label: "TEA" },
        { value: "COFFEE", label: "COFFEE" },
        { value: "BANANA", label: "BANANA" },
        { value: "AVOCADO", label: "AVOCADO" }
    ];

    const scientificNames = [
        { value: "BG34", label: "BG34" },
        { value: "CP10", label: "CP10" },
        { value: "MI60", label: "MI60" },
        { value: "CH56", label: "CH56" },
        { value: "CS78", label: "CS78" },
    ];

    const categories = [
        { value: "FEED", label: "FEED" },
        { value: "FIBER", label: "FIBER" },
        { value: "OIL", label: "OIL" },
        { value: "CEREAL", label: "CEREAL" },
    ];

    const seasons = [
        { value: "JANUARY", label: "JANUARY" },
        { value: "FEBRUARY", label: "FEBRUARY" },
        { value: "MARCH", label: "MARCH" },
        { value: "APRIL", label: "APRIL" },
        { value: "MAY", label: "MAY" },
        { value: "JUNE", label: "JUNE" },
        { value: "JULY", label: "JULY" },
        { value: "AUGUST", label: "AUGUST" },
        { value: "SEPTEMBER", label: "SEPTEMBER" },
        { value: "OCTOBER", label: "OCTOBER" },
        { value: "NOVEMBER", label: "NOVEMBER" },
        { value: "DECEMBER", label: "DECEMBER" },
    ];

    const buttonStyle = { 
        background: "linear-gradient(135deg, #1abc9c, #3498db)",
        border: "none",
        color: "white",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease"
    };


    const inputStyle = { 
        backgroundColor: "#34495e", 
        color: "#ecf0f1",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px"
    };

    const headerStyle = { 
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)", 
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        marginBottom: "25px"
    };

    const tableHeaderStyle = {
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        fontWeight: "600",
        border: "none"
    };

    const handleSave = () => {
        if (crop) {
            dispatch(addCrop(crop));
            setCrop(null);
            const form = document.getElementById("cropForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (crop) {
            dispatch(updateCrop(crop));
            setCrop(null);
            const form = document.getElementById("cropForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (crop) {
            dispatch(deleteCrop(crop));
            setCrop(null);
            const form = document.getElementById("cropForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCrop(prev => ({ ...prev, [name]: value } as CropModel));
    };

    const handleRowDoubleClick = (c: CropModel) => {
        setCrop(c);
    };

    return (
        <div className="container" style={{ padding: "20px" }}>
            <h2 className="text-center mb-4 mt-3" style={headerStyle}>Crop Management</h2>

            <form id="cropForm" encType="multipart/form-data" name="FormData">
                <div className="form-group row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-4">
                        <label htmlFor="cropCode1" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Crop Code</label>
                        <input type="text" className="form-control" style={inputStyle} id="cropCode1" name="cropCode" required value={crop?.cropCode || ""} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cropCommonName" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Crop Common Name</label>
                        <select className="form-control" style={inputStyle} id="cropCommonName" name="cropCommonName" required value={crop?.cropCommonName || ""} onChange={handleChange}>
                            {commonNames.map((option) => (
                                <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cropScientificName" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Crop Scientific Name</label>
                        <select className="form-control" style={inputStyle} id="cropScientificName" name="cropScientificName" required value={crop?.cropScientificName || ""} onChange={handleChange}>
                            {scientificNames.map((option) => (
                                <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-4">
                        <label htmlFor="cropImage" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Crop Image</label>
                        <input type="file" className="form-control file-input" style={inputStyle} id="cropImage" name="cropImage" accept="image/*" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="category" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Crop Category</label>
                        <select className="form-control" style={inputStyle} id="category" name="category" required value={crop?.category || ""} onChange={handleChange}>
                            {categories.map((option) => (
                                <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="qty" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Quantity</label>
                        <input type="number" className="form-control" style={inputStyle} id="qty" name="qty" required value={crop?.qty || ""} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-4">
                        <label htmlFor="cropSeason" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Crop Season</label>
                        <select className="form-control" style={inputStyle} id="cropSeason" name="cropSeason" required value={crop?.cropSeason || ""} onChange={handleChange}>
                            {seasons.map((option) => (
                                <option key={option.value} value={option.value} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="fieldCodes" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Field Codes</label>
                        <select className="form-control" style={inputStyle} id="fieldCodes" name="fieldCodes" required value={crop?.fieldCodes || ""} onChange={handleChange}>
                            {fields.map((field) => (
                                <option key={field.fieldCode} value={field.fieldCode} style={{ backgroundColor: "#34495e", color: "#ecf0f1" }}>{field.fieldCode}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="fieldNames" style={{ color: "#2c3e50", fontWeight: "600", marginBottom: "8px" }}>Field Names</label>
                        <input type="text" className="form-control" style={inputStyle} id="fieldNames" name="fieldNames" required value={crop?.fieldNames || ""} onChange={handleChange} />
                    </div>
                </div>

                <div className="mt-3 col-md-12 d-flex justify-content-start gap-3">
                    <ActionButton id="saveCropBtn" label="SAVE" style={buttonStyle} onClick={handleSave} />
                    <ActionButton id="updateCropBtn" label="UPDATE" style={buttonStyle} onClick={handleUpdate} />
                    <ActionButton id="deleteCropBtn" label="DELETE" style={buttonStyle} onClick={handleDelete} />
                </div>
            </form>

            <table className="table table-bordered table-striped table-hover" id="cropTable" style={{ marginTop: "30px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <thead className="table-header" style={tableHeaderStyle}>
                <tr>
                    <th scope="col">Crop Code</th>
                    <th scope="col">Crop Common Name</th>
                    <th scope="col">Crop Scientific Name</th>
                    <th scope="col">Crop Image</th>
                    <th scope="col">Category</th>
                    <th scope="col">QTY</th>
                    <th scope="col">Crop Season</th>
                    <th scope="col">Field Codes</th>
                    <th scope="col">Field Names</th>
                </tr>
                </thead>
                <tbody id="cropTableBody" style={{ backgroundColor: "#f8f9fa" }}>
                {crops.map((c) => (
                    <tr key={c.cropCode} onDoubleClick={() => handleRowDoubleClick(c)} 
                        style={{ 
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(26, 188, 156, 0.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ""}
                    >
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.cropCode}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.cropCommonName}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.cropScientificName}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.cropImage}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.category}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.qty}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.cropSeason}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.fieldCodes}</td>
                        <td style={{ color: "#2c3e50", fontWeight: "500" }}>{c.fieldNames}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

}
