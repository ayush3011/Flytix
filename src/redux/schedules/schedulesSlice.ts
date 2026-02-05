import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface Schedule {
    scheduleId: number
    departureTime : Date
    arrivalTime : Date
    origin : string
    destination : string
}

const initialState: Schedule[] = [
    // { scheduleId: 1, departureTime: new Date('2023-10-01T10:00:00'), arrivalTime: new Date('2023-10-01T14:00:00'), origin: 'JFK', destination: 'LAX' },
    // { scheduleId: 2, departureTime: new Date('2023-10-02T12:00:00'), arrivalTime: new Date('2023-10-02T16:00:00'), origin: 'LAX', destination: 'ORD' },
    // { scheduleId: 3, departureTime: new Date('2023-10-03T14:00:00'), arrivalTime: new Date('2023-10-03T18:00:00'), origin: 'ORD', destination: 'MIA' },
    // { scheduleId: 4, departureTime: new Date('2023-10-04T16:00:00'), arrivalTime: new Date('2023-10-04T20:00:00'), origin: 'MIA', destination: 'JFK' },
    // { scheduleId: 5, departureTime: new Date('2023-10-05T18:00:00'), arrivalTime: new Date('2023-10-05T22:00:00'), origin: 'JFK', destination: 'ATL' },
    // { scheduleId: 6, departureTime: new Date('2023-10-06T20:00:00'), arrivalTime: new Date('2023-10-07T00:00:00'), origin: 'ATL', destination: 'DFW' },
]

export const schedulesSlice = createSlice({
    name: 'schedules',
    initialState,
    reducers: {
        addSchedule: (state, action: PayloadAction<Schedule>) => {
            state.push(action.payload)
        },
        removeSchedule: (state, action: PayloadAction<number>) => {
            return state.filter(schedule => schedule.scheduleId !== action.payload);
        },
        editSchedule: (state, action: PayloadAction<Schedule>) => {
            const index = state.findIndex(schedule => schedule.scheduleId === action.payload.scheduleId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addSchedule, removeSchedule, editSchedule } = schedulesSlice.actions
export const selectSchedules = (state: RootState) => state.schedules

export default schedulesSlice.reducer