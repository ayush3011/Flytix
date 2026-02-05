import {useAppDispatch} from "../../redux/store";
import {addPassenger, type Passenger} from "../../redux/passengers/passengersSlice";
import PassengersForm from "../../forms/PassengersForm";

function AddPassenger() {

    const dispatch = useAppDispatch();
    const title = "Add";
    const buttonText = "Create";

    const handleAddPassenger = (passengerData: Passenger) => {
        dispatch(addPassenger(passengerData));
    };

    return (
        <>
            <PassengersForm title={title} buttonText={buttonText} onSubmit={handleAddPassenger}/>
        </>
    );
}

export default AddPassenger;