import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router";
import {useAppSelector} from "../redux/store";
import type {Booking} from "../redux/bookings/bookingsSlice";

export default function BookingsForm({title = "Add", buttonText = "Create", onSubmit, initialBooking}: {
    title?: string,
    buttonText?: string,
    onSubmit?: (bookingData: Booking) => void,
    initialBooking?: Booking
}) {
    const passengers = useAppSelector(state => state.passengers);
    const scheduledFlights = useAppSelector(state => state.scheduledFlights);
    const flights = useAppSelector(state => state.flights);
    const schedules = useAppSelector(state => state.schedules);
    const [bookingId, setBookingId] = useState(initialBooking ? String(initialBooking.bookingId) : "");
    const [date, setDate] = useState(initialBooking ? initialBooking.date.toISOString().split('T')[0] : "");
    const [passengerId, setPassengerId] = useState(initialBooking ? String(initialBooking.passengerId) : "");
    const [scheduledFlightId, setScheduledFlightId] = useState(initialBooking ? String(initialBooking.scheduledFlightId) : "");
    const [status, setStatus] = useState<string>(initialBooking ? initialBooking.status : "");
    const navigate = useNavigate();

    useEffect(() => {
        if (initialBooking) {
            setBookingId(String(initialBooking.bookingId));
            setDate(initialBooking.date.toISOString().split('T')[0]);
            setPassengerId(String(initialBooking.passengerId));
            setScheduledFlightId(String(initialBooking.scheduledFlightId));
            setStatus(initialBooking.status);
        }
    }, [initialBooking]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                bookingId: Number(bookingId),
                date: new Date(date),
                passengerId: Number(passengerId),
                scheduledFlightId: Number(scheduledFlightId),
                status: status as 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
            });
            navigate("/bookings");
        }
    };

    const formatDateTime = (date: Date) => {
        return new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="container my-5">
            <h2>{title} Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="bookingId">Booking ID:</label>
                    <input
                        type="number"
                        className={`form-control${initialBooking ? " bg-secondary text-light" : ""}`}
                        id="bookingId"
                        value={bookingId}
                        onChange={e => setBookingId(e.target.value)}
                        readOnly={!!initialBooking}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="date">Booking Date:</label>
                    <input type="date" className="form-control" id="date" value={date}
                           onChange={e => setDate(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="passengerId">Passenger Id:</label>
                    <select className="form-control" id="passengerId" value={passengerId}
                            onChange={e => setPassengerId(e.target.value)}>
                        <option value="">Select Passenger</option>
                        {passengers.map(p => (
                            <option key={p.passengerId}
                                    value={p.passengerId}>{p.passengerId} - {p.firstName} {p.lastName}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="scheduledFlightId">Scheduled Flight:</label>
                    <select className="form-control" id="scheduledFlightId" value={scheduledFlightId}
                            onChange={e => setScheduledFlightId(e.target.value)}>
                        <option value="">Select Scheduled Flight</option>
                        {scheduledFlights.map(sf => {
                            const flight = flights.find(f => f.id === sf.flightId);
                            const schedule = schedules.find(s => s.scheduleId === sf.scheduleId);
                            return (
                                <option key={sf.scheduledFlightId} value={sf.scheduledFlightId}>
                                    {sf.scheduledFlightId} | {flight?.name || 'Unknown'} |
                                    Dep: {schedule ? formatDateTime(schedule.departureTime) : 'N/A'}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="status">Status:</label>
                    <select className="form-control" id="status" value={status}
                            onChange={e => setStatus(e.target.value as any)}>
                        <option value="CONFIRMED">CONFIRMED</option>
                        <option value="CANCELLED">CANCELLED</option>
                        <option value="COMPLETED">COMPLETED</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">{buttonText}</button>
            </form>
        </div>
    );
}
