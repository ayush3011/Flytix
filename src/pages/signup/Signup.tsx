import React, {useState} from "react";
import {Link, useNavigate} from "react-router";

interface User {
    username: string;
    password: string;
    role: string;
}

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    function handleSignUp(event: React.FormEvent) {
        event?.preventDefault();
        if (email === "") {
            alert("Please enter your email");
            return;
        } else if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        const localUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");
        if (localUsers.some(u => u.username === email)) {
            alert("User already exists!");
            return;
        }
        const newUser: User = {
            username: email,
            password: password,
            role: "user"
        };
        localUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(localUsers));
        alert("Signup successful! You can now log in.");
        navigate('/')
    }

    return (
        <>
            <title>Sign Up</title>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Sign up</h2>
                                <form onSubmit={handleSignUp}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleDropdownFormEmail2">Email address</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail2"
                                               placeholder="email@example.com"
                                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                   setEmail(event.target.value)
                                               }} required/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleDropdownFormPassword2">Password</label>
                                        <input type="password" className="form-control"
                                               id="exampleDropdownFormPassword2" placeholder="Password"
                                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                   setPassword(event.target.value)
                                               }} required/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleDropdownFormPassword2">Confirm password</label>
                                        <input type="password" className="form-control"
                                               id="exampleDropdownFormPassword2" placeholder="Confirm password"
                                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                   setConfirmPassword(event.target.value)
                                               }} required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Sign up</button>
                                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">Already a
                                        user? <Link to="/" className="text-dark fw-bold"> Log In</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}