import React, { useState, useEffect } from "react";
import axios from "axios";

const stockKey = process.env.REACT_APP_FINNHUB_API_KEY;

function Aside() {
    //API TO USE FOR NEWS??? : https://www.marketaux.com/documentation
    const [errorMessage, setErrorMessage] = useState("")
    const [symbol, setSymbol] = useState(`AAPL`);
    const [url, setUrl] = useState(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2023-01-04&to=2024-01-04&token=${stockKey}`);
    //https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-01-04&to=2024-01-04&token=cmbkbl9r01qqi7tve73gcmbkbl9r01qqi7tve740
    const [newsData, setNewsData] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    let i = 0;
    // const [newsDataLength, setNewsDataLength] = useState(newsData.length);
    // let dataArr = [];



    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setNewsData(res.data);
                //console.log(res.data.length)
            })
            .catch(error => {
                if (error.message === "Request failed with status code 429") {
                    setErrorMessage("Too many requests sent to Financial Modeling Prep (251/251). Please wait until tomorrow to request more.")
                }
                return error;
            })
    }, [url]);


    function HandleSubmit(e) {
        let newSymbol = e.target[0].value;
        setSymbol(newSymbol);         //STOCK
        setUrl(`https://finnhub.io/api/v1/company-news?symbol=${newSymbol}&from=2023-01-04&to=2024-01-04&token=${stockKey}`);
        e.preventDefault();
    }

    function convertUnix(unix) {
        let unixInput = new Date(unix * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year = unixInput.getFullYear();
        let month = months[unixInput.getMonth()];
        let day = unixInput.getDate();
        return (`${month} ${day}, ${year}`)
    }

    function newsCount(summary, link) {
        if (summary.length >= 95) {
            return (`${summary.substring(0, 94)}. . .`)
        }
        else { return (summary) }
    }

    function decreasePage(){
        if (pageNumber > 1){
            setPageNumber(pageNumber - 1)
        }
    }

    function increasePage(){
        if (pageNumber < newsData.length/5){
            setPageNumber(pageNumber + 1)
        }
    }

    return <div className="news-bar">
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
            <button type="submit" className="form-submit">Go</button>
        </form>


        {/* {
      stockData ? stockData.map((dataObj, index) => {                                      // If not daily, display proper data
          dataArr.push({
            x: new Date(`${dataObj.date}`),
            y: [dataObj.open, dataObj.high, dataObj.low, dataObj.close]
          },)
        }) : <div className="error-API">
          <p>{errorMessage}</p>
        </div>
    } */}

        <div className="news-data">
            {
                newsData ? newsData.map((dataObj, index) => {
                    if (index <= (pageNumber*4) && index >= (pageNumber*4-4)) {             // Reference: https://stackoverflow.com/questions/51865400/how-to-get-only-the-first-value-using-map-method-over-an-array-of-object
                        let date = convertUnix(dataObj.datetime);
                        let summary = newsCount(dataObj.summary, dataObj.url);
                        return (
                            <div className="news-card" key={index}>
                                <div className="news-header">
                                    <span className="news-number">{index + 1} </span>
                                    <span className="news-company">{dataObj.related}</span>
                                </div>
                                <h2 className="news-title">{dataObj.headline}</h2>
                                {/* <hr/> */}
                                <p className="news-summary">{summary}</p>
                                {/* <hr/> */}
                                <div className="news-footer">
                                    <span className="news-source">Source: <a href={dataObj.url} target="_blank" rel="noreferrer">{dataObj.source}</a></span>
                                    <span className="news-date">Date: {date}</span>
                                </div>
                                {/* <p className="news-source">Source: {dataObj.source}</p>
                                <p className="news-url">URL: {dataObj.url}</p> */}
                                <br />
                            </div>
                        );
                    }
                }) : <div className="error-API">
                    <p>{errorMessage}</p>
                </div>
            }

            {
                newsData ?
                    <span className="page-button">
                        <button className="page-change" onClick={decreasePage}>&lt;</button>
                        Page {pageNumber} of {newsData.length / 5}
                        <button className="page-change" onClick={increasePage}>&gt;</button>
                    </span>
                    : null
            }
        </div>

        {
            console.log(newsData)
        }


    </div>
}

export default Aside;