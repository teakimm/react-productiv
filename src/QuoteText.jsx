import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/**QuoteText: Displays quote if there is one
 *
 *Props:
 *-quoteText
 *-handlButtonClick
 *
 * State:none
 *
 * App => Quote => QuoteText
 */
function QuoteText({ quoteText, handleButtonClick }) {

    return (
        <div className="mb-3">
            {quoteText.text ?
                <h6 className="mt-3">{quoteText.text} - <em>{quoteText.author}</em></h6> : ""}
            <div><button className="mt-3 btn-light rig btn btn-sm"
                onClick={handleButtonClick}>
                Get Quote
            </button></div>
        </div>

    );
}


export default QuoteText;