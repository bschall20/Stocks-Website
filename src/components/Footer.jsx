import React from "react";
import { FaRegCopyright, FaLinkedin, FaGithub } from "react-icons/fa";    // , FaFacebook,
// import { AiFillTwitterCircle } from "react-icons/ai";
import getDate from '../JS Files/getDate'
import stockHQLogo from '../images/stockHQLogo.png'
import { NavLink } from "react-router-dom";

function Footer() {
    return <footer>
        <div className='contacts-box'>
            <div>
                <NavLink to="/">
                    <img src={stockHQLogo} className="site-logo" alt='StockHQ logo'/>
                </NavLink>
            </div>

            <div className='footer-nav'>
                <ul className="navbar-list">
                    <li>
                        <NavLink to="/" className='footer-link'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/graph" className='footer-link'>
                            Stock Graph
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/terms" className='footer-link'>
                            Stock Terms
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='footer-icon-box'>
                {/* <NavLink to="">
                    <FaFacebook className='footer-icon' />
                </NavLink>

                <NavLink to="">
                    <AiFillTwitterCircle className='footer-icon' />
                </NavLink> */}

                <NavLink to="https://www.linkedin.com/in/brennan-schall-36bb14139/" target="_blank">
                    <FaLinkedin className='footer-icon' alt='LinkedIn logo' />
                </NavLink>

                <NavLink to="https://github.com/bschall20" target="_blank">
                    <FaGithub className='footer-icon' alt='GitHub logo' />
                </NavLink>
            </div>
        </div>

        <div className='copyright-box'>
            <p><FaRegCopyright className='copyright-logo' /> Copyright {getDate(1).slice(19, 23)}. All rights reserved.</p>
            {/* <p>All right reserved.</p> */}
        </div>


    </footer>
}

export default Footer;


// Color Palette: https://www.schemecolor.com/money-and-gold-color-scheme.php
// https://www.google.com/search?q=footer+page+designs&rlz=1C1CHBF_enUS762US762&oq=footer+page+designs&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQzOTBqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=i21nuvU2kL-IXM&vssid=l
// https://www.baamboostudio.com/weebly-design-inspiration-footer-design/