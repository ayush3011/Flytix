import {useNavigate} from "react-router";
import {useAppSelector, useAppDispatch} from "../../redux/store";
import {
    selectScheduledFlights,
    removeScheduledFlight,
    type ScheduledFlight
} from "../../redux/scheduled-flights/scheduledFlightsSlice";
import type {Flight} from "../../redux/flights/flightsSlice.ts";

function ScheduledFlights() {

    const scheduledFlights = useAppSelector(selectScheduledFlights);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const flights: Flight[] = useAppSelector((state) => state.flights);

    function handleAddScheduledFlight() {
        navigate("/scheduled-flights/add");
    }

    function handleEditScheduledFlight(scheduledFlightId: number) {
        console.log("Edit Scheduled Flight Clicked", scheduledFlightId);
        navigate(`/scheduled-flights/edit/${scheduledFlightId}`);
    }

    function handleDeleteScheduledFlight(scheduledFlightId: number) {
        console.log("Delete Scheduled Flight Clicked", scheduledFlightId);
        dispatch(removeScheduledFlight(scheduledFlightId))
        console.log(scheduledFlights);
    }

    return (
        <>
            <title>Scheduled Flights</title>
            <div className="container">
                <div className="nav-item container my-4">
                    <h1 className='page-heading'>Scheduled Flights</h1>
                    <button type="button" className="btn btn-primary add-button btn-success"
                            onClick={handleAddScheduledFlight}>Add
                        Scheduled Flight
                    </button>
                </div>
            </div>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Carrier Name</th>
                        <th scope="col">Flight Model</th>
                        <th scope="col">Available Seats</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scheduledFlights.map((scheduledFlight: ScheduledFlight) => (
                        <tr key={scheduledFlight.scheduledFlightId}>
                            <td>{flights.find(flight => flight.id === scheduledFlight.flightId)?.name}</td>
                            <td>{flights.find(flight => flight.id === scheduledFlight.flightId)?.model}</td>
                            <td>{scheduledFlight.availableSeats}</td>
                            <td>
                                <button type="button" className="btn btn-outline-primary btn-sm mx-1"
                                        onClick={() => handleEditScheduledFlight(scheduledFlight.scheduledFlightId)}>Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDeleteScheduledFlight(scheduledFlight.scheduledFlightId)}>Delete
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

export default ScheduledFlights;