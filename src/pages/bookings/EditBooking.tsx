import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {editBooking, type Booking, selectBookings} from "../../redux/bookings/bookingsSlice.ts";
import BookingsForm from "../../forms/BookingsForm.tsx";

export default function EditBooking() {

    const dispatch = useAppDispatch()
    const title = "Edit"
    const buttonText = "Update"
    const {bookingId} = useParams()
    const bookings = useAppSelector(selectBookings)
    const booking = bookings.find(booking => booking.bookingId === Number(bookingId))

    if (!booking) {
        return <div className="container my-5">
            <h2>Booking not found</h2>
        </div>
    }

    const handleEditBooking = (bookingData: Booking) => {
        dispatch(editBooking(bookingData))
    }

    return (
        <>
            <BookingsForm title={title} buttonText={buttonText} onSubmit={handleEditBooking} initialBooking={booking}/>
        </>
    )
}