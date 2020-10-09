/* =============================================================
    JavaScript Algorithms and Data Structures.
    
    Basic JavaScript section (111 lessons).
    
    Try to complete 10 lessons at a time, then commit to repo.  
    Track lesson progress through commit messages.
   =============================================================
*/ 

// Here is an in-line comment

/* 
Here is a 
multi-line 
comment
*/

// Declare JavaScript Variables
var myName;

// Storing values in variables
var a;
a = 7;

// Assigning the Value of One Variable to Another
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator
var a = 9;

// Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Add Two Numbers with JavaScript
var sum = 10 + 10;

// Subtract One Number from Another with JavaScript
var difference = 45 - 33;

// Multiply Two Numbers with JavaScript
var product = 8 * 10;

// Divide One Number by Another with JavaScript
var quotient = 66 / 33;

// Increment a Number with JavaScript
var myVar = 87;
myVar++;

// Decrement a Number with JavaScript
var myVar = 11;
myVar--;

// Create Decimal Numbers with JavaScript
var myDecimal = 3.14;

// Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
var quotient = 4.4 / 2.0;

// Finding a Remainder in JavaScript
var remainder;
remainder = 11 % 3;

// Compound Assignment With Augmented Addition
a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
a /= 12;
b /= 4;
c /= 11;

// Declare String Variables
var myFirstName = "John";
var myLastName = "Smith";

// Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
var myStr ="FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
var myStr = "This is the start. " + "This is the end.";

// Concatenating Strings with the Plus Equals Operator
var myStr;
myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Constructing Strings with Variables
var myName = "John Smith";
var myStr = "My name is " + myName + " and I am well!";

// Appending Variables to Strings
var someAdjective = "life-changing!";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 

// Understand String Immutability
var myStr = "Jello World";
myStr = "Hello World"; 

// Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; 

// Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length -1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Word Blanks
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 

// Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["John", 14];

// Nest one Array within Another Array
var myArray = [["LeBron", 23], ["Kawhi", 2]];

// Access Array Data with Indexes
var myArray = [50,60,70];
var myData = myArray[0];

// Modify Array Data With Indexes
var myArray = [18,64,99];
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

// Manipulate Arrays With push()
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop()
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift()
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

// Shopping List
var myList = [
    ["Chocolate Bar", 15], 
    ["Milk", 3], 
    ["Bread", 10], 
    ["Eggs", 24], 
    ["Butter", 35]
];

// Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1,2);

/* ==========================================
    Global Scope and Functions
   ==========================================
*/

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5; 
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* ==========================================
*/


/* ==========================================
    Local Scope and Functions
   ==========================================
*/

function myLocalScope() {
  'use strict';

  // Only change code below this line
  var myVar = 23;

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/* ==========================================
*/


/* ==========================================
    Global vs. Local Scope in Functions
   ==========================================
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

/* ==========================================
*/


/* ==========================================
    Return a Value from a Function with Return
   ==========================================
*/

function timesFive(num) {
    return num * 5;
}
timesFive(5);

/* ==========================================
*/


/* ==========================================
    Understanding Undefined Value returned from a Function
   ==========================================
*/

// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();

/* ==========================================
*/


/* ==========================================
    Assignment with a Returned Value
   ==========================================
*/

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

/* ==========================================
*/


/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/



/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/


/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/




/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/


/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/




/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/


/* ==========================================
    lessonName
   ==========================================
*/

/* ==========================================
*/




















