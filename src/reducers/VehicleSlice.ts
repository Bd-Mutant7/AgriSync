import { Vehicle } from "../models/Vehicle";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Vehicle[] = [
    new Vehicle("VH001", "KAA 123A", "TRUCK", "DIESEL", "AVAILABLE", "ST001", "For maize transportation - Good condition"),
    new Vehicle("VH002", "KAB 456B", "TRACTOR", "DIESEL", "AVAILABLE", "ST002", "Tea plantation use - Regular service"),
    new Vehicle("VH003", "KAC 789C", "PICKUP", "DIESEL", "UNDER_MAINTENANCE", "ST003", "Coffee farm transport - Engine service"),
    new Vehicle("VH004", "KAD 012D", "TRUCK", "DIESEL", "AVAILABLE", "ST004", "Irrigation equipment transport"),
    new Vehicle("VH005", "KAE 345E", "TRACTOR", "DIESEL", "AVAILABLE", "ST005", "Harvesting operations - New tires"),
    new Vehicle("VH006", "KAF 678F", "VAN", "PETROL", "AVAILABLE", "ST006", "Quality control team transport"),
    new Vehicle("VH007", "KAG 901G", "TRUCK", "DIESEL", "NOT_AVAILABLE", "ST007", "Engine overhaul needed"),
    new Vehicle("VH008", "KAH 234H", "PICKUP", "DIESEL", "AVAILABLE", "ST008", "Greenhouse supplies transport"),
    new Vehicle("VH009", "KAI 567I", "SUV", "PETROL", "AVAILABLE", "ST009", "Safety inspection vehicle"),
    new Vehicle("VH010", "KAJ 890J", "TRUCK", "DIESEL", "AVAILABLE", "ST010", "Office supplies and accounting"),
    new Vehicle("VH011", "KAK 123K", "PICKUP", "DIESEL", "AVAILABLE", "ST011", "Pest control equipment transport"),
    new Vehicle("VH012", "KAL 456L", "TRACTOR", "DIESEL", "UNDER_MAINTENANCE", "ST012", "Sugarcane field preparation"),
    new Vehicle("VH013", "KAM 789M", "TRUCK", "DIESEL", "AVAILABLE", "ST013", "Tea leaf collection - Insulated"),
    new Vehicle("VH014", "KAN 012N", "VAN", "PETROL", "AVAILABLE", "ST014", "Coffee bean quality transport"),
    new Vehicle("VH015", "KAO 345O", "SUV", "PETROL", "AVAILABLE", "ST015", "Management field inspections")
];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle: (state, action: PayloadAction<Vehicle>) => {
            
            const newVehicle = { ...action.payload };
            if (!newVehicle.vehicleCode) {
                const lastVehicleCode = state[state.length - 1]?.vehicleCode || "VH000";
                const nextNumber = parseInt(lastVehicleCode.replace("VH", "")) + 1;
                newVehicle.vehicleCode = `VH${nextNumber.toString().padStart(3, '0')}`;
            }
            
            
            if (newVehicle.licensePlateNumber) {
                newVehicle.licensePlateNumber = newVehicle.licensePlateNumber.toUpperCase().trim();
            }
            
            state.push(newVehicle);
        },
        updateVehicle: (state, action: PayloadAction<Vehicle>) => {
            return state.map((vehicle) => vehicle.vehicleCode === action.payload.vehicleCode
                ? action.payload
                : vehicle
            );
        },
        deleteVehicle: (state, action: PayloadAction<Vehicle>) => {
            return state.filter((vehicle) => vehicle.vehicleCode !== action.payload.vehicleCode);
        },
       
        updateVehicleStatus: (state, action: PayloadAction<{vehicleCode: string, status: string}>) => {
            return state.map(vehicle => 
                vehicle.vehicleCode === action.payload.vehicleCode 
                    ? { ...vehicle, status: action.payload.status }
                    : vehicle
            );
        },
        assignVehicleToStaff: (state, action: PayloadAction<{vehicleCode: string, staffId: string}>) => {
            return state.map(vehicle => 
                vehicle.vehicleCode === action.payload.vehicleCode 
                    ? { ...vehicle, allocatedStaffId: action.payload.staffId }
                    : vehicle
            );
        },
        unassignVehicle: (state, action: PayloadAction<string>) => {
            return state.map(vehicle => 
                vehicle.vehicleCode === action.payload 
                    ? { ...vehicle, allocatedStaffId: "" }
                    : vehicle
            );
        },
        updateVehicleRemarks: (state, action: PayloadAction<{vehicleCode: string, remarks: string}>) => {
            return state.map(vehicle => 
                vehicle.vehicleCode === action.payload.vehicleCode 
                    ? { ...vehicle, remarks: action.payload.remarks }
                    : vehicle
            );
        },
        
        searchVehiclesByPlate: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toUpperCase();
            return state.filter(vehicle => 
                vehicle.licensePlateNumber.includes(searchTerm)
            );
        },
        filterVehiclesByStatus: (state, action: PayloadAction<string>) => {
            return state.filter(vehicle => 
                vehicle.status === action.payload
            );
        },
        filterVehiclesByCategory: (state, action: PayloadAction<string>) => {
            return state.filter(vehicle => 
                vehicle.vehicleCategory === action.payload
            );
        },
        filterVehiclesByFuelType: (state, action: PayloadAction<string>) => {
            return state.filter(vehicle => 
                vehicle.fuelType === action.payload
            );
        },
       
        importVehicles: (state, action: PayloadAction<Vehicle[]>) => {
            
            const newVehicles = action.payload.filter(newVehicle => 
                !state.some(existingVehicle => existingVehicle.vehicleCode === newVehicle.vehicleCode)
            );
            state.push(...newVehicles);
        },
        clearAllVehicles: () => {
            return [];
        },
        
        getVehicleStatistics: (state) => {
            const totalVehicles = state.length;
            const availableCount = state.filter(v => v.status === "AVAILABLE").length;
            const maintenanceCount = state.filter(v => v.status === "UNDER_MAINTENANCE").length;
            const unavailableCount = state.filter(v => v.status === "NOT_AVAILABLE").length;
            
            const categories = [...new Set(state.map(v => v.vehicleCategory))];
            const fuelTypes = [...new Set(state.map(v => v.fuelType))];
            
            const dieselCount = state.filter(v => v.fuelType === "DIESEL").length;
            const petrolCount = state.filter(v => v.fuelType === "PETROL").length;
            
            return {
                totalVehicles,
                availableCount,
                maintenanceCount,
                unavailableCount,
                categories,
                fuelTypes,
                dieselCount,
                petrolCount,
                utilizationRate: (availableCount / totalVehicles) * 100
            };
        },
        
        scheduleMaintenance: (state, action: PayloadAction<{vehicleCode: string, maintenanceDate: string}>) => {
            return state.map(vehicle => 
                vehicle.vehicleCode === action.payload.vehicleCode 
                    ? { 
                        ...vehicle, 
                        status: "SCHEDULED_MAINTENANCE",
                        remarks: `Maintenance scheduled for ${action.payload.maintenanceDate}. ${vehicle.remarks || ''}`
                    }
                    : vehicle
            );
        }
    }
});

export const { 
    addVehicle, 
    updateVehicle, 
    deleteVehicle,
    updateVehicleStatus,
    assignVehicleToStaff,
    unassignVehicle,
    updateVehicleRemarks,
    searchVehiclesByPlate,
    filterVehiclesByStatus,
    filterVehiclesByCategory,
    filterVehiclesByFuelType,
    importVehicles,
    clearAllVehicles,
    getVehicleStatistics,
    scheduleMaintenance
} = vehicleSlice.actions;
export default vehicleSlice.reducer;
