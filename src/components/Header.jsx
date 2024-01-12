import React from "react";
import HeaderStockComponent from "./HeaderStockComponent";
import stockHQLogo from '../images/stockHQLogo.png'
import { NavLink } from "react-router-dom";


function Header() {
    // SITE TO USE FOR HEADER STOCKS : https://finnhub.io/api/v1/quote?symbol=AAPL&token=${stockKey}

    return <header>

        {/* <TimeComponent /> */}

        <div className="site-title">
            <NavLink to="/">
                <h1>StockHQ <img src={stockHQLogo} className="site-logo" alt='StockHQ logo'/></h1>
            </NavLink>
        </div>
        <HeaderStockComponent symbol="AAPL" />
        <HeaderStockComponent symbol="AMZN" />
        <HeaderStockComponent symbol="MSFT" />
        <HeaderStockComponent symbol="NVDA" />
        <HeaderStockComponent symbol="SPY" />
        {/* <HeaderStockComponent symbol="TSLA" /> */}


    </header>
}

export default Header;