import 'dotenv/config';
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const stockKey = process.env.FMP_API_KEY;

let stockSelect;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs")
})


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

app.post("/graph", async (req, res) => {
    try {
        //console.log(req.body);
        const symbol = req.body.symbol;
        const response = await axios.get(
            `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${stockKey}`
        );
        const result = response.data;
        res.render("graph.ejs", { stock: result[0] });
        console.log(result[0].companyName);
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("graph.ejs", {
            error: "No stocks match your criteria.",
        });
    }
});

app.get("/news", (req, res) => {
    res.render("news.ejs")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})





