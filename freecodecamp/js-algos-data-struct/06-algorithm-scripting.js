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
 *  With function as input, simply call func().
 *  Two return statements: (1) inside for-loop, (2) after for-loop.  
 *  By default, if doesn't return from for-loop, return at the end.
 */

function findElement(arr, func) {
  
  // initialize variable to store number from array
  let num=0;

  for (let i = 0; i<arr.length; i++) {
    
    // assign number in array
    num = arr[i];

    // evaluate number against function, pass as 'true'
    if (func(num)) {
      return num;
    }
  }
  
  // nothing in array passed as 'true'
  return undefined;

}

findElement([1, 2, 3, 4], num => num % 2 === 0);



/** =============================================
 *  Basic Algorithm Scripting: Boo who
 *  Use the triple-equals "===" to match variable type
 */

function booWho(bool) {
  if (bool===true || bool===false) {
    return true;
  }
  else
    return false;
}

booWho(null);



/** =============================================
 *  Basic Algorithm Scripting: Title Case a Sentence
 */

function titleCase(str) {

  // convert str to lowercase
  let strLower = str.toLowerCase();
  
  // split strLower into array of words
  let arrLowerStr = strLower.split(' ');

  // loop through array, title case each word
  // first letter use .charAt(0).toUpperCase()
  // rest of word to end use .slice(1)
  for (let i=0; i<arrLowerStr.length; i++) {
    arrLowerStr[i] = arrLowerStr[i].charAt(0).toUpperCase() + arrLowerStr[i].slice(1); 
  }

  // join array to strResult
  let strResult = arrLowerStr.join(' ')
  
  return strResult;
}

titleCase("I'm a little tea pot");


/** =============================================
 *  Basic Algorithm Scripting: Slice and Splice
 *  Instead of using array.splice(), I used array.concat()
 */

function frankenSplice(arr1, arr2, n) {

  // use array.slice() to create beginning of array
  let arrBegin = arr2.slice(0, n);
  
  // use array.slice() to create end of array
  let arrEnd = arr2.slice(n);
  
  // use array.concat() to concat arrays
  let arrResult = arrBegin.concat(arr1).concat(arrEnd)
  
  return arrResult;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


/** =============================================
 *  Basic Algorithm Scripting: Falsy Bouncer
 *  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 */

function bouncer(arr) {

  // create empty array to store results
  let arrResult = [];

  // check Boolean() of elements in array using "!!"
  for (let i=0; i<arr.length; i++) {
    if (!!arr[i]) {
      arrResult.push(arr[i]);
    }
  }

  return arrResult;
}

bouncer([7, "ate", "", false, 9]);


/** =============================================
 *  Basic Algorithm Scripting: Where do I Belong
 *  use "array.sort()" to sort the array
 *  use arr.sort((a,b)=>a-b) to sort by number not string
 *  use arr[arr.length - 1] to retrieve last item in array
 *  when checking for empty array, check whether undefined or length 0
 */

function getIndexToIns(arr, num) {

  // sort the array, need sort function
  let arrSorted = arr.sort((a,b)=>a-b);

  // store array length, use in multiple places
  let lengthArraySorted = arrSorted.length;
  
  // initialize result as 0
  let result = 0;

  // branch if array is empty
  if (arrSorted === undefined || arrSorted.length == 0) {
    return result;
  }

  // branch if num at beginning 
  else if (num<=arrSorted[0]) {
    return result;
  }

  // branch if num after end
  else if (num>arrSorted[lengthArraySorted - 1]) {
    result = lengthArraySorted
    return result;
  }

  // loop through array figure out where it belongs
  else {
    console.log('BranchElse');
    for (let i=0; i<lengthArraySorted; i++) {
      if (num>=arrSorted[i] && num<=arrSorted[i+1]) {
        result = i+1;
        return result;
      }
    }
  }

}

getIndexToIns([], 1);


/** =============================================
 *  Basic Algorithm Scripting: Mutations
 *  "str.includes()" returns true/false if substring in str
 */

function mutation(arr) {

  // extract first str item, lowercase
  let strFirst = arr[0].toLowerCase();
  console.log(strFirst);

  // extract second str item, lowercase
  let strSecond = arr[1].toLowerCase();
  console.log(strSecond);

  // convert second str item into array of letters
  let arrSecond = strSecond.split('');
  console.log(arrSecond);

  // loop through array of letters from second str
  for (let i=0; i<arrSecond.length; i++) {
    let boolFoundLetter = strFirst.includes(arrSecond[i]);
    console.log(boolFoundLetter);

    // if letter from second str missing from first str,
    // return false
    if (boolFoundLetter==false) {
      return false;
    }

  }

  // else return true
  return true
}

mutation(["hello", "hey"]);


/** =============================================
 *  Basic Algorithm Scripting: Chunky Monkey
 */

function chunkArrayInGroups(arr, size) {

  
  // slice array into first chunk
  let arrFirstChunk = arr.slice(0, size);
  console.log(arrFirstChunk);

  // slice array into second chunk
  let arrSecondChunk = arr.slice(size, sizeTwice);
  console.log(arrSecondChunk);

  // result is two-dimensional array of chunks
  let arrResult = [arrFirstChunk, arrSecondChunk];
  console.log(arrResult);

  // slice array into leftover chunk, if exists
  if (arr.length>sizeTwice) {
    let arrLeftover = arr.slice(sizeTwice);
    console.log(arrLeftover);

    // add leftover to end of result
    arrResult.push(arrLeftover)
    console.log(arrResult);
  }

  return arrResult;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);




/** =============================================
 *  
 */


/** =============================================
 *  
 */


/** =============================================
 *  
 */

