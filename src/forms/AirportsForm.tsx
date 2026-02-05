import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router";
import type {Airport} from "../redux/airports/airportsSlice.ts";

export default function AirportsForm({title = "Add", buttonText = "Create", onSubmit, initialAirport}: {
    title?: string,
    buttonText?: string,
    onSubmit?: (airportData: Airport) => void,
    initialAirport?: Airport
}) {
    const [code, setCode] = useState(initialAirport ? initialAirport.code : "");
    const [name, setName] = useState(initialAirport ? initialAirport.name : "");
    const [city, setCity] = useState(initialAirport ? initialAirport.city : "");
    const [country, setCountry] = useState(initialAirport ? initialAirport.country : "");
    const [latitude, setLatitude] = useState(initialAirport ? initialAirport.latitude : "");
    const [longitude, setLongitude] = useState(initialAirport ? initialAirport.longitude : "");
    const navigate = useNavigate();

    useEffect(() => {
        if (initialAirport) {
            setCode(initialAirport.code);
            setName(initialAirport.name);
            setCity(initialAirport.city);
            setCountry(initialAirport.country);
            setLatitude(String(initialAirport.latitude));
            setLongitude(String(initialAirport.longitude));
        }
    }, [initialAirport]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit({
                code,
                name,
                city,
                country,
                latitude: Number(latitude),
                longitude: Number(longitude)
            });
            navigate("/airports");
        }
    };

    return (
        <>
            <div className="container my-5">
                <h2>{title} Airport</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="code">Code:</label>
                        <input
                            type="text"
                            className={`form-control${initialAirport ? " bg-secondary text-light" : ""}`}
                            id="code"
                            value={code}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCode(event.target.value)}
                            readOnly={!!initialAirport}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" value={name}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="city">City:</label>
                        <input type="text" className="form-control" id="city" value={city}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="country">Country:</label>
                        <input type="text" className="form-control" id="country" value={country}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCountry(event.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="latitude">Latitude:</label>
                        <input type="text" className="form-control" id="latitude" value={latitude}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLatitude(event.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="longitude">Longitude:</label>
                        <input type="text" className="form-control" id="longitude" value={longitude}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLongitude(event.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">{buttonText}</button>
                </form>
            </div>
        </>
    );
}
