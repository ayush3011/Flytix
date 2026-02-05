import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface Booking {
    bookingId: number
    date: Date
    passengerId: number
    scheduledFlightId: number
    status : 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
}

const initialState : Booking[] = [
    // { bookingId: 1, date: new Date('2023-10-01'), passengerId: 101, scheduledFlightId: 201, status: 'CONFIRMED' },
    // { bookingId: 2, date: new Date('2023-10-02'), passengerId: 102, scheduledFlightId: 202, status: 'CANCELLED' },
    // { bookingId: 3, date: new Date('2023-10-03'), passengerId: 103, scheduledFlightId: 203, status: 'COMPLETED' },
    // { bookingId: 4, date: new Date('2023-10-04'), passengerId: 104, scheduledFlightId: 204, status: 'CONFIRMED' },
    // { bookingId: 5, date: new Date('2023-10-05'), passengerId: 105, scheduledFlightId: 205, status: 'CANCELLED' },
    // { bookingId: 6, date: new Date('2023-10-06'), passengerId: 106, scheduledFlightId: 206, status: 'COMPLETED' },
]



export const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<Booking>) => {
            state.push(action.payload)
        },
        removeBooking: (state, action: PayloadAction<number>) => {
            return state.filter(booking => booking.bookingId !== action.payload);
        },
        editBooking: (state, action: PayloadAction<Booking>) => {
            const index = state.findIndex(booking => booking.bookingId === action.payload.bookingId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addBooking, removeBooking, editBooking } = bookingsSlice.actions
export const selectBookings = (state: RootState) => state.bookings

export default bookingsSlice.reducer;
