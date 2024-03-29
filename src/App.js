import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx"
import NewsArticles from "./components/NewsArticles.jsx";
import Home from "./pages/Home.jsx";
import Graph from "./pages/Graph.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";


import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (<div className='app'>
        <Router>
            <Header />
            <div className='app-main'>
                <NewsArticles />
                <div className='app-content'>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/graph' element={<Graph />} />
                        <Route exact path='/terms' element={<Terms />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </Router>
    </div>
    );
}

export default App;