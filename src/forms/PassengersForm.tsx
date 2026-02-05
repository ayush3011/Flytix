import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import type {Passenger} from "../redux/passengers/passengersSlice";

export default function PassengersForm({title = "Add", buttonText = "Create", onSubmit, initialPassenger}: {
    title?: string,
    buttonText?: string,
    onSubmit?: (passengerData: Passenger) => void,
    initialPassenger?: Passenger
}) {
    const [passengerId, setPassengerId] = useState(initialPassenger ? String(initialPassenger.passengerId) : "");
    const [firstName, setFirstName] = useState(initialPassenger ? initialPassenger.firstName : "");
    const [lastName, setLastName] = useState(initialPassenger ? initialPassenger.lastName : "");
    const [email, setEmail] = useState(initialPassenger ? initialPassenger.email : "");
    const [phone, setPhone] = useState(initialPassenger ? initialPassenger.phone : "");
    const [dob, setDob] = useState(initialPassenger ? (initialPassenger.dob instanceof Date ? initialPassenger.dob.toISOString().split('T')[0] : initialPassenger.dob) : "");
    const navigate = useNavigate();

    useEffect(() => {
        if (initialPassenger) {
            setPassengerId(String(initialPassenger.passengerId));
            setFirstName(initialPassenger.firstName);
            setLastName(initialPassenger.lastName);
            setEmail(initialPassenger.email);
            setPhone(initialPassenger.phone);
            setDob(initialPassenger.dob instanceof Date ? initialPassenger.dob.toISOString().split('T')[0] : initialPassenger.dob);
        }
    }, [initialPassenger]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                passengerId: Number(passengerId),
                firstName,
                lastName,
                email,
                phone,
                dob: new Date(dob)
            });
            navigate("/passengers");
        }
    };

    return (
        <>
            <div className="container my-5">
                <h2>{title} Passenger</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="passengerId">Passenger ID:</label>
                        <input
                            type="number"
                            className={`form-control${initialPassenger ? " bg-secondary text-light" : ""}`}
                            id="passengerId"
                            value={passengerId}
                            onChange={e => setPassengerId(e.target.value)}
                            readOnly={!!initialPassenger}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" className="form-control" id="firstName" value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" className="form-control" id="phone" value={phone}
                               onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" className="form-control" id="dob" value={dob}
                               onChange={e => setDob(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                </form>
            </div>
        </>
    );
}
