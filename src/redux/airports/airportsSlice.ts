import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";

export interface Airport {
    code : string
    name: string
    city: string
    country: string
    latitude: number
    longitude: number
};

const initialState: Airport[] = [
    // { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA', latitude: 40.6413, longitude: -73.7781 },
    // { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'UK', latitude: 51.4700, longitude: -0.4543 },
    // { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo', country: 'Japan', latitude: 35.7720, longitude: 140.3929 },
    // { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', latitude: 49.0097, longitude: 2.5479 },
    // { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', latitude: 25.2532, longitude: 55.3657 },
    // { code: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan', latitude: 35.5494, longitude: 139.7798 },
    // { code: 'SIN', name: 'Changi Airport', city: 'Singapore', country: 'Singapore', latitude: 1.3644, longitude: 103.9915 },
    // { code: 'SYD', name: 'Sydney Kingsford Smith Airport', city: 'Sydney', country: 'Australia', latitude: -33.9399, longitude: 151.1753 },
    // { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', latitude: 50.0379, longitude: 8.5622 },
    // { code: 'AMS', name: 'Amsterdam Schiphol Airport', city: 'Amsterdam', country: 'Netherlands', latitude: 52.3105, longitude: 4.7683 },
];

export const airportsSlice = createSlice({
    name: 'airports',
    initialState,
    reducers: {
        addAirport: (state, action: PayloadAction<Airport>) => {
            state.push(action.payload);
        },
        removeAirport: (state, action: PayloadAction<string>) => {
            return state.filter(airport => airport.code !== action.payload);
        },
        editAirport: (state, action: PayloadAction<Airport>) => {
            const index = state.findIndex(airport => airport.code === action.payload.code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const {addAirport, removeAirport, editAirport} = airportsSlice.actions;
export const selectAirports = (state: RootState) => state.airports;

export default airportsSlice.reducer;