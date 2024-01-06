import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
    return (
        // <header>
        //     {/* <h1 className="navbar-name">Brennan Schall</h1> */}
        //     <Nav>
        //         <NavMenu>
        //             <NavLink to="/" activeStyle>
        //                 Brennan Schall
        //             </NavLink>
        //             <NavLink to="/" activeStyle>
        //                 Home
        //             </NavLink>
        //             <NavLink to="/graph" activeStyle>
        //                 Stock Graph
        //             </NavLink>
        //             <NavLink to="/news" activeStyle>
        //                 News & Information
        //             </NavLink>
        //         </NavMenu>
        //     </Nav>
        // </header>
        <div className="nav-box">
            <h1 className="navbar-name">
                <NavLink className="selected-nav" to="/">
                    Name + Logo
                </NavLink>
            </h1>
            <nav>
            {/* 
            CLOCK IN EST (GREEN LIGHT IF MARKET OPEN, RED IF NOT)
            ADD NAV LINE OF SELECTED CHART
            ARRAY'S LAST PRICE (last a 1600 then most recent one? say at close and after hours)
            NEXT EARNINGS DATE
            */}
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
                        <NavLink to="/news" className={({ isActive }) => (isActive ? 'selected-nav' : null)}>
                            News & Information
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;