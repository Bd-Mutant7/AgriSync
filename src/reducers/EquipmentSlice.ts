import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equipment } from "../models/Equipment";

const initialState: Equipment[] = [
    new Equipment("EQ001", "Tractor", "MECHANICAL", "AVAILABLE", 8, "ST001", "FLD001"),
    new Equipment("EQ002", "Combine Harvester", "MECHANICAL", "UNDER_MAINTENANCE", 3, "ST002", "FLD002"),
    new Equipment("EQ003", "Sprayer", "ELECTRICAL", "AVAILABLE", 12, "ST003", "FLD003"),
    new Equipment("EQ004", "Disc Plow", "MECHANICAL", "AVAILABLE", 6, "ST004", "FLD004"),
    new Equipment("EQ005", "Seed Drill", "MECHANICAL", "AVAILABLE", 5, "ST005", "FLD005"),
    new Equipment("EQ006", "Irrigation Pump", "ELECTRICAL", "AVAILABLE", 15, "ST006", "FLD006"),
    new Equipment("EQ007", "Trailer", "MECHANICAL", "NOT_AVAILABLE", 4, "ST007", "FLD007"),
    new Equipment("EQ008", "Pruning Shears", "MANUAL", "AVAILABLE", 50, "ST008", "FLD008"),
    new Equipment("EQ009", "Greenhouse Ventilation", "ELECTRICAL", "AVAILABLE", 10, "ST009", "FLD009"),
    new Equipment("EQ010", "Moisture Meter", "ELECTRICAL", "AVAILABLE", 8, "ST010", "FLD010"),
    new Equipment("EQ011", "Fertilizer Spreader", "MECHANICAL", "UNDER_MAINTENANCE", 7, "ST011", "FLD011"),
    new Equipment("EQ012", "Grain Dryer", "ELECTRICAL", "AVAILABLE", 4, "ST012", "FLD012"),
    new Equipment("EQ013", "Tea Plucker", "MECHANICAL", "AVAILABLE", 20, "ST013", "FLD002"),
    new Equipment("EQ014", "Coffee Pulper", "MECHANICAL", "AVAILABLE", 6, "ST014", "FLD003"),
    new Equipment("EQ015", "Maize Sheller", "MECHANICAL", "AVAILABLE", 9, "ST015", "FLD001")
];

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment: (state, action: PayloadAction<Equipment>) => {
           
            const existingEquipment = state.find(eq => eq.equipmentId === action.payload.equipmentId);
            if (!existingEquipment) {
                state.push(action.payload);
            }
        },
        updateEquipment: (state, action: PayloadAction<Equipment>) => {
            return state.map((equipment) => equipment.equipmentId === action.payload.equipmentId
                ? action.payload
                : equipment
            );
        },
        deleteEquipment: (state, action: PayloadAction<Equipment>) => {
            return state.filter((equipment) => equipment.equipmentId !== action.payload.equipmentId);
        },
        updateEquipmentStatus: (state, action: PayloadAction<{equipmentId: string, status: string}>) => {
            return state.map(equipment => 
                equipment.equipmentId === action.payload.equipmentId 
                    ? { ...equipment, status: action.payload.status }
                    : equipment
            );
        },
        assignEquipmentToStaff: (state, action: PayloadAction<{equipmentId: string, staffId: string}>) => {
            return state.map(equipment => 
                equipment.equipmentId === action.payload.equipmentId 
                    ? { ...equipment, assignedStaffId: action.payload.staffId }
                    : equipment
            );
        },
        assignEquipmentToField: (state, action: PayloadAction<{equipmentId: string, fieldCode: string}>) => {
            return state.map(equipment => 
                equipment.equipmentId === action.payload.equipmentId 
                    ? { ...equipment, assignedFieldCode: action.payload.fieldCode }
                    : equipment
            );
        },
        
        importEquipment: (state, action: PayloadAction<Equipment[]>) => {
            const newEquipment = action.payload.filter(newEq => 
                !state.some(existingEq => existingEq.equipmentId === newEq.equipmentId)
            );
            state.push(...newEquipment);
        },
        clearAllEquipment: () => {
            return [];
        }
    }
});

export const { 
    addEquipment, 
    updateEquipment, 
    deleteEquipment, 
    updateEquipmentStatus,
    assignEquipmentToStaff,
    assignEquipmentToField,
    importEquipment,
    clearAllEquipment 
} = equipmentSlice.actions;
export default equipmentSlice.reducer;
