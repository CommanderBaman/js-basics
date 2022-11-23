/**
 * LIBRARIES
 * Easy to add libraries in JS due npm
 * 
 * Libraries Added in tutorial
 *      - cowsay
 *      - inspirational-quotes
 */

const cowsay = require("cowsay");
const Quote = require('inspirational-quotes')


// inspirational-quotes library
quote = Quote.getQuote()

// cowsay library
// console.log(cowsay.say({ text: "I am not a COW!", e: "XO", T: "V" }));
console.log(cowsay.say({ text: quote.text + ' - ' + quote.author, e: "XO", T: "V" }));


