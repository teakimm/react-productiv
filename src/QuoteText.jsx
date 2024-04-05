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
        <div>
            {quoteText.text ?
                <h4>{quoteText.text} - <em>{quoteText.author}</em></h4> : ""}
            <div><button onClick={handleButtonClick}>Get Quote</button></div>
        </div>

    );
}


export default QuoteText;