import {Routes, Route, useNavigate} from 'react-router'
import Navbar from './components/Navbar'
import Flights from './pages/flights/Flights'
import AddFlight from './pages/flights/AddFlight'
import EditFlight from './pages/flights/EditFlight'
import Login from './pages/login/Login'
import Airports from './pages/airports/Airports'
import AddAirport from './pages/airports/AddAirport'
import EditAirport from './pages/airports/EditAirport'
import Bookings from "./pages/bookings/Bookings.tsx";
import AddBooking from "./pages/bookings/AddBooking.tsx";
import EditBooking from "./pages/bookings/EditBooking.tsx";
import Passengers from "./pages/passengers/Passengers.tsx";
import AddPassenger from "./pages/passengers/AddPassenger.tsx";
import EditPassenger from "./pages/passengers/EditPassenger.tsx";
import Schedules from "./pages/schedules/Schedules.tsx";
import AddSchedule from "./pages/schedules/AddSchedule.tsx";
import EditSchedule from "./pages/schedules/EditSchedule.tsx";
import ScheduledFlights from "./pages/scheduledFlights/ScheduledFlights.tsx";
import AddScheduledFlight from "./pages/scheduledFlights/AddScheduledFlight.tsx";
import EditScheduledFlight from "./pages/scheduledFlights/EditScheduledFlight.tsx";
import Signup from "./pages/signup/Signup.tsx";
import './App.css'

function App() {

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigateTo = useNavigate();

    return (
        <>
            <Navbar/>
            {isLoggedIn && (
                <button
                    type="button"
                    className="btn btn-dark m-3"
                    onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        navigateTo("/");
                    }}>Logout</button>
            )}
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/flights" element={isLoggedIn ? <Flights/> : <Login/>}/>
                <Route path="/flights/add" element={isLoggedIn ? <AddFlight/> : <Login/>}/>
                <Route path="/flights/edit/:id" element={isLoggedIn ? <EditFlight/> : <Login/>}/>
                <Route path="/airports" element={isLoggedIn ? <Airports/> : <Login/>}/>
                <Route path="/airports/add" element={isLoggedIn ? <AddAirport/> : <Login/>}/>
                <Route path="/airports/edit/:code" element={isLoggedIn ? <EditAirport/> : <Login/>}/>
                <Route path="/bookings" element={isLoggedIn ? <Bookings/> : <Login/>}/>
                <Route path="/bookings/add" element={isLoggedIn ? <AddBooking/> : <Login/>}/>
                <Route path="/bookings/edit/:bookingId" element={isLoggedIn ? <EditBooking/> : <Login/>}/>
                <Route path="/passengers" element={isLoggedIn ? <Passengers/> : <Login/>}/>
                <Route path="/passengers/add" element={isLoggedIn ? <AddPassenger/> : <Login/>}/>
                <Route path="/passengers/edit/:passengerId" element={isLoggedIn ? <EditPassenger/> : <Login/>}/>
                <Route path="/schedules" element={isLoggedIn ? <Schedules/> : <Login/>}/>
                <Route path="/schedules/add" element={isLoggedIn ? <AddSchedule/> : <Login/>}/>
                <Route path="/schedules/edit/:scheduleId" element={isLoggedIn ? <EditSchedule/> : <Login/>}/>
                <Route path="/scheduled-flights" element={isLoggedIn ? <ScheduledFlights/> : <Login/>}/>
                <Route path="/scheduled-flights/add" element={isLoggedIn ? <AddScheduledFlight/> : <Login/>}/>
                <Route path="/scheduled-flights/edit/:scheduledFlightId"
                       element={isLoggedIn ? <EditScheduledFlight/> : <Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </>
    )
}

export default App
