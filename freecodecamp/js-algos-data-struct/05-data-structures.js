/**
 * Filename:    05-data-structures.js
 * 
 */
 
/** =============================================
 *  Basic Data Structures: Use an Array to Store a Collection of Data
 *  Create array (list) with 5 items including string, number, boolean.
 *  Boolean is lowercase: true, false
 */
 
let yourArray = ['hello', 3, true, 'world', false]; // Change this line

 
 
/** =============================================
 *  Basic Data Structures: Access an Array's Contents Using Bracket Notation
 *  
 */

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "change"
// Only change code above this line
console.log(myArray);


/** =============================================
 *  Basic Data Structures: Add Items to an Array with push() and unshift()
 *  .unshift() adds to beginning of array.
 *  .push() adds to end of array, like .append() in Python
 *  Notice that multiple items separated by commas can be added with both .unshift() and .push().
 *  So .push() is similar to Python list.extend() rather than list.append(), because it can add multiple items.
 *  
 */

function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


/** =============================================
 *  Basic Data Structures: Remove Items from an Array with pop() and shift()
 *  
 */

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


/** =============================================
 *  Basic Data Structures: Remove Items Using splice()
 *  
 */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(4, 4);
arr.shift();
// Only change code above this line
console.log(arr);



/** =============================================
 *  Basic Data Structures: Add Items Using splice()
 *  
 */

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


/** =============================================
 *  Basic Data Structures: Copy Array Items Using slice()
 *  
 */

function forecast(arr) {
  // Only change code below this line
  let newArrSlice = arr.slice(2, 4)
  return newArrSlice;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


/** =============================================
 *  Basic Data Structures: Copy an Array with the Spread Operator
 *  ES6 spread operation "..." copies all elements in array.
 */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));


/** =============================================
 *  Basic Data Structures: Combine Arrays with the Spread Operator
 *  
 */

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());


/** =============================================
 *  Basic Data Structures: Check For The Presence of an Element With indexOf()
 *  
 */

function quickCheck(arr, elem) {
  // Only change code below this line
  let result = arr.indexOf(elem)
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


/** =============================================
 *  Basic Data Structures: Iterate Through All an Array's Items Using For Loops
 *  
 */

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0; i<arr.length; i++) {
    let checkElem = arr[i];
    let resultCheck = checkElem.indexOf(elem);
    if (resultCheck == -1) {
      newArr.push(checkElem);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


