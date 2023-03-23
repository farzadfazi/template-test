const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const jokeContainer =document.getElementById('joke-container');
const jokeSetup = document.getElementById('joke-setup');
const jokeDelivery = document.getElementById('joke-delivery');
const newJokeBtn = document.getElementById('new-joke');



//  initiate a blank array at first  and fetch quotes from api with below async function getQuotes()
let apiQuotes= [];
let apiJokes= [];

//  show loader animation between quotes when there is a timelag , two function to show and hide loader
function loading(){
    loader.hidden =false;
    // quoteContainer.hidden=true;
   
}
 function complete(){
    // quoteContainer.hidden=false;
  
    loader.hidden=true;
 }

// Show new  Quote (2)
function newQuote(){
    loading();
// hide the joke container and unhide the quote container
    quoteContainer.hidden=false;  
    jokeContainer.hidden=true;  
// pick a randomquote from apiQuotes array
const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
// check if author field is blank and replace it with the words 'Unknown"
if(!quote.author) {
    authorText.textContent = 'Unknown';
} else {
    authorText.textContent = quote.author;
}
// check the Quotelength and make styling changes if it is too long
if (quote.text.length>120) {
    quoteText.classList.add('long-quote');

} else {
    quoteText.classList.remove('long-quote')
}
quoteText.textContent = quote.text;
complete();
}
// get quotes from API - (1)
async function getQuotes(){
    loading();
    const apiURL='https://jacintodesign.github.io/quotes-api/data/quotes.json';
   
    try {
const response = await fetch(apiURL)
apiQuotes = await response.json();
newQuote();
    } catch(error) {
// Catch error here.
    }    
}

// Show new  Joke
function newJoke(){
    loading();
 // hide the quote container and unhide the joke container
    quoteContainer.hidden=true;  
    jokeContainer.hidden=false;  
     
// pick a random quote from apiQuotes array
const joke = apiJokes;
jokeSetup.textContent = joke.setup;
jokeDelivery.textContent = joke.delivery;

complete();
}
// get jokes from api function
async function getJokes(){
    loading();
    const jokeURL='https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=twopart';
   
    try {
const response = await fetch(jokeURL)
apiJokes = await response.json();
// console.log(apiJokes)
newJoke();
    } catch(error) {
// Catch error here.
    }    
}
// to tweet aquote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
newJokeBtn.addEventListener('click', getJokes);

// // On load
getQuotes();
// getJokes();
