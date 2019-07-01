# Javascript Fundamentals

## History

Created by Brendan Eich appeared in 1995, its main purpose was to handle input validation.(Livescript).

Javascript is derived from the standarized ECMAscript specifications.

## What kind of language is it?

- Loosely typed
- First Class Objects
- Prototypal Inheritance
- Object Oriented Programming
- Functional Programming

**Primitives**

Get assigned by value

```js
var foo = ‘foo’;
var money = 3434;
var catMoney = money;
```

**Objects**

Get assigned by reference

Picked up by garbage collector after variabl e ref is gone.

```js
var foo = ‘foo’;
var money = 3434;
var catMoney = money;
```

**Functions**

Functions are the bread and butter of JavasScript programming. The concept of wrapping a piece of program in a value has many uses. It is a tool to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other

- Reusable
- Composition
- Encapsulation

**Callbacks**

Callbacks are Function that gets passed as an argument to another functions, which can then be executed at any point in time.

We usually used them after an asynchronous operation has completed

```js
var phrase = function() {
  return "knows nothing";
};

var johnyboy = {
  quote1: function() {
    return "you are my only queen";
  },
  quote2: function() {
    return "i don't want to be king";
  }
};

var quoteList = [
  phrase,
  [johnyboy.quote1, johnyboy.quote2],
  phrase(),
  whoKnowsNothing("john", phrase)
];

function whoKnowsNothing(name, cb) {
  return name + " " + cb();
}
```

**_Event loop_**

Event Loop
 JavaScript is event driven. This means that instead of waiting for a response, JavaScript will keep executing while listening for other events.

Events that are added to the event loop.

**Hoisting**
Hoisting can sometimes be misunderstood as something that magically happens, where function and variable declarations are moved to the top of the parent scope.

_“What’s actually happening is that your function and variable declarations are added to memory during the compile phase.”_

```js
var buqui = "Mateo";
console.log(buqui); // Mateo

function buqui(n) {
  return n;
}
buqui("Mateo"); //Mateo
```

```js
buqui = "Mateo";
console.log(buqui); // Mateo
var buqui;

buqui("Mateo"); //Mateo
function buqui(n) {
  return n;
}
```

```js
console.log(buqui); //undefined
var buqui = "Mateo";
```

```js
function fixedGOTNames() {
  console.log("Name is: ", dragon());
  console.log("Name is: ", other);

  var other = "Sam";
  var other3 = "Khaleesi";
  console.log("Name is: ", other3);
  function dragon() {
    return "Drogon";
  }
}
```

**_This_**

- refers to global object
- refers to new instance
- refers to invoker Object
- using call, apply, bind

**_Scope_**

**In Javascript, Functions are responsible for creating SCOPE**

Scoping is determining where variables, functions, and objects are accessible in your code during runtime.

One of the most fundamental paradigms of nearly all programming languages is the ability to store values in variables, and later retrieve or modify those values. In fact, the ability to store values and pull values out of variables is what gives a program state.

Scope Chain

```js
var a = 100; // <=== Global Scope

function foo() {
  // <=== Local Scope, access to global

  var b = 50;

  return a + b;
}

foo();
```

```js
var a = 100; // <=== Global Scope

function foo() {
  // <=== Local Scope, access to global

  var b = 50;

  function baz() {
    // <=== Local Scope, access to Fn Scope and Global

    var c = 10;

    return a + b;
  }

  var d = 1000;

  baz();
}

foo();
```

**Variable Shadowing**

We can shadow another variable up in the scope chain, by declaring it in our local scope

```js
var a = 100; // <=== Global Scope

function foo() {
  // <=== Local Scope, access to global

  var b = 50;

  function baz() {
    // <=== Local Scope, access to Fn Scope and Global

    var c = 10;
    var b = 9000;

    return a + b;
  }

  var d = 1000;

  baz();
}

foo();
```

**_Closure_**

A closure is the combination of a function and the lexical environment within which that function was declared.

A closure will **remember** the environment in which it was created and it can access outer(enclosing) function variables, this also includes the outer function arguments.

Example
Lets create a function that will sustains a value of a number through its whole lifecycle.

Will create a sum function

Sum will return another function, with the retained number you passed in before

The result is a reusable function with a prefixed value of 3

```js
function sum(a) {
  return function(b) {
    return a + b;
  };
}

var addThree = sum(3);

var result1 = addThree(10);
var result2 = addThree(100);
var result3 = addThree(1000);
var result5 = addThree(10000);
```

Using previous example, modify it to use a callback, as a second argument

```js
function sum(a) {
  return function(b, callback) {
    // execute cb, using a and b as params
  };
}

var addThree = sum(3, function(a, b) {
  //callback logic goes here
});
```

**Prototype**

This is how Javascript does inheritance. Objects inherit features from one another

```js
give this example:

var Car = {
  type: 'generic',
  wheels: 4,
  stop: function() {
    console.log('Stop this ' + this.type + ' car');
  },
  go: function() {
    console.log('Go go go! ' + this.type);
  }
}

var tsuru = Object.create(Car);
```
