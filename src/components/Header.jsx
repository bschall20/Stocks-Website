import React from "react";
import HeaderStock from "./HeaderStock";
import stockHQLogo from '../images/stockHQLogo.png'
import { NavLink } from "react-router-dom";


function Header() {
    // SITE TO USE FOR HEADER STOCKS : https://finnhub.io/api/v1/quote?symbol=AAPL&token=${stockKey}

    return <header>
        <div className="site-title">
            <NavLink to="/">
                <h1>StockHQ</h1>
            </NavLink>
            <NavLink to="/">
            <img src={stockHQLogo} className="site-logo" alt='StockHQ logo' />
            </NavLink>
        </div>
        <HeaderStock symbol="AAPL" propStyle='hide-xs'/>
        <HeaderStock symbol="AMZN" propStyle='hide-medium'/>
        <HeaderStock symbol="MSFT" propStyle='hide-medium'/>
        <HeaderStock symbol="NVDA" propStyle='hide-small'/>
        <HeaderStock symbol="SPY" />
    </header>
}

export default Header;