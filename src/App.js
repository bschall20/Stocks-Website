import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx"
import NewsArticlesComponent from "./components/NewsArticlesComponent.jsx";
// import Home from "./pages/Home.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
// import News from "./pages/News.jsx";

import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    // return (<div className="app">
    //     <Router>
    //         <Header />
    //         <div className="app-main">
    //             <Aside />                
    //             <div className="app-content">
    //                 <Navbar />
    //                 <Routes>
    //                     <Route exact path="/" element={<Home />} />
    //                     <Route path="/graph" element={<Graph />} />
    //                     <Route path="/news" element={<News />} />
    //                 </Routes>
    //             </div>
    //         </div>
    //         <Footer />
    //     </Router>
    // </div>
    // );


    return (<div className='app'>
        <Router>
            <Header />
            <div className='app-main'>
                <NewsArticlesComponent />
                <div className='app-content'>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
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