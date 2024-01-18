import React, { useState, useEffect } from "react";
import axios from "axios";
import returnDate from "../JS Files/getDate";
import StockChart from "../components/ChartGraph";

const stockKey = process.env.REACT_APP_FMP_API_KEY;

function Graph() {
  const [errorMessage, setErrorMessage] = useState("")
  const [timeframe, setTimeframe] = useState(`1hour`);
  const [symbol, setSymbol] = useState(`SPY`);
  const [dateRange, setDateRange] = useState(returnDate(timeframe));
  const [url, setUrl] = useState(`https://financialmodelingprep.com/api/v3/historical-chart/${timeframe}/${symbol}?${dateRange}&apikey=${stockKey}`);
  const [stockData, setStockData] = useState();
  let dataArr = [];

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setStockData(res.data);
      })
      .catch(error => {
        console.log(error.message)
        if (error.message === "Request failed with status code 429") {
          setErrorMessage("Too many requests sent to Financial Modeling Prep (251/251). Please wait until tomorrow to request more.")
        }
        return error;
      })
  }, [url]);


  function HandleSubmit(e) {
    let newTime = e.target[1].value;
    let newSymbol = e.target[0].value;
    setTimeframe(newTime);        //TIMEFRAME
    setSymbol(newSymbol);         //STOCK
    setDateRange(returnDate(e.target[1].value));
    if (newTime === "daily") {
      setUrl(`https://financialmodelingprep.com/api/v3/historical-price-full/${newSymbol}?apikey=${stockKey}`);
    }
    else {
      setUrl(`https://financialmodelingprep.com/api/v3/historical-chart/${newTime}/${newSymbol}?${returnDate(newTime)}&apikey=${stockKey}`);
    }

    e.preventDefault();
  }


  return <div className="graph-page">
    <form action="/graph" className="stock-form" method="" onSubmit={HandleSubmit}>
      <select name="symbol" className="stock-select" defaultValue={"SPY"}>
        {/* <option value="Select">Select a Stock</option> */}
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
      <select name="timeframe" className="time-select" defaultValue={"1hour"}>
        {/* <option value="Select">Select a Timeframe</option> */}
        <option value="1min">1 Min</option>
        <option value="5min">5 Min</option>
        <option value="15min">15 Min</option>
        <option value="30min">30 Min</option>
        <option value="1hour">1 Hour</option>
        <option value="4hour">4 Hour</option>
        <option value="daily">Daily</option>
        {/* <option value="weekly">Weekly</option> */}
      </select>
      <button type="submit" className="form-submit">Submit</button>
    </form>

    {/*  THIS IS FOR REMOVING DAILY. CAN BE UNCOMMENTED IF WANT TO REMOVE (due to nested loop)
    {
      stockData ? stockData.map((dataObj, index) => {
        dataArr.unshift({
          x: new Date(`${dataObj.date}`),
          y: [dataObj.open, dataObj.high, dataObj.low, dataObj.close]
        },)
      }) : null
    } */}

    {
      stockData ?
        stockData.historical ? stockData.historical.forEach((dataObj, index) => {          // See if daily was selected then display.
          dataArr.unshift({                                                            // Is slow due to so many candles.
            x: new Date(`${dataObj.date}`),                                            // NEED TO FIX NESTED LOOP HERE
            y: [dataObj.open, dataObj.high, dataObj.low, dataObj.close]
          })
        }) : stockData.forEach((dataObj, index) => {                                      // If not daily, display proper data
          dataArr.unshift({
            x: new Date(`${dataObj.date}`),
            y: [dataObj.open, dataObj.high, dataObj.low, dataObj.close]
          })
        }) : <div className="error-API">
          <p>{errorMessage}</p>
        </div>
    }


    <div className="chart">
      <StockChart
        symbol={symbol}
        timeframe={timeframe}
        data={dataArr}
      />
      {/* <p className="chart-p">*data pulled from</p> */}
    </div>

  </div >
}


export default Graph;