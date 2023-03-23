
// using a local array in the quotes.js file to populate the quotes manually instead of using an API. main script.js has the api approach and scripts2.js has the local approach. need to change the script file link in the html to chosen api or local method

// Show new  Quote 
function newQuote(){
// pick a randomquote from apiQuotes array
const quote = localQuotes[Math.floor(Math.random()* localQuotes.length)];
console.log(quote);
}
newQuote();