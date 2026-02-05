import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router";
import type {Flight} from "../redux/flights/flightsSlice.ts";

export default function FlightsForm({title = "Add", buttonText = "Create", onSubmit, initialFlight}: {
    title?: string,
    buttonText?: string,
    onSubmit?: (flightData: Flight) => void,
    initialFlight?: Flight
}) {
    const [id, setId] = useState(initialFlight ? String(initialFlight.id) : "");
    const [name, setName] = useState(initialFlight ? initialFlight.name : "");
    const [model, setModel] = useState(initialFlight ? initialFlight.model : "");
    const [capacity, setCapacity] = useState(initialFlight ? String(initialFlight.capacity) : "");
    const navigate = useNavigate();

    useEffect(() => {
        if (initialFlight) {
            setId(String(initialFlight.id));
            setName(initialFlight.name);
            setModel(initialFlight.model);
            setCapacity(String(initialFlight.capacity));
        }
    }, [initialFlight]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                id: Number(id),
                name,
                model,
                capacity: Number(capacity)
            });
            navigate("/flights");

        }
    };

    return (
        <>
            <div className="container my-5">
                <h2>{title} Flight</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="id">Flight ID:</label>
                        <input
                            type="number"
                            className={`form-control${initialFlight ? " bg-secondary text-light" : ""}`}
                            id="id"
                            value={id}
                            onChange={e => setId(e.target.value)}
                            readOnly={!!initialFlight}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Carrier Name:</label>
                        <input type="text" className="form-control" id="name" value={name}
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="model">Flight Model:</label>
                        <input type="text" className="form-control" id="model" value={model}
                               onChange={e => setModel(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="capacity">Capacity:</label>
                        <input type="number" className="form-control" id="capacity" value={capacity}
                               onChange={e => setCapacity(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                </form>
            </div>
        </>
    );
}
