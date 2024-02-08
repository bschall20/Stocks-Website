import React, { useState, useEffect } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import axios from "axios";

const stockKey = process.env.REACT_APP_FINNHUB_API_KEY;

function HeaderStock(props) {
    //let url = `https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${stockKey}`;
    const [url, setURL] = useState(`https://finnhub.io/api/v1/quote?symbol=${props.symbol}&token=${stockKey}`)
    const [data, setData] = useState();
    const [stock, setStock] = useState(props.symbol);
    let stockPercent;
    let headerStockPercent;



    function changeStock(e) {
        setStock(e.target.value);
        setURL(`https://finnhub.io/api/v1/quote?symbol=${e.target.value}&token=${stockKey}`);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {          // Have to add timer function to allow API to pull data else it doesn't load quick enough.
            axios.get(url)
            .then((res) => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
                return error;
            })
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [url]);

 
    // Get stock percent
    if (data){
        stockPercent = String(data.dp).charAt(0);
    }

    // Return Red if stock is negative return
    if (stockPercent === '-'){
        headerStockPercent = <p className="header-stock-percent stock-neg">
        <span style={{fontSize: '1.5rem'}}><FaCaretDown /></span>
        {data ? Math.round((data.dp + Number.EPSILON) * 100) / 100 : 'N/A'}% 
        <span className="header-stock-change">
        ({data ? data.d : 'N/A'})
        </span>
        </p>
    }
    // Return Green if stock is positive return
    else {
        headerStockPercent = <p className="header-stock-percent stock-pos">
        <span style={{fontSize: '1.5rem'}}><FaCaretUp /></span>
        {data ? Math.round((data.dp + Number.EPSILON) * 100) / 100 : 'N/A'}% 
        <span className="header-stock-change">
        ({data ? data.d : 'N/A'})
        </span>
        </p>
    }


    
    return <div className={(props.propStyle==="hide-medium" ? 'header-stock-container hide-medium' : props.propStyle==="hide-small" ? 'header-stock-container hide-small' : props.propStyle==="hide-xs" ? 'header-stock-container hide-xs' : 'header-stock-container')}>
        <div className="header-info">
            <input type="text" className="header-symbol" value={stock} onChange={changeStock} />
            <span className="header-close">{data ? data.c : 'N/A'}</span>
        </div>
        <span>{headerStockPercent ? headerStockPercent : 'N/A'}</span>
    </div>
}

export default HeaderStock;