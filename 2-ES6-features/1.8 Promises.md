# Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

![Promises Process](https://mdn.mozillademos.org/files/15911/promises.png)

A `promise` is a proxy for a value not necessarily known when the promise is created. 

It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation completed successfully.
- `rejected`: meaning that the operation failed.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

A promise comes with some guarantees:

- Callbacks will never be called before the completion of the current run of the JavaScript event loop.
- Callbacks added with `then()` even after the success or failure of the asynchronous operation, will be called, as above.
- Multiple callbacks may be added by calling `then()` several times. Each callback is executed one after another, in the order in which they were inserted.

## `.then()`

.`then` is a method of a promise which takes two arguments, a callback function if the promised is `fullfilled` and a second callback function if the promise is `rejected` (though this last case is a lot less used now and should be substituted with `.catch()`).

`.then` method returns a `Promise` in the `pending` status.

 If the `promise` resolves successfully it will pass in the promises `resolve` value to the callback passed in to the `.then` method.
 In return it will `fullfill` the promise it returned with the value of the callback as the promises `resolve` value.

This property is what allows **chaining** to be done on promises.

If there's an error and the promise is `rejected ` it throws an error, the promise returned by then gets rejected with the thrown error as its value.
If there's an callback passed on to the promises `.catch` method, it will execute that callback as it's callback value.

## `.catch()`

The `catch()` method also returns a `Promise` and deals with rejected cases only. It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.


## Chaining

A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a `promise chain`.

```javascript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

Basically, each promise represents the completion of another asynchronous step in the chain.

## Error Propagation

The `catch` method can be useful for error handling in your promise composition. Because `.catch` returns a promise we can also use this for chaining and to be able to add a single `.catch` method callback to a chain of promises.

```javascript
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);
```

Basically, a promise chain stops if there's an exception, looking down the chain for catch handlers instead. This is very much modeled after how synchronous code works:

```javascript
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch(error) {
  failureCallback(error);
}
```

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
