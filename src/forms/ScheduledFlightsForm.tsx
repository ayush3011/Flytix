import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router';
import {useAppSelector} from '../redux/store';
import type {ScheduledFlight} from '../redux/scheduled-flights/scheduledFlightsSlice';
import type {Flight} from '../redux/flights/flightsSlice';
import type {Schedule} from '../redux/schedules/schedulesSlice';

export default function ScheduledFlightsForm({title = 'Add', buttonText = 'Create', onSubmit, initialScheduledFlight}: {
    title?: string,
    buttonText?: string,
    onSubmit?: (scheduledFlightData: ScheduledFlight) => void,
    initialScheduledFlight?: ScheduledFlight
}) {
    const flights: Flight[] = useAppSelector((state) => state.flights);
    const schedules: Schedule[] = useAppSelector((state) => state.schedules);

    const [scheduledFlightId, setScheduledFlightId] = useState(initialScheduledFlight ? String(initialScheduledFlight.scheduledFlightId) : '');
    const [flightId, setFlightId] = useState(initialScheduledFlight ? String(initialScheduledFlight.flightId) : '');
    const [scheduleId, setScheduleId] = useState(initialScheduledFlight ? String(initialScheduledFlight.scheduleId) : '');
    const [availableSeats, setAvailableSeats] = useState(initialScheduledFlight ? String(initialScheduledFlight.availableSeats) : '');
    const navigate = useNavigate();

    useEffect(() => {
        if (initialScheduledFlight) {
            setScheduledFlightId(String(initialScheduledFlight.scheduledFlightId));
            setFlightId(String(initialScheduledFlight.flightId));
            setScheduleId(String(initialScheduledFlight.scheduleId));
            setAvailableSeats(String(initialScheduledFlight.availableSeats));
        }
    }, [initialScheduledFlight]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                scheduledFlightId: Number(scheduledFlightId),
                flightId: Number(flightId),
                scheduleId: Number(scheduleId),
                availableSeats: Number(availableSeats)
            });
            navigate('/scheduled-flights');
        }
    };

    return (
        <>
            <div className="container my-5">
                <h2>{title} Scheduled Flight</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="scheduledFlightId">Scheduled Flight ID:</label>
                        <input
                            type="number"
                            className={`form-control${initialScheduledFlight ? ' bg-secondary text-light' : ''}`}
                            id="scheduledFlightId"
                            value={scheduledFlightId}
                            onChange={e => setScheduledFlightId(e.target.value)}
                            readOnly={!!initialScheduledFlight}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="flightId">Flight:</label>
                        <select className="form-control" id="flightId" value={flightId}
                                onChange={e => setFlightId(e.target.value)}>
                            <option value="" disabled>Select a flight</option>
                            {flights.map((flight) => (
                                <option key={flight.id} value={flight.id}>
                                    {flight.name} - {flight.model}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="scheduleId">Schedule:</label>
                        <select className="form-control" id="scheduleId" value={scheduleId}
                                onChange={e => setScheduleId(e.target.value)}>
                            <option value="" disabled>Select a schedule</option>
                            {schedules.map((schedule) => (
                                <option key={schedule.scheduleId} value={schedule.scheduleId}>
                                    {new Date(schedule.departureTime).toLocaleString()} - {new Date(schedule.arrivalTime).toLocaleString()}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="availableSeats">Available Seats:</label>
                        <input type="number" className="form-control" id="availableSeats" value={availableSeats}
                               onChange={e => setAvailableSeats(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                </form>
            </div>
        </>
    );
}