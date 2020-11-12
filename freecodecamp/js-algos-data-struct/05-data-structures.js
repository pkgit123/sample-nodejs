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
 *  Basic Data Structures: Create complex multi-dimensional arrays
 *  
 */

let myNestedArray = [
  // Only change code below this line
  ['second', 
    ['third', 'deep', 
      ['fourth', 'deeper', 
        ['fifth', 'deepest'
      ]
    ]
  ]],
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];


/** =============================================
 *  Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
 *  key-value
 *  property-data
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// Only change code above this line

console.log(foods);

/** =============================================
 *  Basic Data Structures: Modify an Object Nested Within an Object
 *  
 */

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);


/** =============================================
 *  Basic Data Structures: Access Property Names with Bracket Notation
 *  
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));


/** =============================================
 *  Basic Data Structures: Use the delete Keyword to Remove Object Properties
 *  
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods['oranges'];
delete foods['plums'];
delete foods['strawberries'];

// Only change code above this line

console.log(foods);


/** =============================================
 *  Basic Data Structures: Check if an Object has a Property
 *  'Alan' in users;
 *  users.hasOwnProperty('Alan');
 *  The .hasOwnProperty() method can check multiple values.
 *  The && is boolean check.
 *  The & converts the value to number but use is discouraged in JS.
 */

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  let checkAlan = obj.hasOwnProperty('Alan');
  let checkJeff = obj.hasOwnProperty('Jeff');
  let checkSarah = obj.hasOwnProperty('Sarah');
  let checkRyan = obj.hasOwnProperty('Ryan');
  return checkAlan && checkJeff && checkSarah && checkRyan;
  // Only change code above this line
}

console.log(isEveryoneHere(users));



/** =============================================
 *  Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
 *  Tricky because the key must be accessed using the [bracket], but the nested key must be accessed using the dot "." 
 */

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      result +=1;
    }
  }
  return result;
  // Only change code above this line
}



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


