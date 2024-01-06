import React, { useState, useEffect } from "react";
import axios from "axios";

const stockKey = process.env.REACT_APP_FINNHUB_API_KEY;

function HeaderStockComponent(props) {
    let url = `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${stockKey}`;
    const [data, setData] = useState();
    let stockPercent;
    let headerStockPercent;

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
                return error;
            })
    }, [url]);

    // Get stock percent
    if (data){
        stockPercent = String(data.dp).charAt(0);
    }

    // Return Red if stock is negative return
    if (stockPercent === '-'){
        headerStockPercent = <p className="header-stock-percent stock-neg">
        {data ? Math.round((data.dp + Number.EPSILON) * 100) / 100 : <p>N/A</p>}% 
        <span className="header-stock-change">
        ({data ? data.d : <p>N/A</p>})
        </span>
        </p>
    }
    // Return Green if stock is positive return
    else {
        headerStockPercent = <p className="header-stock-percent stock-pos">
        {data ? Math.round((data.dp + Number.EPSILON) * 100) / 100 : <p>N/A</p>}% 
        <span className="header-stock-change">
        ({data ? data.d : <p>N/A</p>})
        </span>
        </p>
    }


    return <div className="header-stock-container">
        <div className="header-info">
            <span className="header-symbol">{props.symbol}</span>
            <span className="header-close">{data ? data.c : <p>N/A</p>}</span>
        </div>
        {headerStockPercent}
    </div>
}

export default HeaderStockComponent;