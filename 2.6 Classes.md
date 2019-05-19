# Classes

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

Here we can see how to use a JavaScript Class:

```javascript
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();
```

The class User {...} here actually does two things:

- Declares a variable User that references the function named "constructor".
- Puts methods listed in the definition into User.prototype. Here, it includes sayHi and the constructor.

This is syntax sugar over a prototype-based class. Here's how the same class would look using a prototype-based approach.

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  alert(this.name);
}

let user = new User("John");
user.sayHi();
```

## Constructor Method

The constructor method is a special method for creating and initializing an object created within a class.

There can be only one special method with the name `constructor` in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.
A constructor can use the `super` keyword to call the constructor of a parent class. If you do not specify a constructor method, a default constructor is used.

## Static Methods

The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance.

````javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
````

## Subclasses and `extends`

The extends keyword is used in class declarations or class expressions to create a class as a child of another class.

```javascript
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Doggo');
d.speak(); // Doggo barks.
```

This is also syntax sugar over extending another function-based "class" prototype.

```javascript
function Animal (name) {
  this.name = name
}

Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Passing the Animals prototype as the prototype of `Dog`
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Doggo');
d.speak(); // Doggo makes a noise.
```

References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
