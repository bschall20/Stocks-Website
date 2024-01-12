import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Time, MarketOpen } from "./MarketTime";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
    return (
        <div className="nav-box">
        <p className="navbar-time">
                <Time />
                <MarketOpen />
        </p>
        <nav>
            <ul className="navbar-list">
                <li className="home">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                        Home
                    </NavLink>
                </li>
                <li className="graph">
                    <NavLink to="/graph" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                        Stock Graph
                    </NavLink>
                </li>
                <li className="news">
                    <NavLink to="/terms" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                        Stock Terms
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;