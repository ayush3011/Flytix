import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";

export interface Passenger {
    passengerId: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: Date;
}

const initialState: Passenger[] = [
    // {
    //     passengerId: 1,
    //     firstName: "John",
    //     lastName: "Doe",
    //     email: "abc@gmail.com}",
    //     phone: "1234567890",
    //     dob: new Date("1990-01-01")
    // },
    // {
    //     passengerId: 2,
    //     firstName: "Jane",
    //     lastName: "Smith",
    //     email: "xyz@yahoo.com",
    //     phone: "0987654321",
    //     dob: new Date("1985-05-15")
    // }
];

export const passengersSlice = createSlice({
    name: "passengers",
    initialState,
    reducers: {
        addPassenger: (state, action: PayloadAction<Passenger>) => {
            state.push(action.payload);
        },
        removePassenger: (state, action: PayloadAction<number>) => {
            return state.filter(passenger => passenger.passengerId !== action.payload);
        },
        editPassenger: (state, action: PayloadAction<Passenger>) => {
            const index = state.findIndex(passenger => passenger.passengerId === action.payload.passengerId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const {addPassenger, removePassenger, editPassenger} = passengersSlice.actions;
export const selectPassengers = (state: RootState) => state.passengers;

export default passengersSlice.reducer;