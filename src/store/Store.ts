import { configureStore } from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice";
import StaffSlice from "../reducers/StaffSlice";
import CropSlice from "../reducers/CropSlice";
import EquipmentSlice from "../reducers/EquipmentSlice";
import FieldSlice from "../reducers/FieldSlice";
import LogSlice from "../reducers/LogSlice";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        vehicle: VehicleSlice,
        staff: StaffSlice,
        equipment: EquipmentSlice,
        field: FieldSlice,
        log: LogSlice,
    },
    // Optional: Add middleware configuration
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: [], // Add any non-serializable actions here if needed
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['items.dates'],
            },
        }),
    // Optional: Enable Redux DevTools
    devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState type for TypeScript
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for TypeScript
export type AppDispatch = typeof store.dispatch;

// REMOVED: export { useDispatch, useSelector } from 'react-redux';
// REMOVED: import { TypedUseSelectorHook } from 'react-redux';
// REMOVED: export const useAppDispatch: () => AppDispatch = useDispatch;
// REMOVED: export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;