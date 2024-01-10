import React, { useState, useEffect } from 'react';
import getDate from '../JS Files/getDate';


function TimeComponent() {


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
    //console.log(time)
    //console.log(new Date().getHours())                    // Gives hours. Can export this for market open/close function.
                                                            // if (newDate().getHours() === 9 && newDate().getMinutes() < 30)   >>>>> closed
                                                            // newDate().getHours() >= 9 && newDate().getMinutes() >=30 && newDate().getHours() < 4

    // return <p>{time.toLocaleTimeString('en-GB')}</p>;    // GB uses 24h. US will use 12h and add AM/PM.
    return time.toLocaleTimeString('en-GB');
}


// export default TimeComponent;
function MarketOpen(){
    const [market, setMarket] = useState('CLOSED')
    let timeNum = TimeComponent();
    let timeStr = timeNum.toString()
    let hoursStr = timeStr.slice(0, 2);
    let minutesStr = timeStr.slice(3, 5);

    let hoursNum = parseInt(hoursStr, 10);
    let minutesNum = parseInt(minutesStr, 10);

    // Call getDate to get the most recent business day (including today) and compare to todays date.
    let date = getDate(1);                              // Outputs: from=2024-01-10&to=2024-01-10
    let dateNum = parseInt(date.slice(13, 15));         // Outputs: _____________10______________
    let today = new Date().toDateString();              // Outputs: "Wed Jan 10 2024"
    let todayNum = parseInt(today.slice(7, 10));        // Outputs: _________10_____

    let mStatus;
    useEffect(() => {
        setMarket(mStatus)
    }, [mStatus]);

    if ((dateNum === todayNum) && ((hoursNum === 9 && minutesNum < 30) || (hoursNum >= 16) || (hoursNum < 9))){
        mStatus = 'CLOSED';
    }
    else { mStatus = 'OPEN' }

    // if (market === "CLOSED"){
    //     return (<p>Market is <span className="market-closed">{market}</span></p>)
    // }
    // else {return <p>Market is <span className={`market-${market}`}>{market}</span></p>}

    return <p>Market is <span className={`market-${market}`}>{market}</span></p>
}


export {TimeComponent, MarketOpen};