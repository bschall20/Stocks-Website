import React, { useState, useEffect } from 'react';
import axios from "axios";

const stockKey = process.env.REACT_APP_FINNHUB_API_KEY;

function Time() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            var dt = new Date();        // ex: 'December 17, 1995 19:24:00'
            dt.setTime(dt.getTime() + dt.getTimezoneOffset() * 60000);
            var estDate = new Date(dt.getTime() -300 * 60000);
            setTime(estDate);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time.toLocaleTimeString('en-GB');
}



function MarketOpen(){

    const [data, setData] = useState();
    const [market, setMarket] = useState('CLOSED')
    let url = `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${stockKey}`;
    
    // VARIABLES TO COMPARE FOR TIME FOR MARKET BEING OPEN
    let timeNum = Time();                               // Current updated time
    let timeStr = timeNum.toString()                    // Current updated time to string
    let hoursStr = timeStr.slice(0, 2);                 // Grab hours from time
    let minutesStr = timeStr.slice(3, 5);               // Grab minutes from time

    let hoursNum = parseInt(hoursStr, 10);              // Turn hours back into number (to compare)
    let minutesNum = parseInt(minutesStr, 10);          // Turn minutes back into number (to compare)

    // VARIABLES FOR COMPARING DATE TO SEE IF NOT WEEKEND/STOCK MARKET OPEN
    // Call getDate to get the most recent business day (including today) and compare to todays date.
    let date;
    let lastMarketDate;
    if (data){
        date = new Date(data.t * 1000)
        lastMarketDate = date.getDate();
    } 
    // else { console.log("Unable to pull data from Finnhub for market date/data.") }       // Commented out. Runs at least once when data isn't rendered in yet


    let today = new Date().toDateString();              // Outputs: "Wed Jan 10 2024"
    let todayNum = parseInt(today.slice(7, 10));        // Outputs: _________10_____
    let mStatus;

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

    if ((lastMarketDate !== todayNum) || ((lastMarketDate === todayNum) && ((hoursNum === 9 && minutesNum < 30) || (hoursNum >= 16) || (hoursNum < 9)))){
        mStatus = 'CLOSED';
    }
    else { mStatus = 'OPEN' }

    useEffect(() => {
        setMarket(mStatus)
    }, [mStatus]);

    return <span className='market-clock'>Market is <span className={`market-${market}`}>{mStatus}</span></span>
}


export {Time, MarketOpen};