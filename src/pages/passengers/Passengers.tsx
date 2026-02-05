import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {type Passenger, removePassenger, selectPassengers} from "../../redux/passengers/passengersSlice";

function Passengers() {

    const passengers = useAppSelector(selectPassengers);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleAddPassenger() {
        navigate("/passengers/add");
    }

    function handleEditPassenger(passengerId: number) {
        navigate(`/passengers/edit/${passengerId}`);
    }

    function handleDeletePassenger(passengerId: number) {
        dispatch(removePassenger(passengerId))
    }

    return (
        <>
            <title>Passengers</title>
            <div className="container">
                <div className="nav-item container my-4">
                    <h1 className='page-heading'>Passengers</h1>
                    <button type="button" className="btn btn-primary add-button btn-success"
                            onClick={handleAddPassenger}>Add Passenger
                    </button>
                </div>
            </div>
            <div className="container">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" className="text-center">Name</th>
                        <th scope="col" className="text-center">Email</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {passengers.map((passenger: Passenger) => (
                        <tr key={passenger.passengerId}>
                            <td>{passenger.firstName} {passenger.lastName}</td>
                            <td>{passenger.email}</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-outline-primary btn-sm mx-1"
                                        onClick={() => handleEditPassenger(passenger.passengerId)}>Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDeletePassenger(passenger.passengerId)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Passengers;
