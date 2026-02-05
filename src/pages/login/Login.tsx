import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router";

interface User {
    username: string;
    password: string;
}

export default function Login() {

    const [users, setUsers] = useState<User[]>([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const localUsers = JSON.parse(localStorage.getItem("users") || "[]");
        setUsers(localUsers);
    }, []);

    function handleSignIn(event: React.FormEvent) {
        event.preventDefault();
        const user = users.find((user) => user.username === email && user.password === password);
        if (user) {
            localStorage.setItem("isLoggedIn", "true");
            navigate('/flights');
        } else {
            alert("Invalid credentials!");
        }
    }

    return (
        <>
            <title>Log in</title>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Log in</h2>
                                <form onSubmit={handleSignIn}>
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
                                    <button type="submit" className="btn btn-primary w-100">Log in</button>
                                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                                        Registered? <Link to="/signup" className="text-dark fw-bold">Create an
                                            Account</Link>
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