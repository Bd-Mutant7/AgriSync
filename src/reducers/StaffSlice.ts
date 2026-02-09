import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../models/Staff";

const initialState: Staff[] = [
    new Staff("ST001", "John", "Kamau", "Farm Manager", "MALE", "2020-01-15", "1985-05-20", "123 Nairobi Road", "Karen", "Nairobi", "Nairobi County", "00100", "+254 712 345 678", "john.kamau@agrisync.co.ke", 5, "FLD001", "VH001"),
    new Staff("ST002", "Jane", "Wanjiku", "Tea Plantation Supervisor", "FEMALE", "2019-03-10", "1990-07-15", "456 Kericho Highway", "Town Centre", "Kericho", "Kericho County", "20200", "+254 723 456 789", "jane.wanjiku@agrisync.co.ke", 4, "FLD002", "VH002"),
    new Staff("ST003", "Peter", "Ochieng", "Agricultural Scientist", "MALE", "2021-06-20", "1988-09-25", "789 Kiambu Road", "Thika", "Kiambu", "Kiambu County", "01000", "+254 734 567 890", "peter.ochieng@agrisync.co.ke", 3, "FLD003", "VH003"),
    new Staff("ST004", "Mary", "Atieno", "Irrigation Technician", "FEMALE", "2018-11-05", "1992-11-30", "101 Kisumu Street", "Milimani", "Kisumu", "Kisumu County", "40100", "+254 745 678 901", "mary.atieno@agrisync.co.ke", 2, "FLD006", "VH004"),
    new Staff("ST005", "David", "Mwangi", "Harvesting Specialist", "MALE", "2022-02-15", "1995-03-10", "202 Nakuru Avenue", "Section 58", "Nakuru", "Nakuru County", "20100", "+254 756 789 012", "david.mwangi@agrisync.co.ke", 1, "FLD001", "VH005"),
    new Staff("ST006", "Susan", "Njeri", "Quality Control Officer", "FEMALE", "2020-08-22", "1991-12-05", "303 Meru Lane", "Nkubu", "Meru", "Meru County", "60200", "+254 767 890 123", "susan.njeri@agrisync.co.ke", 4, "FLD005", "VH006"),
    new Staff("ST007", "James", "Odhiambo", "Equipment Mechanic", "MALE", "2019-05-14", "1987-06-18", "404 Machakos Drive", "Mlolongo", "Machakos", "Machakos County", "90100", "+254 778 901 234", "james.odhiambo@agrisync.co.ke", 5, "FLD007", "VH007"),
    new Staff("ST008", "Grace", "Akinyi", "Greenhouse Manager", "FEMALE", "2021-09-30", "1993-04-22", "505 Naivasha Road", "Karagita", "Naivasha", "Nakuru County", "20117", "+254 789 012 345", "grace.akinyi@agrisync.co.ke", 3, "FLD013", "VH008"),
    new Staff("ST009", "Paul", "Kipchoge", "Safety Officer", "MALE", "2020-12-10", "1989-08-15", "606 Eldoret Highway", "Huruma", "Eldoret", "Uasin Gishu County", "30100", "+254 790 123 456", "paul.kipchoge@agrisync.co.ke", 2, "ALL_FIELDS", "VH009"),
    new Staff("ST010", "Esther", "Muthoni", "Farm Accountant", "FEMALE", "2018-04-25", "1990-01-30", "707 Mombasa Road", "Athi River", "Machakos", "Machakos County", "00204", "+254 701 234 567", "esther.muthoni@agrisync.co.ke", 6, "HEAD_OFFICE", "VH010"),
    new Staff("ST011", "Michael", "Omondi", "Pest Control Expert", "MALE", "2022-03-18", "1994-07-12", "808 Nyeri Close", "Mathari", "Nyeri", "Nyeri County", "10100", "+254 702 345 678", "michael.omondi@agrisync.co.ke", 3, "FLD009", "VH011"),
    new Staff("ST012", "Sarah", "Chebet", "Seed Technologist", "FEMALE", "2021-11-05", "1992-10-08", "909 Bungoma Street", "Chwele", "Bungoma", "Bungoma County", "50200", "+254 703 456 789", "sarah.chebet@agrisync.co.ke", 2, "FLD012", "VH012"),
    new Staff("ST013", "Joseph", "Mutua", "Tea Processing Manager", "MALE", "2019-07-19", "1986-02-14", "1010 Embu Road", "Runyenjes", "Embu", "Embu County", "60100", "+254 704 567 890", "joseph.mutua@agrisync.co.ke", 5, "FLD002", "VH013"),
    new Staff("ST014", "Lydia", "Adhiambo", "Coffee Quality Analyst", "FEMALE", "2020-10-28", "1991-05-25", "1111 Muranga Avenue", "Maragua", "Muranga", "Muranga County", "10200", "+254 705 678 901", "lydia.adhiambo@agrisync.co.ke", 4, "FLD003", "VH014"),
    new Staff("ST015", "Daniel", "Kariuki", "Field Operations Director", "MALE", "2017-06-12", "1984-11-03", "1212 Kitui Lane", "Mwingi", "Kitui", "Kitui County", "90200", "+254 706 789 012", "daniel.kariuki@agrisync.co.ke", 8, "ALL_FIELDS", "VH015")
];

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addStaff: (state, action: PayloadAction<Staff>) => {
            
            const newStaff = { ...action.payload };
            if (!newStaff.staffId) {
                const lastStaffId = state[state.length - 1]?.staffId || "ST000";
                const nextNumber = parseInt(lastStaffId.replace("ST", "")) + 1;
                newStaff.staffId = `ST${nextNumber.toString().padStart(3, '0')}`;
            }
            state.push(newStaff);
        },
        updateStaff: (state, action: PayloadAction<Staff>) => {
            return state.map((staff) => staff.staffId === action.payload.staffId
                ? action.payload
                : staff
            );
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
            return state.filter((staff) => staff.staffId !== action.payload);
        },
       
        promoteStaff: (state, action: PayloadAction<{staffId: string, newDesignation: string}>) => {
            return state.map(staff => 
                staff.staffId === action.payload.staffId 
                    ? { ...staff, designation: action.payload.newDesignation }
                    : staff
            );
        },
        updateStaffContact: (state, action: PayloadAction<{staffId: string, contactNo: string, email: string}>) => {
            return state.map(staff => 
                staff.staffId === action.payload.staffId 
                    ? { ...staff, contactNo: action.payload.contactNo, email: action.payload.email }
                    : staff
            );
        },
        assignStaffToField: (state, action: PayloadAction<{staffId: string, fieldCode: string}>) => {
            return state.map(staff => 
                staff.staffId === action.payload.staffId 
                    ? { ...staff, fieldCode: action.payload.fieldCode }
                    : staff
            );
        },
        assignVehicleToStaff: (state, action: PayloadAction<{staffId: string, vehicleCode: string}>) => {
            return state.map(staff => 
                staff.staffId === action.payload.staffId 
                    ? { ...staff, vcode: action.payload.vehicleCode }
                    : staff
            );
        },
       
        searchStaffByName: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase();
            return state.filter(staff => 
                staff.firstName.toLowerCase().includes(searchTerm) ||
                staff.lastName.toLowerCase().includes(searchTerm) ||
                `${staff.firstName} ${staff.lastName}`.toLowerCase().includes(searchTerm)
            );
        },
        filterStaffByDesignation: (state, action: PayloadAction<string>) => {
            return state.filter(staff => 
                staff.designation.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        filterStaffByLocation: (state, action: PayloadAction<string>) => {
            return state.filter(staff => 
                staff.addressLine3.toLowerCase().includes(action.payload.toLowerCase()) ||
                staff.addressLine4.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        importStaff: (state, action: PayloadAction<Staff[]>) => {
           
            const newStaff = action.payload.filter(newStaffMember => 
                !state.some(existingStaff => existingStaff.staffId === newStaffMember.staffId)
            );
            state.push(...newStaff);
        },
        clearAllStaff: () => {
            return [];
        },
        
        getStaffStatistics: (state) => {
            const totalStaff = state.length;
            const maleCount = state.filter(staff => staff.gender === "MALE").length;
            const femaleCount = state.filter(staff => staff.gender === "FEMALE").length;
            const designations = [...new Set(state.map(staff => staff.designation))];
            const averageMembers = state.reduce((sum, staff) => sum + (staff.members || 0), 0) / totalStaff;
            
            return {
                totalStaff,
                maleCount,
                femaleCount,
                designations,
                averageMembers,
                byLocation: state.reduce((acc, staff) => {
                    const location = staff.addressLine4;
                    acc[location] = (acc[location] || 0) + 1;
                    return acc;
                }, {} as Record<string, number>)
            };
        }
    }
});

export const { 
    addStaff, 
    updateStaff, 
    deleteStaff,
    promoteStaff,
    updateStaffContact,
    assignStaffToField,
    assignVehicleToStaff,
    searchStaffByName,
    filterStaffByDesignation,
    filterStaffByLocation,
    importStaff,
    clearAllStaff,
    getStaffStatistics
} = staffSlice.actions;
export default staffSlice.reducer;
