// import React from "react";
// import Header from "./components/Header.jsx";
// import Aside from "./components/Aside.jsx";
// import Home from "./pages/Home.jsx";
// // import Graph from "./components/pages/Graph.jsx";
// // import News from "./components/pages/News.jsx";

// import Footer from "./components/Footer.jsx";
// // import "./styles.css";

// function App() {
//     return <div>
//         <Header />
//         <Aside />
//         <Home />
//         {/* <Graph /> */}
//         {/* <News /> */}
//         <Footer />
//     </div>
// }

// export default App;





import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx"
import Aside from "./components/NewsArticlesComponent.jsx";
import Home from "./pages/Home.jsx";
import Graph from "./pages/Graph.jsx";
import News from "./pages/News.jsx";
// import ChartRender from "./components/ChartGraph.jsx";

import Footer from "./components/Footer.jsx";

function App() {
    return (<div className="app">
        <Router>
            <Header />
            <div className="app-main">
                <Aside />                
                <div className="app-content">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/graph" element={<Graph />} />
                        <Route path="/news" element={<News />} />
                        {/* <Route path="/chart" element={<ChartRender />} /> */}
                    </Routes>
                </div>
            </div>
            <Footer />
        </Router>
    </div>
    );
}

export default App;