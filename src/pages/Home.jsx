import React from "react";
import homeInfo from '../JS Files/homeInfo.js';
import { NavLink } from "react-router-dom";

function Home() {

    return (
        <div className="home-page">
            <h2 className='home-page-title'>WELCOME TO StockHQ!</h2>
            <p className='home-welcome'>
                At StockHQ you will find all of the information you need to excel at your stock, options,
                and futures planning! Check out our industry-leading stock charting and&nbsp;
                <NavLink to="/terms" className='home-link'>
                    Stock Terms
                </NavLink>
                &nbsp;page for any clarification on intricate stock verbage!
            </p>
            <div className='home-section'>
                {
                    homeInfo.map((info, index) => {

                        if (index % 2 === 1) {
                            return (
                                <div className='home-box-mid' key={index}>
                                    <div className='home-info'>
                                        <h3 className='home-title'>{info.title}</h3>
                                        <p className='home-description'>{info.description}</p>
                                    </div>
                                    <div>
                                        <img src={info.image} alt={info.alt} className='home-img' />
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className='home-box' key={index}>
                                    <div>
                                        <img src={info.image} alt={info.alt} className='home-img' />
                                    </div>
                                    <div className='home-info'>
                                        <h3 className='home-title'>{info.title}</h3>
                                        <p className='home-description'>{info.description}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Home;