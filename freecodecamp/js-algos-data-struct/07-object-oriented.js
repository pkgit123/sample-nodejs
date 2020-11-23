/**
 * Filename:    07-object-oriented.js
 * 
 * Introduction to the Object Oriented Programming Challenges
 * As its name implies, object oriented programming organizes code into object definitions. 
 * These are sometimes called classes, and they group together data with related behavior. 
 * The data is an object's attributes, and the behavior (or functions) are methods.
 */
 
/** =============================================
 *  Object Oriented Programming: Create a Basic JavaScript Object
 *  
 */

let dog = {
    'name': 'Rover',
    'numLegs': 4
};

/** =============================================
 *  Object Oriented Programming: Use Dot Notation to Access the Properties of an Object
 *  
 */

let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);

/** =============================================
 *  Object Oriented Programming: Create a Method on an Object
 *  
 *  Object method has key and function() {return "statement here";}
 */

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}

};

dog.sayLegs();


/** =============================================
 *  Object Oriented Programming: Make Code More Reusable with the this Keyword
 *  
 *  In the current context, 'this' refers to the object that the method is associated with.
 */

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();


/** =============================================
 *  Object Oriented Programming: Define a Constructor Function
 *  
 *  Constructors are functions that create new objects. 
 *  They define properties and behaviors that will belong to the new object. 
 *  Think of them as a blueprint for the creation of new objects.
 */

// constructor function for Dog
function Dog() {
    this.name = 'Rover';
    this.color = 'brown';
    this.numLegs = 4;
}

/** =============================================
 *  Object Oriented Programming: Use a Constructor to Create Objects
 *  
 */

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

/** =============================================
 *  Object Oriented Programming: Extend Constructors to Receive Arguments
 *  
 */

function Dog(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog('Bobby', 'white');

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


/** =============================================
 *  
 *  
 */


/** =============================================
 *  
 *  
 */


