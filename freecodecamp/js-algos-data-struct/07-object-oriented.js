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
 *  Instantiating a new object will create a ".constructor" property
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
 *  Possible to overwrite the object's .prototype 
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
 *  When overwriting the .prototype, remember to set the .constructor property
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
 *  .prototype.isPrototypeOf()
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));

/** =============================================
 *  Object Oriented Programming: Understand the Prototype Chain
 *  Object.prototype.isPrototypeOf()
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
 *  Create a new object .prototype
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
 *  Object.create(.prototype)
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
 *  Object Oriented Programming: Set the Child's Prototype to an Instance of the Parent
 *  Remember that the prototype is like the "recipe" for creating an object. 
 *  In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
 *  Dog.prototype = Object.create(Animal.prototype);
 */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();


/** =============================================
 *  Object Oriented Programming: Reset an Inherited Constructor Property
 *  you can manually set Bird's constructor property to the Bird object:
 */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();



/** =============================================
 *  Object Oriented Programming: Add Methods After Inheritance
 *  Step 1: Inherit with Object.create()
 *  Step 2: Update constructor
 *  Step 3: Add method
 *  Bird.prototype.fly = function() {};
 */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

// Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype);

// update Dog constructor
Dog.prototype.constructor = Dog;

// add method to Dog
Dog.prototype.bark = function() {
    console.log('Woof!');
};

// Only change code above this line

let beagle = new Dog();



/** =============================================
 *  Object Oriented Programming: Override Inherited Methods
 *  ChildObject.prototype = Object.create(ParentObject.prototype);
 *  ChildObject.prototype.methodName = function() {...};
 *  
 */

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

// Penguin.fly() overrides Bird.fly()
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


/** =============================================
 *  Object Oriented Programming: Use a Mixin to Add Common Behavior Between Unrelated Objects
 *  "mixin" adds function to object, without using inheritance
 */

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('Gliding, nice job!');
  }
};

glideMixin(bird);
glideMixin(boat);



/** =============================================
 *  Object Oriented Programming: Use Closure to Protect Properties Within an Object from Being Modified Externally
 *  
 */

function Bird() {
  let weight = 15; // private variable

  this.getWeight = function() {
    return weight;
  }
}

let ducky = new Bird();
ducky.getWeight();

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



