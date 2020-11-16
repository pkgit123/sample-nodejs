/**
 * Filename:    06-algorithm-scripting.js
 * 
 * Introduction to Basic Algorithm Scripting
 * A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. 
 * To write an algorithm, you must first understand a problem, and then solve it with coding.
 */


/** =============================================
 *  Basic Algorithm Scripting: Convert Celsius to Fahrenheit
 *  
 */
 
function convertToF(celsius) {
  let fahrenheit = ((celsius * (9/5)) + 32);
  return fahrenheit;
}

convertToF(30);

console.log(convertToF(30));
 
 
/** =============================================
 *  Basic Algorithm Scripting: Reverse a String
 */

function reverseString(str) {
  // convert string to array using [...str]
  // alternate code str.split('')
  let arrStr = [...str];
  console.log(arrStr);
  
  // reverse array using array.reverse()
  let arrRevStr = arrStr.reverse();
  console.log(arrRevStr);

  // convert array to string with array.join('')
  let strRev = arrRevStr.join('');
  console.log(strRev);

  return strRev;
}

reverseString("hello");


/** =============================================
 *  Basic Algorithm Scripting: Factorialize a Number
 */

function factorialize(num) {
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }
return result;
}

factorialize(5);


/** =============================================
 *  Basic Algorithm Scripting: Find the Longest Word in a String
 */

function findLongestWordLength(str) {
  // convert string to array of words
  let arrWords = str.split(' ');
  
  // console.log(arrWords);
  // console.log(arrWords.length);

  // initialize max length variable
  let max_length = 0;

  // check all words in array
  for (let i = 0; i<arrWords.length; i++) {
    let word_length = arrWords[i].length;
    
    // if longer, then replace the max_length value
    if (word_length > max_length) {
      max_length = word_length;
    }
  }
  return max_length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");



/** =============================================
 *  Basic Algorithm Scripting: Return Largest Numbers in Arrays
 */

function largestOfFour(arr) {

  // initialize result array
  let arrResult = [];

  // loop through each sub-array
  for (let i=0; i<arr.length; i++) {
    
    // find largest value in subarray, use spread operator ("...")
    let maxValSubArray = Math.max(...arr[i]);
    
    // store largest value in result array
    arrResult.push(maxValSubArray);
  }

  return arrResult;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



/** =============================================
 *  Basic Algorithm Scripting: Confirm the Ending
 */

function confirmEnding(str, target) {
  
  // measure length of target string
  let lenTarget = target.length;
  
  // check end of str using negative indexing on str.slice()
  let strSuffix = str.slice(-lenTarget);
  
  // compare suffix with target
  let result = (target == strSuffix);
  
  return result;
}

confirmEnding("Bastian", "n");


/** =============================================
 *  Basic Algorithm Scripting: Repeat a String Repeat a String
 */

function repeatStringNumTimes(str, num) {
  // initialize result as empty string
  let result = ''

  // if num argument greater than zero, repeat 
  if (num>0) {
    for (let i=0; i<num; i++) {
      result += str
    }
  }
  
  return result;
}

repeatStringNumTimes("abc", 3);


/** =============================================
 *  Basic Algorithm Scripting: Truncate a String
 */

function truncateString(str, num) {

  if (str.length > num) {
    let result = str.slice(0, num) + "...";
    
    return result;
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



/** =============================================
 *  Basic Algorithm Scripting: Finders Keepers
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */

