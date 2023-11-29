import './App.css';
import React, { useState } from 'react';

//main header
function Quote() {
  return (
    <div className='quote'>
      <p>Random Quote Generator</p>
      <header id="colorChange" className='quote-header'>
      <QuoteBox />
      </header>
    </div>
  );
}

export default Quote;

//quote generator
function QuoteBox() {
  const [link, setLink] = useState(''); //??

  //returns a random quote from the array
  function getRandomQuote(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const item = arr[random];
    return item;
  }

  const quoteArray = [
    ['If you want to test a mans character, give him power.', '- Abraham Lincoln'],
    ['The most important thing is to enjoy your life - to be happy - its all that matters.', '- Steve Jobs'],
    ['Do not let anyone tell you what you cannot do. Follow your dreams and persist.', '- Barrack Obama'],
    ['If you want to live a happy life, tie it to a goal, not to people or things', '- Albert Einstein'],
    ['I can accept failure, everyone fails at something. But I cannot accept not trying.' ,'- Michael Jordan'],
    ['The greatest glory in living lies not in never falling, but in rising every time we fall.', '- Nelson Mandela'],
    ['I have a dream.', '- Martin Luther King Jr.'],
    ['Adapt what is useful, reject what is useless, and add what is specifically your own', '- Bruce Lee'],
    ['The will must be stronger than the skill.', '- Muhammad Ali'],
    ['Man cannot remake himself without suffering, for he is both the marble and the sculptor', '- Alexis Carrel']
  ];

  function getRandomColor(arrC) {
    const randomC = Math.floor(Math.random() * arrC.length);
    const itemC = arrC[randomC];
    return itemC;
  }

  const cssColors = ['skyblue','salmon', 'burlywood', 'palegreen', 
  'thistle', 'lightgray', 'lightblue', 'lightsteelblue'];

  //function called when button is clicked, calls getRandomQuote and prints the quote/author
  const handleNewQuote = () => {
    const randomQuote = getRandomQuote(quoteArray);
    document.getElementById('text').innerText = randomQuote[0];
    document.getElementById('author').innerText = randomQuote[1];
    const full_text = document.getElementById('colorChange').innerText; //fetches current quote text and adds it to a link being used in an a element
    const encodedText = encodeURIComponent(full_text);
    setLink(encodedText);
    
    const randomColor = getRandomColor(cssColors);
    const alternate = document.querySelectorAll('#colorChange');
    alternate.forEach(color => {
      color.style.backgroundColor = randomColor;
      console.log(color.style.backgroundColor);
    });
    
  };

  return (
    <div className='quote-box'>
      <div id="colorChange" className="quote-text">
        <p id='text'></p>
        <p id='author'></p>
      </div>
      <div className="buttons">
        <div>
          <button type="button" class="btn btn-outline-primary">
            <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + link} id="tweet-quote" target="_blank">
            <i class="fa fa-twitter"></i>
            </a>
          </button>
        </div>
        <div>
          <button id='new-quote' class="btn btn-outline-primary" type='button' onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

/*const alternate = document.querySelectorAll('#colorChange');
  alternate.forEach(color => {
    color.addEventListener('click', function handleNewQuote() {
      document.body.style.backgroundColor = 'red';
      console.log(cssColors);
    })
}) */