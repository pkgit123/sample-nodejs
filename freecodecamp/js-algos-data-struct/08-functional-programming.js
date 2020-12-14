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
  

