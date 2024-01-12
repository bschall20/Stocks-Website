import React, { useState, useEffect } from "react";
import axios from "axios";
import returnDate from "../JS Files/getDate";

const stockKey = process.env.REACT_APP_FINNHUB_API_KEY;

function NewsArticlesComponent() {
    //API TO USE FOR NEWS??? : https://finnhub.io/
    const [errorMessage, setErrorMessage] = useState("")
    const [symbol, setSymbol] = useState(`SPY`);
    const [url, setUrl] = useState(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&${returnDate('5days')}&token=${stockKey}`);
    //https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-01-04&to=2024-01-04&token={stockKey}
    const [newsData, setNewsData] = useState();
    const [pageNumber, setPageNumber] = useState(1);


    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setNewsData(res.data);
            })
            .catch(error => {
                if (error.message === "Request failed with status code 429") {
                    setErrorMessage("Too many requests sent to Finhub. Please wait to request more.")
                }
                return error;
            })
    }, [url]);


    function HandleSubmit(e) {
        let newSymbol = e.target.value;
        setSymbol(newSymbol);         //STOCK
        setPageNumber(1);
        setUrl(`https://finnhub.io/api/v1/company-news?symbol=${newSymbol}&${returnDate('5days')}&token=${stockKey}`);
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

    function newsCount(summary) {
        if (summary.length >= 85) {
            return (`${summary.substring(0, 84)}. . .`)
        }
        else { return (summary) }
    }

    function decreasePage() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1)
        }
    }

    function increasePage() {
        if (pageNumber < newsData.length / 5) {
            setPageNumber(pageNumber + 1)
        }
    }

    return <div className="news-bar">
            <h2 className='news-section-title'>NEWS</h2>
        {/* <form action="/news" className="stock-form" method="" onChange={HandleSubmit}> */}
            <select name="symbol" className="news-select" defaultValue={"SPY"} onChange={HandleSubmit}>
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
            {/* <button type="submit" className="form-submit">Submit</button> */}
        {/* </form> */}


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
                    let output;
                    if (index <= (pageNumber * 4 - 1) && index >= (pageNumber * 4 - 4)) {             // Reference: https://stackoverflow.com/questions/51865400/how-to-get-only-the-first-value-using-map-method-over-an-array-of-object
                        let date = convertUnix(dataObj.datetime);
                        let summary = newsCount(dataObj.summary, dataObj.url);
                        output = <div className="news-card" key={index}>                               
                            <div className="news-header">
                                <span className="news-number">{index + 1} </span>
                                <span className="news-company">{dataObj.related}</span>
                            </div>
                            <h3 className="news-title">{dataObj.headline}</h3>
                            <p className="news-summary">{summary}</p>
                            <div className="news-footer">
                                <span className="news-source">Source: <a href={dataObj.url} target="_blank" rel="noreferrer">{dataObj.source}</a></span>
                                <span className="news-date">Date: {date}</span>
                            </div>
                            <br />
                        </div>

                    } return output;
                }) : <div className="error-API">
                    <p>{errorMessage}</p>
                </div>
            }

            {
                newsData ?
                    <span className="page-button">
                        <button className="page-change" onClick={decreasePage}>&lt;</button>
                        Page {pageNumber} of {Math.ceil(newsData.length / 4)}
                        <button className="page-change" onClick={increasePage}>&gt;</button>
                    </span>
                    : null
            }
        </div>
    </div>
}

export default NewsArticlesComponent;