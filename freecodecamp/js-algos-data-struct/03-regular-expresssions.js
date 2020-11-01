/**
Regular Expressions.

Regular expressions are special strings that represent a search pattern. 
Also known as "regex" or "regexp", they help programmers match, search, and replace text. 
Regular expressions can appear cryptic because a few characters have special meaning. 
The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want. 
This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.

Total of 33 lessons.
 */


/**
Regular Expressions: Using the Test Method
 */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line


/** 
 * Regular Expressions: Match Literal Strings
 */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


/**
 * Regular Expressions: Match a Literal String with Different Possibilities
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);


/**
 * Regular Expressions: Ignore Case While Matching
 */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);


/**
 * Regular Expressions: Extract Matches
 */

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line


/**
 * Regular Expressions: Find More Than the First Match
 */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line


/**
 * Regular Expressions: Match Anything with Wildcard Period
 */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


/**
 * Regular Expressions: Match Single Character with Multiple Possibilities
 */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line


/**
 * Regular Expressions: Match Letters of the Alphabet
 */

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line


/**
 * Regular Expressions: Match Numbers and Letters of the Alphabet
 */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



/**

 */



