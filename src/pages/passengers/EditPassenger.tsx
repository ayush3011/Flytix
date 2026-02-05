import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {editPassenger, type Passenger, selectPassengers} from "../../redux/passengers/passengersSlice.ts";
import PassengersForm from "../../forms/PassengersForm.tsx";

export default function EditPassenger() {

    const dispatch = useAppDispatch()
    const title = "Edit"
    const buttonText = "Update"
    const {passengerId} = useParams()
    const passengers = useAppSelector(selectPassengers)

    const passenger = passengers.find(passenger => passenger.passengerId === Number(passengerId))
    if (!passenger) {
        return <div className="container my-5">
            <h2>Passenger not found</h2>
        </div>
    }

    const handleEditPassenger = (passengerData: Passenger) => {
        dispatch(editPassenger(passengerData))
    }

    return (
        <>
            <PassengersForm title={title} buttonText={buttonText} onSubmit={handleEditPassenger}
                            initialPassenger={passenger}/>
        </>
    )
}
