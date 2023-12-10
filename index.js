import 'dotenv/config';
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import returnDate from "./getDate.js";

const app = express();
const port = 3000;
// API Key from https://site.financialmodelingprep.com/developer/docs/dashboard :
const stockKey = process.env.FMP_API_KEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// Home Page
app.get("/", (req, res) => {
    res.render("index.ejs")
})


// Graph Page
app.get("/graph", async (req, res) => {
    try {
        const response = await axios.get(
            `https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${stockKey}`
        );
        const result = response.data;
        res.render("graph.ejs", { stock: result[0] });
        console.log(result[0].companyName);
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.render("graph.ejs", {
            error: error.message,
        });
    }
});

//Graph Page after selections
app.post("/graph", async (req, res) => {
    try {
        //console.log(req.body);
        const symbol = req.body.symbol;
        const timeframe = req.body.timeframe;
        const dateRange = returnDate(timeframe);        // Will return 5 day window until variable is set up for the 5.
        let timeResponse = "";
        console.log(timeframe);
        if (timeframe === "daily") {
            console.log("Attempting daily response.");
            timeResponse = await axios.get(
                `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${stockKey}`
            );}
        else {
            //include dates for each timeframe:
            // 1min: 1 day
            // 5min: 5 days
            // 15min: 5 days
            // 30min: 10 days
            // 1h: 20 days
            // 4h: 180 days
            // daily: 1 year
            // weekly: 3 year 
            console.log("Attempting timeframe + date range response.");
            console.log(`Timeframe: ${timeframe}`);
            console.log(`Symbol: ${symbol}`);
            console.log(`Date Range: ${dateRange}`);
            console.log(`Link: https://financialmodelingprep.com/api/v3/historical-chart/${timeframe}/${symbol}?${dateRange}&apikey=${stockKey}`)
            timeResponse = await axios.get(
                `https://financialmodelingprep.com/api/v3/historical-chart/${timeframe}/${symbol}?${dateRange}&apikey=${stockKey}`
                //`https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?from=2023-10-10&to=2023-08-10&apikey=${stockKey}`
            );}

        const response = await axios.get(
            `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${stockKey}`
        );
        const result = response.data;
        const timeResult = timeResponse.data;
        res.render("graph.ejs", { stock: result[0], timeResult: timeResult });
        console.log(result[0].companyName);
        console.log(timeResult);
        //console.log(timeResult[1]);
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("graph.ejs", {
            error: "No stocks match your criteria.",
        });
    }
});


// News Page
app.get("/news", (req, res) => {
    res.render("news.ejs")
})


// Listen to port in console
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})





