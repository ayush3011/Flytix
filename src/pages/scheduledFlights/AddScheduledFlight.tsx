import {useAppDispatch} from "../../redux/store.ts";
import {addScheduledFlight, type ScheduledFlight} from "../../redux/scheduled-flights/scheduledFlightsSlice.ts";
import ScheduledFlightsForm from "../../forms/ScheduledFlightsForm.tsx";

function AddScheduledFlight() {

    const dispatch = useAppDispatch();
    const title = "Add";
    const buttonText = "Create";

    const handleAddScheduledFlight = (scheduledFlightData: ScheduledFlight) => {
        dispatch(addScheduledFlight(scheduledFlightData));
    };

    return (
        <>
            <ScheduledFlightsForm title={title} buttonText={buttonText} onSubmit={handleAddScheduledFlight}/>
        </>
    );
}

export default AddScheduledFlight;

