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
  * ES6: Use Destructuring Assignment to Extract Values from Objects
  * Keep the variable name the same as object key.
  */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line


 /**
  * ES6: Use Destructuring Assignment to Assign Variables from Objects
  * Change the variable name.
  */
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line


 /**
  * ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
  */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST; 

// Only change code above this line


 /**
  * ES6: Use Destructuring Assignment to Assign Variables from Arrays
  */
let a = 8, b = 6;
// Only change code below this line
[b, a] = [a, b];

 /**
  * ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
  */
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);


 /**
  * ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
  */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line

const half = ({ max, min }) => (max + min) / 2.0; 
// Only change code above this line


 /**
  * ES6: Create Strings using Template Literals
  */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i<arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);


 /**
  * ES6: Write Concise Object Literal Declarations Using Object Property Shorthand
  * The syntax appear to be ({ x, y, z }), where the key name is the variable listed, and the value is the key in the input object.  
  */
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return ({ name, age, gender });
  // Only change code above this line
};


 /**
  * ES6: Write Concise Declarative Functions with ES6
  * Strange ... JavaScript allows a function to be created within an object ... almost like a method.
  * Keyword "this" is like "self" in Python.
  */
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


 /**
  * ES6: Use class Syntax to Define a Constructor Function
  * "Constructor" is a special keyword for creating new function
  * Keyword "this" is like "self" in Python.
  */
// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


 /**
  * ES6: Use getters and setters to Control Access to an Object
  */

// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this._temperature = 5/9 * (fahrenheit - 32);
    }
    get temperature() {
        return this._temperature;
    }
    set temperature(celsius) {
        this._temperature = celsius;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius



 /**
  * ES6: Create a Module Script
  */

<html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>

 /**
  * ES6: Use export to Share a Code Block
  */

const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export { uppercaseString, lowercaseString };

 /**
  * ES6: Reuse JavaScript Code Using import
  */

import { uppercaseString, lowercaseString } from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");


 /**
  * ES6: Use * to Import Everything from a File
  */

import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

 /**
  * ES6: Create an Export Fallback with export default
  */

export default function subtract(x, y) {
  return x - y;
}

 /**
  * ES6: Import a Default Export
  * With a Default Export, the import statement does not require curly braces {}
  */

import subtract from "./math_functions.js";  
// Only change code above this line

subtract(7,4);


 /**
  * ES6: Create a JavaScript Promise
  *
  * A promise in JavaScript is exactly what it sounds like - 
  * you use it to make a promise to do something, usually asynchronously. 
  * When the task completes, you either fulfill your promise or fail to do so.
  * 
  * Promise is a constructor function, so you need to use the new keyword to create one. 
  * It takes a function, as its argument, with two parameters - resolve and reject. 
  * These are methods used to determine the outcome of the promise. 
  */

const makeServerRequest = new Promise((resolve, reject) => {
  
});

 /**
  * ES6: Complete a Promise with resolve and reject
  */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    // Change this line
    resolve("We got the data");
  } else {  
    // Change this line
    reject("Data not received");
  }
});


 /**
  * ES6: Handle a Fulfilled Promise with then
  *
  * Promises are most useful when you have a process that takes an 
  * unknown amount of time in your code (i.e. something asynchronous), often a server request. 
  */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// see below for .then() method of Promise
makeServerRequest.then(result => {
  console.log(result);
});

 /**
  * ES6: Handle a Rejected Promise with catch
  *
  * catch is the method used when your promise has been rejected. 
  * It is executed immediately after a promise's reject method is called. 
  */

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

// see below for .catch() method of Promise
makeServerRequest.catch(error => {
  console.log(error);
});



