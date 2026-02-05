import {Link} from 'react-router';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="/images/logo.jpg" alt="" className='navbar-logo'/>
                    <Link className="navbar-brand" to="/">FMS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/flights">Flights</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/airports">Airports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bookings">Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/passengers">Passengers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/schedules">Schedules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/scheduled-flights">Scheduled Flights</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;