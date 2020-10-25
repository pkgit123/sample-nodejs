/**
 * Introduction to the ES6 Challenges
 * 
 * ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. 
 * As all major browsers and JavaScript-runtimes follow this specification, the term ECMAScript is interchangeable with the term JavaScript.
 * 
 * Most of the challenges on freeCodeCamp use the ECMAScript 5 (ES5) specification of the language, finalized in 2009. 
 * But JavaScript is an evolving programming language. As features are added and revisions are made, new versions of the language are released for use by developers.
 * 
 * The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. 
 *
 * There are 31 lessons in ES6 section.
 */
 
 /**
  * ES6: Explore Differences Between the var and let Keywords
  * The "let" keyword replaces "var" in ES6 to avoid over-writing variables, throws error if try to over-write.
  * Also learning about STRICT MODE which catches common coding mistakes.
  */
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();


 /**
  * ES6: Compare Scopes of the var and let Keywords
  * The "let" keyword assigns scope within functions, and within iteration of for-loop.
  */
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}


 /**
  * ES6: Declare a Read-Only Variable with the const Keyword
  * The "const" keyword supports same features as "let" but are read-only.
  * The "const" variables cannot be over-written.
  * Variable names using "const" keyword should be ALLCAPS.
  */
function printManyTimes(str) {
  "use strict";

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");



 /**
  * ES6: Mutate an Array Declared with const
  * Array variable "const" cannot be over-written, but elements can be updated.
  */
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();


 /**
  * ES6: Prevent Object Mutation
  */
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


 /**
  * ES6: Use Arrow Functions to Write Concise Anonymous Functions
  * Declare function #1: function doSomething() {};
  * Declare function #2: const doSomething = function() {};
  * Declare function #3: const doSomething = () => {};
  * Declare function #4: const doSomething = () => "return value";
  */
const magic = () => {
  "use strict";
  return new Date();
};



 /**
  * ES6: Write Arrow Functions with Parameters
  */
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));


 /**
  * ES6: Set Default Parameters for Your Functions
  */
// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line


 /**
  * ES6: Use the Rest Parameter with Function Parameters
  * The "rest" parameter is 3-dots in function parameters.  Unknown number of parameters.  
  * Seems similar to Python **args and **kwargs.  
  */
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}


 /**
  * ES6: Use the Spread Operator to Evaluate Arrays In-Place
  * The "spread" parameter is also 3-dots.  Can be used in function parameter, or array literal.
  * Math.max() expects comma-separated-arguments, not an array.
  */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


 /**
  *
  */


