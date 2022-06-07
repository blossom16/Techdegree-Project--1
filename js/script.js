/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// created quote objects with quote properties.
const quotes= [
{
quote: 'Never go to bed mad. Stay up and fight', 
source: 'Phyllis Diller', 
year: '1987'
},
{
 quote: 'I regret nothing. The end.', 
 souce:'Ron Swanson-Parks & Rec',
 year:'2012'
},
{
 quote:'I am Beyonce, always', 
 source:'Michael Scott-The Office', 
 year:'2009'
} ,
{
quote:'Everything hurts and I am dying', 
source:'Leslie Knope-Parks & Rec', 
year: '2011'
},
{
 quote:'Sometimes you gotta work a little so you can ball a lot.', 
 source:'Tom Haverford-Parks & Rec',
 year:'2013'
},
];

//kdjfid

/***
 * `getRandomQuote` function
***/
//this function creates the random generation using math methods
function getRandomQuote (){
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];

}


/***
 * `printQuote` function
***/
//this part uses functions and HTML to pring the quotes on the screen. 
// The new function printQuote(), calls getRandomQuote function and adds html syntax
function printQuote () {

  const newQuote = getRandomQuote();
  
  let html = `<p class="quote"> ${newQuote.quote}</p>
  <p class="source"> ${newQuote.source} `;

  if (newQuote.citation) {

    html += `<span class="citation"> ${newQuote.citation}</span>`;

  }
  if (newQuote.year) 
    html += `<span class="year"> ${newQuote.year}</span>`;
  
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
} 
  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);