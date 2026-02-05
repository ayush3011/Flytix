import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {
    editScheduledFlight,
    type ScheduledFlight,
    selectScheduledFlights
} from "../../redux/scheduled-flights/scheduledFlightsSlice.ts";
import ScheduledFlightsForm from "../../forms/ScheduledFlightsForm.tsx";

export default function EditScheduledFlight() {

    const dispatch = useAppDispatch()
    const title = "Edit"
    const buttonText = "Update"
    const {scheduledFlightId} = useParams()
    const scheduledFlights = useAppSelector(selectScheduledFlights)
    const scheduledFlight = scheduledFlights.find(scheduledFlight => scheduledFlight.scheduledFlightId === Number(scheduledFlightId))

    if (!scheduledFlight) {
        return <div className="container my-5">
            <h2>Scheduled Flight not found</h2>
        </div>
    }

    const handleEditScheduledFlight = (scheduledFlightData: ScheduledFlight) => {
        dispatch(editScheduledFlight(scheduledFlightData))
    }

    return (
        <>
            <ScheduledFlightsForm title={title} buttonText={buttonText} onSubmit={handleEditScheduledFlight}
                                  initialScheduledFlight={scheduledFlight}/>
        </>
    )
}