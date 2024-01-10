import React from "react";
import HeaderStockComponent from "./HeaderStockComponent";


function Header() {
    // SITE TO USE FOR HEADER STOCKS : https://finnhub.io/api/v1/quote?symbol=AAPL&token=${stockKey}

    return <header>

        {/* <TimeComponent /> */}

        <div className="header-stock-container">
            <h1 className="">StockHub</h1>
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