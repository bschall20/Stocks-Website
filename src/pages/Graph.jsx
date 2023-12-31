import React, { useState, useEffect } from "react";
import axios from "axios";
import returnDate from "../components/getDate";
import StockChart from "../components/ChartGraph"
const stockKey = process.env.REACT_APP_FMP_API_KEY;

function Graph() {
  const [timeframe, setTimeframe] = useState(`5min`);
  const [symbol, setSymbol] = useState(`AAPL`);
  const [dateRange, setDateRange] = useState(returnDate(timeframe));
  const [url, setUrl] = useState(`https://financialmodelingprep.com/api/v3/historical-chart/${timeframe}/${symbol}?${dateRange}&apikey=${stockKey}`);
  const [stockData, setStockData] = useState();

  useEffect(() => {
    axios.get(url)
    .then((res) => {
      setStockData(res.data);
      console.log(res.data);
    })
  }, [url]);

  function HandleSubmit(e) {
    console.log(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

    setTimeframe(e.target[1].value);      //TIMEFRAME
    setSymbol(e.target[0].value);         //STOCK
    setDateRange(returnDate(e.target[1].value));
    setUrl(`https://financialmodelingprep.com/api/v3/historical-chart/${e.target[1].value}/${e.target[0].value}?${returnDate(e.target[1].value)}&apikey=${stockKey}`);

    // axios.get(url)
    //   .then((res) => {
    //     setStockData(res.data);
    //     console.log(res.data);
    //   })

    e.preventDefault();
  }


  function DefaultStockData() {
    axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?${returnDate('5min')}&apikey=${stockKey}`)
      .then((res) => {
        setStockData(res.data);
        //console.log(res.data);
      })
    //console.log("DEFAULT STOCK DATA() WAS CALLED!");
  }

  function RequestedStockData() {
    console.log("REQUESTED STOCK DATA() WAS CALLED!");
    axios.get(url)
      .then((res) => {
        setStockData(res.data);
        console.log(res.data);
      })
    console.log("REQUESTED STOCK DATA() WAS FINISHED!");
  }


  return <div className="main-content">
    <form action="/graph" className="form" method="" onSubmit={HandleSubmit}>
      <select name="symbol" className="form-select" defaultValue={"Select"}>
        <option value="Select">Select a Stock</option>
        <option value="AAPL">AAPL (Apple)</option>
        <option value="AMD">AMD (Advanced Micro Devices)</option>
        <option value="AMZN">AMZN (Amazon)</option>
        <option value="BA">BA (Boeing)</option>
        <option value="BABA">BABA (Alibaba)</option>
        <option value="DIS">DIS (Disney)</option>
        <option value="F">F (Ford)</option>
        <option value="GME">GME (Gamestop)</option>
        <option value="GOOG">GOOG (Google)</option>
        <option value="IWM">IWM (Russell 2000)</option>
        <option value="META">META (Meta Platforms)</option>
        <option value="MSFT">MSFT (Microsoft)</option>
        {/* <option value="NDX">NDX (NASDAQ 100)</option> */}
        <option value="NFLX">NFLX (Netflix)</option>
        <option value="NVDA">NVDA (Nvidia)</option>
        <option value="QQQ">QQQ (QQQ)</option>
        <option value="SNAP">SNAP (Snap Inc)</option>
        {/* <option value="SPX">SPX (S&P 500)</option> */}
        <option value="SPY">SPY (S&P 500)</option>
        <option value="TSLA">TSLA (Tesla)</option>
      </select>
      <select name="timeframe" className="form-select" defaultValue={"Select"}>
        <option value="Select">Select a Timeframe</option>
        <option value="1min">1 Min</option>
        <option value="5min">5 Min</option>
        <option value="15min">15 Min</option>
        <option value="30min">30 Min</option>
        <option value="1hour">1 Hour</option>
        <option value="4hour">4 Hour</option>
        {/* <option value="daily">Daily</option>
            <option value="weekly">Weekly</option> */}
      </select>
      <button type="submit" className="form-submit">Go</button>
    </form>

    {console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')}
    {console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')}
    {console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')}
    {console.log(`Rendered in HTML Timeframe: ${timeframe}`)}
    {console.log(`Rendered in HTML Stock: ${symbol}`)}
    {console.log(`Rendered in HTML Date Range: ${dateRange}`)}
    {console.log(`Rendered in HTML API Data Link: ${url}`)}


    <br />
    <p style={{ fontWeight: 900 }}>Stock Timeframe: {timeframe}</p>
    <br />
    <p style={{ fontWeight: 900 }}>Stock Symbol: {symbol}</p>
    <br />
    <p style={{ fontWeight: 900 }}>Stock Date: {dateRange}</p>
    <br />
    <p style={{ fontWeight: 900 }}>Stock URL: {url}</p>
    <br />


    {/* Date - Open - High - Low - Close */}
    {/* 
    Need to keep array from newest at index 0 as this is only way the days will be in order.
    If oldest is at index[0], then it lists oldest day, times go down from 1600-0930, 
    then next day forward at same prices 
    ie: 12/25/23 1600 down to 0930, then 12/26/23 1600-0930
    near impossible to make it order every day.
    */}

    {
      stockData ? stockData.map((dataObj, index) => {
        if (index <= 3 && index >= 0) {             // Reference: https://stackoverflow.com/questions/51865400/how-to-get-only-the-first-value-using-map-method-over-an-array-of-object
          return (
            <div className="" key={index}>
              <p className="">Key: {index}</p>
              <p className="">Date: {dataObj.date}</p>
              <p className="">Open: {dataObj.open}</p>
              <p className="">High: {dataObj.high}</p>
              <p className="">Low: {dataObj.low}</p>
              <p className="">Close: {dataObj.close}</p>
              <br />
            </div>
          );
        }
      }) : DefaultStockData() && stockData.map((dataObj, index) => {
        if (index <= 3 && index >= 0) {             // Reference: https://stackoverflow.com/questions/51865400/how-to-get-only-the-first-value-using-map-method-over-an-array-of-object
          return (
            <div className="" key={index}>
              <p className="">Key: {index}</p>
              <p className="">Date: {dataObj.date}</p>
              <p className="">Open: {dataObj.open}</p>
              <p className="">High: {dataObj.high}</p>
              <p className="">Low: {dataObj.low}</p>
              <p className="">Close: {dataObj.close}</p>
              <br />
            </div>
          );
        }
      })
    }

    {/* <StockChart /> */} {/*UNCOMMENT THIS WHEN DONE FOR GRAPH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

  </div >
}


export default Graph;


// REFERENCE: https://apexcharts.com/docs/creating-first-javascript-chart/#
// import ApexCharts from 'apexcharts'
// var options = {
//     chart: {
//       type: 'line'
//     },
//     series: [{
//       name: 'sales',
//       data: [30,40,35,50,49,60,70,91,125]
//     }],
//     xaxis: {
//       categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
//     }
//   }

//   var chart = new ApexCharts(document.getElementById("root"), options);

//   export default chart;