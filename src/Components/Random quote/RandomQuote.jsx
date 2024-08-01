import React, { useState, useEffect } from 'react';
import './RandomQuote.css';
import icon from '../Assets/x-icon.png';
import reload from '../Assets/reoload-icon.png';


const RandomQuote = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({
        text: "If you want to move on, you have to leave something behind.",
        author: "David Dobrovolny",
    });

    useEffect(() => {
        async function loadQuotes() {
            const response = await fetch("https://type.fit/api/quotes");
            const quotesData = await response.json();
            setQuotes(quotesData);
        }
        loadQuotes();
    }, []);

    const random = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const select = quotes[randomIndex];
        setQuote(select);
    }

    const twitter = () => {
        window.open(`https://x.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`);
    }
    

    return (
        <div className='container'>
            <div className='quote'>{quote.text}</div>
            <div>
                <div className='line'></div>
                <div className='bottom'>
                    <div className='author'> - {quote.author.split(',')[0]}</div>
                    <div className='icons'>
                        <img src={icon}  onClick={twitter}  alt="random quote" />
                        <img src={reload} onClick={random} alt="reload icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandomQuote;
