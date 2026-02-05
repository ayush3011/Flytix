import {useAppDispatch} from "../../redux/store";
import {addBooking, type Booking} from "../../redux/bookings/bookingsSlice.ts";
import BookingsForm from "../../forms/BookingsForm.tsx";

function AddBooking() {

    const dispatch = useAppDispatch();
    const title = "Add";
    const buttonText = "Create";

    const handleAddBooking = (bookingData: Booking) => {
        dispatch(addBooking(bookingData));
    };

    return (
        <>
            <BookingsForm title={title} buttonText={buttonText} onSubmit={handleAddBooking}/>
        </>
    );
}

export default AddBooking;