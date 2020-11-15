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

