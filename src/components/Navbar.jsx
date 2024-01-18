import React, { useState } from 'react';
import ToggleIcon from './ToggleIcon';
import { Time, MarketOpen } from "./MarketTime";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {

    const [show, setShow] = useState(true);

    function showNavbar() {
        setShow(!show);
    }

    const [active, setActive] = useState(false);
    const handleChangeActive = () => {
        setActive((previousIcon) => {
            return !previousIcon;
        });
    };

    return (
        <div>
            <div className="nav-box">
                <p className="navbar-time">
                    <Time />
                    <MarketOpen />
                </p>
                <div className='navbar-menu'>
                    <div className="navbar-link-toggle" onClick={showNavbar}>
                        <ToggleIcon active={active} handleChangeActive={handleChangeActive} />
                    </div>

                    {/* <nav className={show ? 'navbar-list' : 'navbar-list-mini'}> */}
                    <nav className='navbar-list'>
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
            </div>
            
            {/* Drop down on smaller screens (less than 1000px wide) */}
            <div className='navbar-menu-mini'>
                <nav className={show ? 'navbar-list' : 'navbar-list-mini'}>
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
        </div>
    );
};

export default Navbar;