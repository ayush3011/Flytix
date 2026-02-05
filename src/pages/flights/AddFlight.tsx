import {useAppDispatch} from "../../redux/store";
import {addFlight, type Flight} from "../../redux/flights/flightsSlice";
import FlightsForm from "../../forms/FlightsForm";

function AddFlight() {

    const dispatch = useAppDispatch();
    const title = "Add";
    const buttonText = "Create";

    const handleAddFlight = (flightData: Flight) => {
        dispatch(addFlight(flightData));
    };

    return (
        <>
            <FlightsForm title={title} buttonText={buttonText} onSubmit={handleAddFlight}/>
        </>
    );
}

export default AddFlight;