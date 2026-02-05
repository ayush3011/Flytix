import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {type Booking, removeBooking, selectBookings} from "../../redux/bookings/bookingsSlice.ts";

function Bookings() {

    const bookings = useAppSelector(selectBookings);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    function handleDeleteBooking(bookingId: number) {
        dispatch(removeBooking(bookingId));
    }

    return (
        <>
            <title>Bookings</title>
            <div className="container">
                <div className="nav-item container my-4">
                    <h1 className='page-heading'>Bookings</h1>
                    <button type="button" className="btn btn-primary add-button btn-success"
                            onClick={() => navigate("/bookings/add")}>Add Booking
                    </button>
                </div>
            </div>
            <div className="container">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" className="text-center">Booking Date</th>
                        <th scope="col" className="text-center">Passenger ID</th>
                        <th scope="col" className="text-center">Flight ID</th>
                        <th scope="col" className="text-center">Status</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings.map((booking: Booking) => (
                        <tr key={booking.bookingId}>
                            <td>{new Date(booking.date).toDateString()}</td>
                            <td>{booking.passengerId}</td>
                            <td>{booking.scheduledFlightId}</td>
                            <td>{booking.status}</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-outline-primary btn-sm mx-1"
                                        onClick={() => navigate(`/bookings/edit/${booking.bookingId}`)}>Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDeleteBooking(booking.bookingId)}>Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Bookings;