import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {editSchedule, type Schedule, selectSchedules} from "../../redux/schedules/schedulesSlice.ts";
import SchedulesForm from "../../forms/SchedulesForm.tsx";

export default function EditSchedule() {

    const dispatch = useAppDispatch();
    const title = "Edit";
    const buttonText = "Update";
    const {scheduleId} = useParams();
    const schedules = useAppSelector(selectSchedules);
    const schedule = schedules.find((schedule) => schedule.scheduleId === Number(scheduleId));

    if (!schedule) {
        return (
            <div className="container my-5">
                <h2>Schedule not found</h2>
            </div>
        );
    }

    const handleEditSchedule = (scheduleData: Schedule) => {
        dispatch(editSchedule(scheduleData));
    };

    return (
        <>
            <SchedulesForm title={title} buttonText={buttonText} onSubmit={handleEditSchedule}
                           initialSchedule={schedule}/>
        </>
    );
}