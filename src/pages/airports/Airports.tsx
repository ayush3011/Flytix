import {useNavigate} from "react-router";
import {useAppSelector, useAppDispatch} from "../../redux/store.ts";
import {removeAirport, selectAirports} from "../../redux/airports/airportsSlice.ts";

function Airports() {

    const airports = useAppSelector(selectAirports);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleAddAirport() {
        navigate("/airports/add");
    }

    function handleEditAirport(code: string) {
        navigate(`/airports/edit/${code}`);
    }

    function handleDeleteAirport(code: string) {
        dispatch(removeAirport(code))
    }

    return (
        <>
            <title>Airports</title>
            <div className="container">
                <div className="nav-item container my-4">
                    <h1 className='page-heading'>Airports</h1>
                    <button type="button" className="btn btn-primary add-button btn-success"
                            onClick={handleAddAirport}>Add Airport
                    </button>
                </div>
            </div>
            <div className="container">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" className="text-center">Name</th>
                        <th scope="col" className="text-center">City</th>
                        <th scope="col" className="text-center">Country</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {airports.map((airport) => (
                        <tr key={airport.code}>
                            <td>{airport.name}</td>
                            <td>{airport.city}</td>
                            <td>{airport.country}</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-outline-primary btn-sm mx-1"
                                        onClick={() => handleEditAirport(airport.code)}>Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDeleteAirport(airport.code)}>Delete
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

export default Airports;