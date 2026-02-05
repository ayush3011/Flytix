import {useAppDispatch} from "../../redux/store.ts";
import {addAirport, type Airport} from "../../redux/airports/airportsSlice.ts";
import AirportsForm from "../../forms/AirportsForm.tsx";

function AddAirport() {

    const dispatch = useAppDispatch();
    const title = "Add";
    const buttonText = "Create";

    const handleAddAirport = (airportData: Airport) => {
        dispatch(addAirport(airportData));
    };

    return (
        <>
            <AirportsForm title={title} buttonText={buttonText} onSubmit={handleAddAirport}/>
        </>
    );
}

export default AddAirport;