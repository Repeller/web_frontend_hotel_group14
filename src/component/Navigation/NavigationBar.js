import React from "react";
import { Switch } from "react-router-dom";
import HomePage from "./HomePage";

import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import RoomPage from "../RoomPage/RoomPage";
import BookingPage from "../../page/BookingPage";
import MyBookings from "../myBooking/MyBookings";
import LoginPage from "../../page/LoginPage";
import RoomOverview from "../../page/RoomOverview";
// css styling fra https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_right
import './NavigationBar.css';


/**
 * Author: Sammy Chauhan (S191181)
 **/

//Switch kan bruges med ældre version af react-router-dom.
//npm uninstall react-router-dom
//npm install react-router-dom@5.2.0

function NavigationBar() {
    return (
        <Router>
            <div style={{ backgroundColor: "silver" }}>
                <div className="header">
                    <h1><Link to="/">A.S.A Hotel</Link></h1>
                </div>
                <nav>
                    <div className="body">
                        <ul>
                            <li >
                                <Link class="headerlinks" to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/bookingpage">Book Now</Link>
                            </li>
                            <li>
                                <Link to="/roomoverview">Room_overview</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li className="body-login">
                                <Link to="/mybookings">My Bookings</Link>
                            </li>
                            <li className="body-login">
                                <Link to="/forms">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path={"/budget"}>
                        <RoomPage />
                    </Route>
                    <Route path={"/standard"}>
                        <RoomPage />
                    </Route>
                    <Route path={"/business"}>
                        <RoomPage />
                    </Route>
                    <Route path={"/luxury"}>
                        <RoomPage />
                    </Route>

                    <Route path={"/bookingpage"}>
                        <BookingPage />
                    </Route>
                    <Route path={"/about"}>
                        <About />
                    </Route>
                    <Route path={"/contact"}>
                        <Users />
                    </Route>
                    <Route path={"/roomoverview"}>
                        <h2>RoomOverview</h2>
                        <RoomOverview name="batman" time="14:00" />
                    </Route>
                    <Route path={"/mybookings"}>
                        <MyBookings />
                    </Route>
                    <Route path={"/forms"}>
                        <h2>Forms</h2>
                        <LoginPage />
                    </Route>

                    <Route path={"/"}>
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}


function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Contact</h2>;
}

export default NavigationBar;