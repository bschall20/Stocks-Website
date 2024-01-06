import React, { useState, useEffect } from "react";
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

    return <p>{time.toLocaleTimeString('en-GB')}</p>;       // GB uses 24h. US will use 12h and add AM/PM.
}

export default TimeComponent;