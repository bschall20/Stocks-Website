import React from "react";
import stockTerms from '../JS Files/stockTerms.js';

function Terms() {

    return (
        <div className='terms-page'>
            <h2 className='terms-page-title'>STOCK TERMS</h2>
            <div className='terms-section'>
                {
                    stockTerms.map((term, index) => {
                        return (
                            <div className='term-box'>
                                <h3 className='term-word'>{index+1}.&#41; {term.word}</h3>
                                <p className='term-definition'>{term.definition}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Terms;