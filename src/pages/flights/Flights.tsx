import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {removeFlight, selectFlights} from "../../redux/flights/flightsSlice";

function Flights() {
    const flights = useAppSelector(selectFlights);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleAddFlight() {
        navigate("/flights/add");
    }

    function handleEditFlight(id: number) {
        navigate(`/flights/edit/${id}`);
    }

    function handleDeleteFlight(id: number) {
        dispatch(removeFlight(id))
    }

    return (
        <>
            <title>Flights</title>
            <div className="container">
                <div className="nav-item container my-4">
                    <h1 className='page-heading'>Flights</h1>
                    <button type="button" className="btn btn-primary add-button btn-success"
                            onClick={handleAddFlight}>Add Flights
                    </button>
                </div>
            </div>
            <div className="container">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" className="text-center">Carrier Name</th>
                        <th scope="col" className="text-center">Flight Model</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id}>
                            <td>{flight.name}</td>
                            <td>{flight.model}</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-outline-primary btn-sm mx-1"
                                        onClick={() => handleEditFlight(flight.id)}>Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDeleteFlight(flight.id)}>Delete
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

export default Flights