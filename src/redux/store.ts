import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'
import flightsReducer from './flights/flightsSlice'
import airportsReducer from './airports/airportsSlice'
import bookingsReducer from "./bookings/bookingsSlice.ts";
import passengersReducer from "./passengers/passengersSlice.ts";
import schedulesReducer from "./schedules/schedulesSlice.ts";
import scheduledFlightsReducer from "./scheduled-flights/scheduledFlightsSlice.ts";

export const store = configureStore({
    reducer: {
        flights: flightsReducer,
        airports: airportsReducer,
        bookings: bookingsReducer,
        passengers: passengersReducer,
        schedules: schedulesReducer,
        scheduledFlights: scheduledFlightsReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()