import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Log } from "../models/Log";

interface LogState {
    logs: Log[];
}

const initialState: LogState = {
    logs: [
        new Log("LOG001", "2024-03-01", "System initialization for Green Shadow AgriSync", "ADMINISTRATIVE", "FLD001"),
        new Log("LOG002", "2024-03-02", "Maize planting completed in North Field", "MANAGER", "FLD001"),
        new Log("LOG003", "2024-03-03", "Soil testing conducted for tea plantation", "SCIENTIST", "FLD002"),
        new Log("LOG004", "2024-03-04", "Irrigation system maintenance in rice paddy", "TECHNICIAN", "FLD006"),
        new Log("LOG005", "2024-03-05", "Fertilizer application in coffee farm", "FARMER", "FLD003"),
        new Log("LOG006", "2024-03-06", "Pest control treatment in avocado farm", "SCIENTIST", "FLD005"),
        new Log("LOG007", "2024-03-07", "Harvesting of cowpea completed", "FARMER", "FLD007"),
        new Log("LOG008", "2024-03-08", "Equipment maintenance: Tractor service", "TECHNICIAN", "FLD001"),
        new Log("LOG009", "2024-03-09", "Weather monitoring system installed", "SCIENTIST", "FLD008"),
        new Log("LOG010", "2024-03-10", "Staff training on new harvesting techniques", "MANAGER", "FLD004"),
        new Log("LOG011", "2024-03-11", "Quality check of tea leaves", "QUALITY_CONTROLLER", "FLD002"),
        new Log("LOG012", "2024-03-12", "Database backup completed", "ADMINISTRATIVE", "SYSTEM"),
        new Log("LOG013", "2024-03-13", "Market price analysis for maize", "ANALYST", "FLD001"),
        new Log("LOG014", "2024-03-14", "Water level monitoring in irrigation channels", "TECHNICIAN", "FLD006"),
        new Log("LOG015", "2024-03-15", "Safety inspection of farm equipment", "SAFETY_OFFICER", "ALL_FIELDS")
    ],
};

const logSlice = createSlice({
    name: "log",
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<Log>) => {
           
            const newLog = { ...action.payload };
            if (!newLog.logCode) {
                const lastLogCode = state.logs[state.logs.length - 1]?.logCode || "LOG000";
                const nextNumber = parseInt(lastLogCode.replace("LOG", "")) + 1;
                newLog.logCode = `LOG${nextNumber.toString().padStart(3, '0')}`;
            }
            
            
            if (!newLog.logDate) {
                newLog.logDate = new Date().toISOString().split('T')[0];
            }
            
            state.logs.push(newLog);
        },
        updateLog: (state, action: PayloadAction<Log>) => {
            const index = state.logs.findIndex(log => log.logCode === action.payload.logCode);
            if (index !== -1) {
                state.logs[index] = action.payload;
            }
        },
        deleteLog: (state, action: PayloadAction<string>) => {
            state.logs = state.logs.filter(log => log.logCode !== action.payload);
        },
        
        addActivityLog: (state, action: PayloadAction<{
            activity: string;
            userRole: string;
            fieldCode?: string;
            details?: string;
        }>) => {
            const lastLogCode = state.logs[state.logs.length - 1]?.logCode || "LOG000";
            const nextNumber = parseInt(lastLogCode.replace("LOG", "")) + 1;
            const logCode = `LOG${nextNumber.toString().padStart(3, '0')}`;
            
            const newLog = new Log(
                logCode,
                new Date().toISOString().split('T')[0],
                action.payload.activity,
                action.payload.userRole,
                action.payload.fieldCode || "SYSTEM",
                action.payload.details
            );
            
            state.logs.push(newLog);
        },
       
        filterLogsByDateRange: (state, action: PayloadAction<{startDate: string, endDate: string}>) => {
            return {
                ...state,
                filteredLogs: state.logs.filter(log => 
                    log.logDate >= action.payload.startDate && log.logDate <= action.payload.endDate
                )
            };
        },
        filterLogsByRole: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                filteredLogs: state.logs.filter(log => 
                    log.UserRole === action.payload
                )
            };
        },
        filterLogsByField: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                filteredLogs: state.logs.filter(log => 
                    log.Field === action.payload
                )
            };
        },
       
        searchLogs: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase();
            return {
                ...state,
                filteredLogs: state.logs.filter(log => 
                    log.logDetails.toLowerCase().includes(searchTerm) ||
                    log.UserRole.toLowerCase().includes(searchTerm) ||
                    log.Field.toLowerCase().includes(searchTerm)
                )
            };
        },
        
        importLogs: (state, action: PayloadAction<Log[]>) => {
            
            const newLogs = action.payload.filter(newLog => 
                !state.logs.some(existingLog => existingLog.logCode === newLog.logCode)
            );
            state.logs.push(...newLogs);
            
            
            state.logs.sort((a, b) => new Date(b.logDate).getTime() - new Date(a.logDate).getTime());
        },
        clearAllLogs: (state) => {
            state.logs = [];
        },
        
        exportLogs: (state, action: PayloadAction<{
            startDate?: string;
            endDate?: string;
            role?: string;
            field?: string;
        }>) => {
            let filteredLogs = [...state.logs];
            
            if (action.payload.startDate && action.payload.endDate) {
                filteredLogs = filteredLogs.filter(log => 
                    log.logDate >= action.payload.startDate! && log.logDate <= action.payload.endDate!
                );
            }
            
            if (action.payload.role) {
                filteredLogs = filteredLogs.filter(log => log.UserRole === action.payload.role);
            }
            
            if (action.payload.field) {
                filteredLogs = filteredLogs.filter(log => log.Field === action.payload.field);
            }
            
            
            filteredLogs.sort((a, b) => new Date(b.logDate).getTime() - new Date(a.logDate).getTime());
            
            return {
                ...state,
                exportedLogs: filteredLogs
            };
        }
    },
});

export const { 
    addLog, 
    updateLog, 
    deleteLog, 
    addActivityLog,
    filterLogsByDateRange,
    filterLogsByRole,
    filterLogsByField,
    searchLogs,
    importLogs,
    clearAllLogs,
    exportLogs
} = logSlice.actions;

export default logSlice.reducer;
