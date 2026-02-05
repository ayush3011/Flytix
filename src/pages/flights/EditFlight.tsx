import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {editFlight, type Flight, selectFlights} from "../../redux/flights/flightsSlice.ts";
import FlightsForm from "../../forms/FlightsForm";

export default function EditFlight() {

    const dispatch = useAppDispatch()
    const title = "Edit"
    const buttonText = "Update"
    const {id} = useParams()
    const flights = useAppSelector(selectFlights)
    const flight = flights.find(flight => flight.id === Number(id))

    if (!flight) {
        return <div className="container my-5">
            <h2>Flight not found</h2>
        </div>
    }

    const handleEditFlight = (flightData: Flight) => {
        dispatch(editFlight(flightData))
    }

    return (
        <>
            <FlightsForm title={title} buttonText={buttonText} onSubmit={handleEditFlight} initialFlight={flight}/>
        </>
    )
}
