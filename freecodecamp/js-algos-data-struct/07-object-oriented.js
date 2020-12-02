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
 *  Object Oriented Programming: Verify an Object's Constructor with instanceof
 *  The `instanceof` syntax results in True/False
 */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(2);

console.log(myHouse instanceof House);

/** =============================================
 *  Object Oriented Programming: Understand Own Properties
 *  interesting that for-loop of array returns each property.
 *  The .hasOwnProperty() method returns True/False if object has property.
 */

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

/** =============================================
 *  Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code
 *  An object's .prototype.property will add the property to object
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");


/** =============================================
 *  Object Oriented Programming: Iterate Over All Properties
 *  `own` properties vs. `prototype` properties
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  }
  else {
    prototypeProps.push(property);
  }
}

/** =============================================
 *  Object Oriented Programming: Understand the Constructor Property
 *  
 */

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor == Dog) {
    return true;
  } else {
    return false;
  }
}


/** =============================================
 *  Object Oriented Programming: Change the Prototype to a New Object
 *  Javascript object has key-value format, where key is method and value is function()
 */
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log('bite bite bite');
  },
  describe: function() {
    console.log('My name is ' + this.name);
  }

};



/** =============================================
 *  Object Oriented Programming: Remember to Set the Constructor Property when Changing the Prototype
 *  
 */

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


/** =============================================
 *  Object Oriented Programming: Understand Where an Object’s Prototype Comes From
 *  
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));

/** =============================================
 *  Object Oriented Programming: Understand the Prototype Chain
 *  
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


/** =============================================
 *  Object Oriented Programming: Use Inheritance So You Don't Repeat Yourself
 *  
 */

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


/** =============================================
 *  Object Oriented Programming: Inherit Behaviors from a Supertype
 *  
 */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line


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


