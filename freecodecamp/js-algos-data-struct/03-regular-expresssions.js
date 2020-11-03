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
 * The "i" outside of regex is ignore case, e.g. /regex/i;
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
 * Regular Expressions: Match Single Characters Not Specified
 * Caret symbol ("^") specifies negated character sets.  
 */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


/**
 * Regular Expressions: Match Characters that Occur One or More Times
 * The plus sign "+" is 1-or-more 
 */

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);


/**
 * Regular Expressions: Match Characters that Occur Zero or More Times
 The star sign "*" is zero-or-more
 */

// Only change code below this line
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);


/**
 * Regular Expressions: Find Characters with Lazy Matching
 * The question mark "?" is lazy matching, i.e. find shortest match if multiple
 * The default matching is greedy matching, i.e. find longest match if multiple
 */

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


/**
 * Regular Expressions: Find One or More Criminals in a Hunt
 */

let reCriminals = /C+/; // Change this line


/**
 * Regular Expressions: Match Beginning String Patterns
 * The caret inside character set is negated, e.g. not "a" /[^a]/
 * The caret outside character set means beginning of string, e.g. "a" at beginning /^a/
 */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);


/**
 * Regular Expressions: Match Ending String Patterns
 * Use anchor character $ to match end of string.
 */

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);


/**
 * Regular Expressions: Match All Letters and Numbers
 * The shorthand character class "\w" is equivalent to /[A-Za-z0-9_]/ i.e. all letters, numbers, and underscore
 */

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;


/**
 * Regular Expressions: Match Everything But Letters and Numbers
 * Opposite of \w is \W ... the opposite for shorthand character class uses upper-case letter
 * The shorthand character class "\W" is equivalent to [^A-Za-z0-9_]
 */

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;


/**
 * Regular Expressions: Match All Numbers
 * The shorthand character class "\d" matches all numbers, equivalent to [0-9]
 */

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;


/**
 * Regular Expressions: Match All Non-Numbers
 * The shorthand character class "\D" (uppercase) matches all non-numbers
 * The shorthand character class "\d" (lowercase) matches all numbers.
 */

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;


/**
 * Regular Expressions: Restrict Possible Usernames
 *
 * 1) Usernames can only use alpha-numeric characters.
 * 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
 * 3) Username letters can be lowercase and uppercase.
 * 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 *
 * Starts with 2 letters, keep in mind two-character username can only have alphabet letters, make sure only ends in 0+ numbers: ^[a-z][a-z]+\d*$
 * Starts with 1 letter, but more than two-characters, ends with numbers: ^[a-z]\d+\d+$
 */

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d+\d+$/i; // Change this line
let result = userCheck.test(username);


/**
 * Regular Expressions: Match Whitespace
 * The character class "\s" includes whitespace, but also carriage return, tab, form feed, and new line characters
 * The "\s" is same as [ \r\t\f\n\v].
 */

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);


/**
 * Regular Expressions: Match Non-Whitespace Characters
 * The character class "\S" (uppercase) matches everything except "\s" (lowercase)
 * The "\S" is same as [^ \r\t\f\n\v].
 */

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);


/**
 * Regular Expressions: Specify Upper and Lower Number of Matches
 * The quantity specifiers use {x,y} to specify {lower,upper} number of matches.
 */

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);


/**
 * Regular Expressions: Specify Only the Lower Number of Matches
 * The quantity specifiers use {x,} to specify {lower,} number of matches.
 */

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);


/**
 * Regular Expressions: Specify Exact Number of Matches
 * The quantity specifiers use {x} to specify {exact} number of matches.
 */

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);


/**
 * 
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



