import {useAppDispatch} from "../../redux/store.ts";
import {addSchedule, type Schedule} from "../../redux/schedules/schedulesSlice.ts";
import SchedulesForm from "../../forms/SchedulesForm.tsx";

function AddSchedule() {

    const dispatch = useAppDispatch();
    const title = "Add";
    const buttonText = "Create";

    const handleAddSchedule = (scheduleData: Schedule) => {
        dispatch(addSchedule(scheduleData));
    };

    return (
        <>
            <SchedulesForm title={title} buttonText={buttonText} onSubmit={handleAddSchedule}/>
        </>
    );
}

export default AddSchedule;