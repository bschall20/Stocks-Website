import React, { useState } from 'react';
import ToggleIcon from './ToggleIcon';
import { Time, MarketOpen } from "./MarketTime";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {

    function showNavbar() {
        const navs = document.querySelectorAll('.navbar-list')
        navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));

        const navbarIcon = document.querySelector('.navbar-link-toggle');
        navbarIcon.classList.toggle('')
    }

    const [active, setActive] = useState(false);
    const handleChangeActive = () => {
        setActive((previousIcon) => {
            return !previousIcon;
        });
    };

    return (
        <div className="nav-box">
            <p className="navbar-time">
                <Time />
                <MarketOpen />
            </p>
            <div className="navbar-link-toggle" onClick={showNavbar}>
                <ToggleIcon active={active} handleChangeActive={handleChangeActive} />
            </div>
            <nav className="navbar-list">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'selected-nav nav-item' : 'nav-item')}>
                    Home
                </NavLink>

                <NavLink to="/graph" className={({ isActive }) => (isActive ? 'selected-nav nav-item' : 'nav-item')}>
                    Stock Graph
                </NavLink>

                <NavLink to="/terms" className={({ isActive }) => (isActive ? 'selected-nav nav-item' : 'nav-item')}>
                    Stock Terms
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;



/* <nav>
                <ul className="navbar-list">
                    <li className="home toggle-item">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                            Home
                        </NavLink>
                    </li>
                    <li className="graph toggle-item">
                        <NavLink to="/graph" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                            Stock Graph
                        </NavLink>
                    </li>
                    <li className="news toggle-item">
                        <NavLink to="/terms" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                            Stock Terms
                        </NavLink>
                    </li>
                </ul>
            </nav> */