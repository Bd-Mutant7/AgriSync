import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crop } from "../models/Crop";

const initialState: Crop[] = [
    new Crop("CR001", "MAIZE", "Zea mays", "maize.jpg", "CEREAL", 150, "MARCH", "FLD001", "North Field"),
    new Crop("CR002", "TEA", "Camellia sinensis", "tea.jpg", "BEVERAGE", 80, "APRIL", "FLD002", "South Field"),
    new Crop("CR003", "COFFEE", "Coffea arabica", "coffee.jpg", "BEVERAGE", 60, "MAY", "FLD003", "East Field"),
    new Crop("CR004", "BANANA", "Musa acuminata", "banana.jpg", "FRUIT", 200, "JUNE", "FLD004", "West Field"),
    new Crop("CR005", "AVOCADO", "Persea americana", "avocado.jpg", "FRUIT", 120, "JULY", "FLD005", "Central Field"),
    new Crop("CR006", "RICE", "Oryza sativa", "rice.jpg", "CEREAL", 90, "AUGUST", "FLD006", "River Field"),
    new Crop("CR007", "COWPEA", "Vigna unguiculata", "cowpea.jpg", "LEGUME", 110, "SEPTEMBER", "FLD007", "Hill Field"),
    new Crop("CR008", "GREENGRAM", "Vigna radiata", "greengram.jpg", "LEGUME", 85, "OCTOBER", "FLD008", "Valley Field"),
    new Crop("CR009", "CHICKPEA", "Cicer arietinum", "chickpea.jpg", "LEGUME", 95, "NOVEMBER", "FLD009", "Mountain Field"),
    new Crop("CR010", "SWEETPOTATO", "Ipomoea batatas", "sweetpotato.jpg", "ROOT", 180, "DECEMBER", "FLD010", "Lowland Field"),
    new Crop("CR011", "CASSAVA", "Manihot esculenta", "cassava.jpg", "ROOT", 160, "JANUARY", "FLD011", "Coastal Field"),
    new Crop("CR012", "SUGARCANE", "Saccharum officinarum", "sugarcane.jpg", "CASH", 250, "FEBRUARY", "FLD012", "Irrigation Field")
];

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        addCrop: (state, action: PayloadAction<Crop>) => {
            // Check if crop code already exists
            const existingCrop = state.find(crop => crop.cropCode === action.payload.cropCode);
            if (!existingCrop) {
                state.push(action.payload);
            }
           
        },
        updateCrop: (state, action: PayloadAction<Crop>) => {
            return state.map((crop) => crop.cropCode === action.payload.cropCode
                ? action.payload
                : crop
            );
        },
        deleteCrop: (state, action: PayloadAction<Crop>) => {
            return state.filter((crop) => crop.cropCode !== action.payload.cropCode);
        },
        // Optional: Bulk operations
        importCrops: (state, action: PayloadAction<Crop[]>) => {
            // Filter out duplicates before adding
            const newCrops = action.payload.filter(newCrop => 
                !state.some(existingCrop => existingCrop.cropCode === newCrop.cropCode)
            );
            state.push(...newCrops);
        },
        clearAllCrops: () => {
            return [];
        }
    }
});

export const { addCrop, updateCrop, deleteCrop, importCrops, clearAllCrops } = cropSlice.actions;
export default cropSlice.reducer;
