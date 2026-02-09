// src/reducers/FieldSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../models/Field";

interface FieldState {
    fields: Field[];
}

const initialState: FieldState = {
    fields: [
        new Field("FLD001", "North Maize Field", "Nakuru County", 50, "CR001", "MAIZE", "ST001", "maize_field.jpg"),
        new Field("FLD002", "South Tea Plantation", "Kericho County", 30, "CR002", "TEA", "ST002", "tea_field.jpg"),
        new Field("FLD003", "East Coffee Farm", "Kiambu County", 25, "CR003", "COFFEE", "ST003", "coffee_field.jpg"),
        new Field("FLD004", "West Banana Grove", "Muranga County", 15, "CR004", "BANANA", "ST004", "banana_field.jpg"),
        new Field("FLD005", "Central Avocado Farm", "Meru County", 20, "CR005", "AVOCADO", "ST005", "avocado_field.jpg"),
        new Field("FLD006", "River Rice Paddy", "Kisumu County", 40, "CR006", "RICE", "ST006", "rice_field.jpg"),
        new Field("FLD007", "Hill Cowpea Field", "Machakos County", 35, "CR007", "COWPEA", "ST007", "cowpea_field.jpg"),
        new Field("FLD008", "Valley Greengram Field", "Kitui County", 28, "CR008", "GREENGRAM", "ST008", "greengram_field.jpg"),
        new Field("FLD009", "Mountain Chickpea Field", "Nyeri County", 22, "CR009", "CHICKPEA", "ST009", "chickpea_field.jpg"),
        new Field("FLD010", "Lowland Sweet Potato", "Embu County", 45, "CR010", "SWEETPOTATO", "ST010", "sweetpotato_field.jpg"),
        new Field("FLD011", "Coastal Cassava Farm", "Kilifi County", 38, "CR011", "CASSAVA", "ST011", "cassava_field.jpg"),
        new Field("FLD012", "Irrigation Sugarcane", "Bungoma County", 60, "CR012", "SUGARCANE", "ST012", "sugarcane_field.jpg"),
        new Field("FLD013", "Greenhouse Tomatoes", "Naivasha", 5, "CR013", "TOMATOES", "ST013", "tomato_greenhouse.jpg"),
        new Field("FLD014", "Orchard Mangoes", "Makueni County", 18, "CR014", "MANGOES", "ST014", "mango_orchard.jpg"),
        new Field("FLD015", "Flower Farm", "Nairobi County", 8, "CR015", "ROSES", "ST015", "flower_field.jpg")
    ],
};

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField: (state, action: PayloadAction<Field>) => {
            
            const existingField = state.fields.find(field => field.fieldCode === action.payload.fieldCode);
            if (!existingField) {
                state.fields.push(action.payload);
            }
        },
        updateField: (state, action: PayloadAction<Field>) => {
            const index = state.fields.findIndex(field => field.fieldCode === action.payload.fieldCode);
            if (index !== -1) {
                state.fields[index] = action.payload;
            }
        },
        deleteField: (state, action: PayloadAction<Field>) => {
            state.fields = state.fields.filter(field => field.fieldCode !== action.payload.fieldCode);
        },
       
        assignCropToField: (state, action: PayloadAction<{fieldCode: string, cropCode: string, cropName: string}>) => {
            const field = state.fields.find(f => f.fieldCode === action.payload.fieldCode);
            if (field) {
                field.cropCode = action.payload.cropCode;
                field.nameOfCrop = action.payload.cropName;
            }
        },
        assignStaffToField: (state, action: PayloadAction<{fieldCode: string, staffId: string}>) => {
            const field = state.fields.find(f => f.fieldCode === action.payload.fieldCode);
            if (field) {
                field.staffId = action.payload.staffId;
            }
        },
        updateFieldSize: (state, action: PayloadAction<{fieldCode: string, newSize: number}>) => {
            const field = state.fields.find(f => f.fieldCode === action.payload.fieldCode);
            if (field) {
                field.size = action.payload.newSize;
            }
        },
       
        importFields: (state, action: PayloadAction<Field[]>) => {
            const newFields = action.payload.filter(newField => 
                !state.fields.some(existingField => existingField.fieldCode === newField.fieldCode)
            );
            state.fields.push(...newFields);
        },
        clearAllFields: (state) => {
            state.fields = [];
        },
        
        getFieldsByLocation: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                filteredFields: state.fields.filter(field => 
                    field.fieldLocation.toLowerCase().includes(action.payload.toLowerCase())
                )
            };
        },
        getFieldsByCrop: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                filteredFields: state.fields.filter(field => 
                    field.nameOfCrop.toLowerCase().includes(action.payload.toLowerCase())
                )
            };
        }
    },
});

export const { 
    addField, 
    updateField, 
    deleteField, 
    assignCropToField,
    assignStaffToField,
    updateFieldSize,
    importFields,
    clearAllFields,
    getFieldsByLocation,
    getFieldsByCrop
} = fieldSlice.actions;

export default fieldSlice.reducer;
