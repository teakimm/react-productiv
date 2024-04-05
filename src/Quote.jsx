import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import QuoteText from './QuoteText';



/**Quote: Handles getting a quote
 *
 * Props: None
 *
 * State:
 * -quote
 *
 * App => Quote => QuoteText
 */
function Quote() {
    const [quote, setQuote] = useState({});

    async function getQuote() {
        const result = await fetch('https://inspo-quotes-api.herokuapp.com/quotes/random');
        const resultJson = await result.json();

        setQuote(resultJson.quote);

    }
    return (
        <QuoteText quoteText={quote} handleButtonClick={getQuote} />
    );




}

export default Quote;