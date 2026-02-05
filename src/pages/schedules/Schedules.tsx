import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {removeSchedule, selectSchedules} from "../../redux/schedules/schedulesSlice.ts";

function Schedules() {

    const schedules = useAppSelector(selectSchedules);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleAddSchedule() {
        navigate("/schedules/add");
    }

    function handleEditSchedule(scheduleId: number) {

        navigate(`/schedules/edit/${scheduleId}`);
    }

    function handleDeleteSchedule(scheduleId: number) {
        dispatch(removeSchedule(scheduleId))
    }

    return (
        <>
            <title>Schedules</title>
            <div className="container">
                <div className="nav-item container my-4">
                    <h1 className='page-heading'>Schedules</h1>
                    <button type="button" className="btn btn-primary add-button btn-success"
                            onClick={handleAddSchedule}>Add Schedule
                    </button>
                </div>
            </div>
            <div className="container">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col" className="text-center">Schedule ID</th>
                        <th scope="col" className="text-center">Departure Time</th>
                        <th scope="col" className="text-center">Arrival Time</th>
                        <th scope="col" className="text-center">Origin</th>
                        <th scope="col" className="text-center">Destination</th>
                        <th scope="col" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {schedules.map((schedule) => (
                        <tr key={schedule.scheduleId}>
                            <td>{schedule.scheduleId}</td>
                            <td>{new Date(schedule.departureTime).toLocaleString()}</td>
                            <td>{new Date(schedule.arrivalTime).toLocaleString()}</td>
                            <td>{schedule.origin}</td>
                            <td>{schedule.destination}</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-outline-primary btn-sm mx-1"
                                        onClick={() => handleEditSchedule(schedule.scheduleId)}>Edit
                                </button>
                                <button type="button" className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDeleteSchedule(schedule.scheduleId)}>Delete
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

export default Schedules