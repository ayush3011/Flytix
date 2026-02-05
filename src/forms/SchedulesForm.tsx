import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router";
import {useAppSelector} from "../redux/store.ts";
import type {Schedule} from '../redux/schedules/schedulesSlice';
import type {Airport} from '../redux/airports/airportsSlice';

export default function SchedulesForm({title = "Add", buttonText = "Create", onSubmit, initialSchedule}: {
    title?: string,
    buttonText?: string,
    onSubmit?: (scheduleData: Schedule) => void,
    initialSchedule?: Schedule
}) {
    const [scheduleId, setScheduleId] = useState(initialSchedule ? String(initialSchedule.scheduleId) : "");
    const [departureTime, setDepartureTime] = useState(initialSchedule ? initialSchedule.departureTime.toISOString().slice(0, 16) : "");
    const [arrivalTime, setArrivalTime] = useState(initialSchedule ? initialSchedule.arrivalTime.toISOString().slice(0, 16) : "");
    const [origin, setOrigin] = useState(initialSchedule ? initialSchedule.origin : "");
    const [destination, setDestination] = useState(initialSchedule ? initialSchedule.destination : "");
    const navigate = useNavigate();
    const airports = useAppSelector(state => state.airports);

    useEffect(() => {
        if (initialSchedule) {
            setScheduleId(String(initialSchedule.scheduleId));
            setDepartureTime(initialSchedule.departureTime.toISOString().slice(0, 16));
            setArrivalTime(initialSchedule.arrivalTime.toISOString().slice(0, 16));
            setOrigin(initialSchedule.origin);
            setDestination(initialSchedule.destination);
        }
    }, [initialSchedule]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                scheduleId: Number(scheduleId),
                departureTime: new Date(departureTime),
                arrivalTime: new Date(arrivalTime),
                origin,
                destination
            });
            navigate("/schedules");

        }
    };

    return (
        <>
            <div className="container my-5">
                <h2>{title} Schedule</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="scheduleId">Schedule ID:</label>
                        <input
                            type="number"
                            className={`form-control${initialSchedule ? " bg-secondary text-light" : ""}`}
                            id="scheduleId"
                            value={scheduleId}
                            onChange={e => setScheduleId(e.target.value)}
                            readOnly={!!initialSchedule}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="departureTime">Departure Time:</label>
                        <input type="datetime-local" className="form-control" id="departureTime" value={departureTime}
                               onChange={e => setDepartureTime(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="arrivalTime">Arrival Time:</label>
                        <input type="datetime-local" className="form-control" id="arrivalTime" value={arrivalTime}
                               onChange={e => setArrivalTime(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="origin">Origin:</label>
                        <select
                            className="form-control"
                            id="origin"
                            value={origin}
                            onChange={e => setOrigin(e.target.value)}
                        >
                            <option value="">Select Origin Airport</option>
                            {airports.map((airport: Airport) => (
                                <option key={airport.code} value={airport.code}>
                                    {airport.name} ({airport.code})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="destination">Destination:</label>
                        <select
                            className="form-control"
                            id="destination"
                            value={destination}
                            onChange={e => setDestination(e.target.value)}
                        >
                            <option value="">Select Destination Airport</option>
                            {airports.map((airport: Airport) => (
                                <option key={airport.code} value={airport.code}>
                                    {airport.name} ({airport.code})
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                </form>
            </div>
        </>
    );
}
