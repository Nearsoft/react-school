# Functions

Functions are a set of statements that perform a task or calculate a value, which can be named and reused.
Let's take a look at a `function declaration` example.

```javascript
function addTwoNumbers(x, y) {
    return x + y;
}
```

Let's look at each part individually:

- `function` is the **keyword** that starts declaring a function.
- `addTwoNumbers` is the function's **name**, which name can be anything that follows the variable name conventions. A functions name is optional.
- `(x, y)` are the function **parameters**, which are variables names for the inputs a function takes when it's **called**.
- `return` is the `keyword` that exits a function and that can share an optional value to where the function was **called**.

In this case the function `returns` the result of the sum of `x` and `y`.

## Calling functions

Once a function is defined, you can use it by referencing its name with parentheses `()` right after.

```javascript
function sayHi() {
    return "Hello World!";
}
sayHi(); // Result: "Hello World!";
```

Functions can be called or **invoked** at any part of our program and we can even invoke functions inside functions!

```javascript
function sayHello() {
    console.log("Hello!");
}

function sayHelloWorld() {
    sayHello();
    console.log("World!");
}
sayHelloWorld(); // Result: "Hello! World!";
```

Running this block of code should print out "Hello! World!" to the console.

## Function `return` value

Functions can be used not only to do some task, but they can **return** a result.
This value can be used the same way as any other expresion value.

```javascript
function giveMeFive() {
    return 5;
}
var ten = giveMeFive() + 5;
console.log(ten); // Result: 10
```

JavaScript functions always return a value, be it explicitly or implicitly. If a `return` value is not specified the function retuns `undefined`.

## Function parameters

In the previous examples the functions we are declaring did not have any **parameters**. Parameters are not necesary for functions to be declared or called, but are useful for passing data into function.

Function parameters are declared inside the function declaration parentheses `()` and separated by commas.

```javascript
function square(number) {
    return number * number;
}
```

In this example the `square` function takes one parameter, called `number`, and **returns** the result of multipling the `number` parameter by itself.

```javascript
var result = square(5);
console.log(result); // Result: 25
```

We **call** the function by using referencing the name with parenteses right after, providing the **parameter value** inside them.

A function can take multiple parameters, separating each parameter value with commas.

```javascript
function sum(a, b) {
    return a + b;
}
var result = sum(2, 3);
console.log(result); // Result: 5
```
