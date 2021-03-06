/**
 * Filename:    04-debugging.js
 * 
 * Types of errors:
 *  (1) syntax errors that prevent a program from running (e.g. typo)
 *  (2) runtime errors when code fails to execute or has unexpected behavior (e.g. infinite loop)
 *  (3) semantic (or logical) errors when code doesn't do what it's meant to (e.g. adding numbers instead of multiplying)
 */
 
/** =================================
 *  Debugging: Use the JavaScript Console to Check the Value of a Variable
 *  JavaScript console called DevTools
 *  In Firefox browser, Control+Shift+k ... a REPL appears at bottom of browser.
 *  console.log()
 */

let a = 5;
let b = 1;
a++;
// Only change code below this line
console.log(a)
console.log(b)

let sumAB = a + b;
console.log(sumAB);


/** =================================
 *  Debugging: Understanding the Differences between the freeCodeCamp and Browser Console
 *  In Firefox browser, console is Control+Shift+K
 */

// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.log(output);
// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
console.clear();


/** =================================
 *  Debugging: Use typeof to Check the Type of a Variable
 *
 *  JavaScript recognizes six primitive (immutable) data types: 
 *  Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) 
 *  and one type for mutable items: Object. 
 *  Note that in JavaScript, arrays are technically a type of object.
 */

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);


/** =================================
 *  Debugging: Catch Misspelled Variable and Function Names
 *  Notice the f-string in JavaScript is $(variable_name).
 *  Notice the string uses backticks "`" rather than quotes.
 */

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);


/** =================================
 *  Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes
 */

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);


/** =================================
 *  Debugging: Catch Mixed Usage of Single and Double Quotes
 */

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);


/** =================================
 *  Debugging: Catch Use of Assignment Operator Instead of Equality Operator
 */

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);


/** =================================
 *  Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
 */

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);


/** =================================
 *  Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function
 */

function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);


/** =================================
 *  Debugging: Catch Off By One Errors When Using Indexing
 */

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();


/** =================================
 *  Debugging: Use Caution When Reinitializing Variables Inside a Loop
 *  Solution requires reinitializing row array in outer loop.
 */

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    // Reinitialize row to empty array
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);



/** =================================
 *  Debugging: Prevent Infinite Loops with a Valid Terminal Condition
 */

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

