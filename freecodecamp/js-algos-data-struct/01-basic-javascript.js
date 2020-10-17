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
    Basic JavaScript: Stand in Line
   ==========================================
*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  return arr.shift();
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Understanding Boolean Values
   ==========================================
*/
function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}


/* ==========================================
*/


/* ==========================================
    Basic JavaScript: Use Conditional Logic with If Statements
   ==========================================
*/
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line

}


/* ==========================================
*/


/* ==========================================
    Basic JavaScript: Comparison with the Equality Operator
   ==========================================
*/
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


/* ==========================================
*/


/* ==========================================
    Basic JavaScript: Comparison with the Strict Equality Operator
   ==========================================
*/

// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


/* ==========================================
*/


/* ==========================================
    Basic JavaScript: Practice comparing different values
   ==========================================
*/
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");


/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Comparison with the Inequality Operator
   ==========================================
*/
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/* ==========================================
*/


/* ==========================================
    Basic JavaScript: Comparison with the Strict Inequality Operator
   ==========================================
*/
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Comparison with the Greater Than Operator
   ==========================================
*/
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Comparison with the Greater Than Or Equal To Operator
   ==========================================
*/
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Comparison with the Less Than Operator
   ==========================================
*/
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Comparison with the Less Than Or Equal To Operator
   ==========================================
*/
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Comparisons with the Logical And Operator
   ==========================================
*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >=25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Comparisons with the Logical Or Operator
   ==========================================
*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);


/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Introducing Else Statements
   ==========================================
*/
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Introducing Else If Statements
   ==========================================
*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Logical Order in If Else Statements
   ==========================================
*/
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Chaining If Else Statements
   ==========================================
*/
function testSize(num) {
  // Only change code below this line
  var result = "";

  if (num < 5) {
    result = "Tiny";
  } else if (num < 10) {
    result = "Small";
  } else if (num < 15) {
    result = "Medium";
  } else if (num < 20) {
    result = "Large";
  } else if (num >= 20) {
    result = "Huge";
  } else {
    result = "Some other result"
  }

  return result;
  // Only change code above this line
}

testSize(7);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Golf Code
   ==========================================
*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  var result = "";
  // Only change code below this line
  if (strokes == 1) {
    result = names[0];
  } else if (strokes <= par - 2) {
    result = names[1];
  } else if (strokes == par - 1) {
    result = names[2];
  } else if (strokes == par) {
    result = names[3];
  } else if (strokes == par + 1) {
    result = names[4];
  } else if (strokes == par + 2) {
    result = names[5];
  } else if (strokes >= par + 3) {
    result = names[6];
  } else {
    result = "Some other result"
  }

  return result;
  // Only change code above this line
}

golfScore(5, 4);


/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Selecting from Many Options with Switch Statements
   ==========================================
*/
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Adding a Default Option in Switch Statements
   ==========================================
*/
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Multiple Identical Options in Switch Statements
   ==========================================
*/
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3: 
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "Other";
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Replacing If Else Chains with Switch
   ==========================================
*/
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      answer = "";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Returning Boolean Values from Functions
   ==========================================
*/
function isLess(a, b) {
  // Only change code below this line
  return (a < b);
  
  // Only change code above this line
}

isLess(10, 15);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Return Early Pattern for Functions
   ==========================================
*/
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Counting Cards
   ==========================================
*/
var count = 0;

function cc(card) {
  var result = "";
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
  }

  if (count > 0) {
    result = count + " Bet";
  } else if (count <= 0) {
    result = count + " Hold";
  } else {
    result = count + " Other";
  }

  return result;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Build JavaScript Objects
   ==========================================
*/
var myDog = {
// Only change code below this line
    name: "Joe",
    legs: 4,
    tails: 1,
    friends: ["Bob", "Sue"]

// Only change code above this line
};


/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Accessing Object Properties with Dot Notation
   ==========================================
*/
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Accessing Object Properties with Bracket Notation
   ==========================================
*/

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line


/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Accessing Object Properties with Variables
   ==========================================
*/
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line

/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Updating Object Properties
   ==========================================
*/
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
/* ==========================================
*/




/* ==========================================
    Basic JavaScript: Add New Properties to a JavaScript Object
   ==========================================
*/
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.bark = "woof";
/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Delete Properties from a JavaScript Object
   ==========================================
*/
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;
/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Using Objects for Lookups
   ==========================================
*/
// Setup
function phoneticLookup(val) {
  var result = "";


  // Only change code below this line

  var objPhonetic = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = objPhonetic[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Testing Objects for Properties
   ==========================================
*/
function checkObj(obj, checkProp) {
  // Only change code below this line

  var result = "";

  if (obj.hasOwnProperty(checkProp)) {
    result = obj[checkProp];
  } else {
    result = "Not Found";
  }

  return result;
  // Only change code above this line
}


/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Manipulating Complex Objects
   ==========================================
*/
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add a record here
  {
    "artist": "John Smith",
    "title": "Best Song Ever",
    "release_year": 2019,
    "formats": [
      "iTunes",
      "MP3",
      "YouTube"
    ] 
  }
];

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Accessing Nested Objects
   ==========================================
*/
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Accessing Nested Arrays
   ==========================================
*/
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Record Collection
   ==========================================
*/

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  // delete property if "value" is empty string
  if (value=="") {
    delete object[id][prop];
  }

  // update property if "value" is not "tracks"
  else if (prop!="tracks") {
    object[id][prop] = value;
  }

  // update "tracks" property (array)
  else {

    // object has "tracks" already, update array
    if (object[id].hasOwnProperty("tracks")) {
      object[id]["tracks"].push(value);
    }

    // object doesn't have "tracks", create array
    else {
      object[id]["tracks"] = [value]
    }

  }
  
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');





/* ==========================================
*/



/* ==========================================
    Basic JavaScript: Iterate with JavaScript While Loops
   ==========================================
*/

// Setup
var myArray = [];

// Only change code below this line
var i = 0;
while (i < 6) {
    myArray.unshift(i);
    i++;
}

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

















