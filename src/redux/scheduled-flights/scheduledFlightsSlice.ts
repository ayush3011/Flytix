import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";

export interface ScheduledFlight{
    scheduledFlightId: number
    scheduleId : number
    flightId : number
    availableSeats : number // look into this
}

const initialState: ScheduledFlight[] = [
    // { scheduledFlightId: 1, scheduleId: 1, flightId: 1, availableSeats: 150 },
    // { scheduledFlightId: 2, scheduleId: 2, flightId: 2, availableSeats: 180 },
    // { scheduledFlightId: 3, scheduleId: 3, flightId: 3, availableSeats: 200 },
    // { scheduledFlightId: 4, scheduleId: 4, flightId: 4, availableSeats: 160 },
    // { scheduledFlightId: 5, scheduleId: 5, flightId: 5, availableSeats: 170 },
    // { scheduledFlightId: 6, scheduleId: 6, flightId: 6, availableSeats: 190 },
];

export const scheduledFlightsSlice = createSlice({
    name: 'scheduledFlights',
    initialState,
    reducers: {
        addScheduledFlight: (state, action: PayloadAction<ScheduledFlight>) => {
            state.push(action.payload)
        },
        removeScheduledFlight: (state, action: PayloadAction<number>) => {
            return state.filter(scheduledFlight => scheduledFlight.scheduledFlightId !== action.payload);
        },
        editScheduledFlight: (state, action: PayloadAction<ScheduledFlight>) => {
            const index = state.findIndex(scheduledFlight => scheduledFlight.scheduledFlightId === action.payload.scheduledFlightId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const {addScheduledFlight, removeScheduledFlight, editScheduledFlight} = scheduledFlightsSlice.actions
export const selectScheduledFlights = (state: RootState) => state.scheduledFlights

// Export the reducer as default
export default scheduledFlightsSlice.reducer
