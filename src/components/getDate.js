// Reference: https://stackoverflow.com/questions/50686060/get-5-business-days-before-today
function business_day_from_date(daysAgo, date) {        //pass date in
    const result = [];
    const d = new Date(date);           //do not mutate date passed in
    while (daysAgo > 0) {               //while we have not enough work days
        d.setDate(d.getDate() - 1);     //take one day of the copy of the date passed in
        if (d.getDay() !== 0 && d.getDay() !== 6) {     //if not sat or sun
            daysAgo--;                  //we found one
            result.push(new Date(d));   //add copy of the found one to result
        }
    }
    // return result;              //newest to oldest
    return result.reverse();      //oldest to newest
}


function formatDate(date) {
    var day = date.getDate() + 1;           // +1 to show today's day
    var month = (date.getMonth() + 1);      // +1 to show today's month
    var year = date.getFullYear();

    if (day < 10) {
        day = `0${day}`
    }
    if (month < 10) {
        month = `0${month}`
    }
    return (year + "-" + month + "-" + day)
}

//**********************need to pull in from time filter with graph.ejs */

//call this function but with returnDate(timeframe) and let that choose the days.
function returnDate(timeframe) {
    var days = 0;
    //Need to make variable equal to what time is selected on graph.ejs
    if (timeframe === "1min") {
        days = 2;           // 2 days, instead of 1, because if checked between 0000 and 0929, chart is empty.
                            // Could solve with editing time to check if past 0930 but then chart will have very little. 
                            // Leaving at 2 days.
    }
    else if (timeframe === "5min") {
        days = 5;
    }
    else if (timeframe === "15min") {
        days = 5;
    }
    else if (timeframe === "30min") {
        days = 10;
    }
    else if (timeframe === "1hour") {
        days = 20;
    }
    else if (timeframe === "4hour") {
        days = 180;
    }
    // else if (timeframe === "daily") {
    //     days = 5;
    // }
    // else if (timeframe === "weekly") {
    //     days = 5;
    // }

    const datesArr = business_day_from_date(days, new Date()).map(
        function (date) { return formatDate(date); }
    )
    const todayDate = days - 1;
    return (`from=${datesArr[0]}&to=${datesArr[todayDate]}`)        //shows oldest date on [0]... prefered for apex?
    //return (`from=${datesArr[todayDate]}&to=${datesArr[0]}`)
}

// Output for Financial Modeling Prep Intraday Chart
// See: https://site.financialmodelingprep.com/developer/docs#chart-intraday
//console.log(returnDate(days));

export default returnDate;