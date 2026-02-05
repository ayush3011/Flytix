import {useParams} from "react-router";
import {editAirport, type Airport, selectAirports} from "../../redux/airports/airportsSlice.ts";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import AirportsForm from "../../forms/AirportsForm";

export default function EditAirport() {

    const dispatch = useAppDispatch()
    const title = "Edit"
    const buttonText = "Update"
    const {code} = useParams()
    const airports = useAppSelector(selectAirports)
    const airport = airports.find(airport => airport.code === code)

    if (!airport) {
        return <div className="container my-5">
            <h2>Airport not found</h2>
        </div>
    }

    const handleEditAirport = (airportData: Airport) => {
        dispatch(editAirport(airportData))
    }

    return (
        <>
            <AirportsForm title={title} buttonText={buttonText} onSubmit={handleEditAirport} initialAirport={airport}/>
        </>
    )
}
