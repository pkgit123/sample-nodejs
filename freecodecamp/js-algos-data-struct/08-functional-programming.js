/ ** 
  *   Functional Programming: Learn About Functional Programming
  */
  
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line


/ **  Functional Programming: Understand Functional Programming Terminology
  *   Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 
  *   You may have seen them passed to other methods, for example in filter, 
  *   the callback function tells JavaScript the criteria for how to filter an array.
  *   The functions that take a function as an argument, or return a function as a return value are called higher order functions.
  *   When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.
  */
  
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



/ ** Functional Programming: Understand the Hazards of Using Imperative Code
  *  In English (and many other languages), the imperative tense is used to give commands. 
  *  Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task. 
  *  In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.
  *  The .splice() method adds/removes items in an array.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  *  The .slice() method returns copy of portion of array.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
  
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


/ ** Functional Programming: Avoid Mutations and Side Effects Using Functional Programming
  *  One of the core principles of functional programming is to not change things. 
  *  Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
  *  A function, ideally, should be a pure function, meaning that it does not cause any side effects.
  */
  
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line

  return fixedValue + 1;

  // Only change code above this line
}

console.log(incrementer()); 


/ ** Functional Programming: Pass Arguments to Avoid External Dependence in a Function
  *   
  */
  
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (fixedValue) {
  return fixedValue + 1;
  // Only change code above this line
}

/ ** Functional Programming: Refactor Global Variables Out of Functions
  *  Don't alter a variable or object
  *  Declare function parameters
  */
  
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookArray, bookName) {
  let bookListCopy = [...bookArray];
  bookListCopy.push(bookName);
  return bookListCopy;
  
  // Change code above this line
}

// Change code below this line
function remove (bookArray, bookName) {
  let bookListCopy = [...bookArray];
  var book_index = bookListCopy.indexOf(bookName);
  if (book_index >= 0) {

    bookListCopy.splice(book_index, 1);
    return bookListCopy;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log('newBookList', newBookList);
console.log('newerBookList', newerBookList);


/ ** Functional Programming: Use the map Method to Extract Data from an Array
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

/ ** 
  *   
  */
  

