# Functions in JavaScript

## Functions as "first-class objects"

In JavaScript functions are treated as **first-class objects**. What this means is that functions can be assigned as a value to a variable, passed as argument to other functions and can be returned by another function.

## Functions as variables

```javascript
var screamItOut = function (text) {
    return text.toUpperCase() + '!';
}
screamItOut("hey you") // Result: "HEY YOU!"
```

In this example a number of things are happening:

1. We are using creating a **function expression**, which is similar to a **function declaration** but without giving a name to the function.
2. We are assigning the **function expression** to the `screamItOut` variable. Since JavaScript treats functions like any other value, we can save this function to the variable.

## Functions as parameters - "Callbacks"

We can also pass functions as parameters:

```javascript
function goGetData(onDone) {
    const calculation = (10 + 40) / 10;
    return onDone(calculation);
}
var getResult = function (result) {
    return "Done! Result: " + result;
}
// Passing "done" function as a parameter
goGetData(getResult); // Result: "Done! Result: 5
```

We passed the `getResult` variable as a function parameter and executing this function inside the `goGetData` function. `goGetData` passes the `calculation` into the function parameter and return of the result of the `onDone` function passed to it.
This kind of pattern is specially useful when doing **asyncronous operations** in which we can execute the function when the async action or when we do **event handling**.

#### Functions as `return` values - "Currying"

Since functions can be used like any other value in JavaScript that leaves the posibility to `return` function as a result of another functions execution.

```javascript
function add(a) {
    // We are returning an anonymous function here.
    return function (b) {
        return a + b;
    }
}
var add2 = add(2);

console.log(add2(2)); // Result: 4
console.log(add2(10)); // Result: 12
```

Here we are returning a new function from inside the `add` function, that takes `b` as a second parameter.
This returned function can then later be called which will return the result of the sum of the parameter of the `add` function and the parameter passed on to the "returned" function.

You may be wondering how the returned function has access to the `a` variable when it's time to return the sum.
This is due to how **scope** works in JavaScript, and what we're about to see next!

## Function scope

In the last example we worked with an example of a function returning a function. We noticed that even though the execution of the `add` function has finished, the returned function still has access to the `a` parameter.

This is due to how **scope** is managed in JavaScript. So what is **scope**?

**Scope** is the accessibility of variables, functions, and objects in some particular part of your code during execution. In other words, scope determines the visibility of variables and other resources in areas of your code.

The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

Other programming languages like C#, Java and Python, have **block scope**. This means that all accesiblity and visiblity is contained inside a block.
In contrast to that JavaScript has **function scope**, in which a function has access to all variables and functions defined in itself, in it's parent function and any other variable to which the parent function has access.

It is sometimes thought of that functions create their own **scope bubbles** in which they have access to their own scope and their containers, but the function in which they reside in does not have access to the inner functions scope.

Let's see an example that shows this:

```javascript
function test() {
    var insideTest = "test";
    function one() {
        var insideOne = 1;
        console.log("Inside one: " + insideOne); // Result: 1
        console.log("Inside one: " + insideTest); // Result: "test"
    }
    one();
    console.log("inside test: " + insideTest); // Result: "test"
    console.log("inside test: " + insideOne); // Result: Error: insideOne is not defined
}
```

We can see that `one` function has access to both `insideTest` and `insideOne` variables, `test` only has access to `insideTest` and gives an error when we try to access `insideOne`.
This is due to the **scope bubble** we talked about forming around the `one` function.

When we nest function inside one another like we did in the previous example we form what is called a **closure**. Closures are a really powerful concept in JavaScript, here's some [more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Nested_functions_and_closures) if you want to learn more about them.
For now you can think of closure as a way to "remember" and continue to access a function's scope (it's variables) even once the function has finished running.
