import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface Flight {
    id: number
    name: string
    model: string
    capacity: number
}

const initialState: Flight[] = [
  // { id: 1, name: 'Delta Airlines', model: 'Boeing 737', capacity: 200 },
  // { id: 2, name: 'United Airlines', model: 'Airbus A320', capacity: 200 },
  // { id: 3, name: 'American Airlines', model: 'Boeing 787', capacity: 200 },
  // { id: 4, name: 'Southwest Airlines', model: 'Boeing 737', capacity: 200 },
  // { id: 5, name: 'JetBlue Airways', model: 'Airbus A321', capacity: 200 },
  // { id: 6, name: 'raffale', model: '737', capacity: 200 },
]

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    addFlight: (state, action: PayloadAction<Flight>) => {
      state.push(action.payload)
    },
    removeFlight: (state, action: PayloadAction<number>) => {
      return state.filter(flight => flight.id !== action.payload);
    },
    editFlight: (state, action: PayloadAction<Flight>) => {
        const index = state.findIndex(flight => flight.id === action.payload.id);
        if (index !== -1) {
            state[index] = action.payload;
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFlight, removeFlight, editFlight } = flightsSlice.actions
export const selectFlights = (state: RootState) => state.flights

export default flightsSlice.reducer