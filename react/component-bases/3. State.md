# State

We have seen how we can change a view using a components `props`, but sometimes we need to react to data that _doesn't_ come from a parent component.
This is a case where **`state`** comes in.

So, what's different between `props` and `state`? 

`props` get passed to the component (similar to function parameters) whereas `state` is managed within the component (similar to variables declared within a function).


The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.

A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

Let's start with a basic example, a clock:

```jsx harmony
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
}
```

There are various things going on here. 

First, we are using the constructor to set the initial value of state. **This is the only place where we can set state assigning it to a value in a component**.
We'll see later on how to change it correctly.

On the `this.state` object we are setting a `date` property and we are initializing a value.

**Note: Only Class Components can have state, function component cannot.** (That's why a lot of times they are referred to as _stateless_ components)

Second, in the `render` method we are reading the `date` property on `this.state`, formatting and displaying it. If we run this code we see that it runs once but it doesn't update, let's do that next.

## `this.setState` 

We are going to add some [lifecycle methods](./Lifecycle-Methods.md) to our component to create a timer and be able to update our state.
This will be done in our `componentWillMount` method. We'll also add a `componentWillUmount` method to clear the timer when the component is removed.

```jsx harmony
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    
    componentDidMount() {
    
    }
    
    componentWillUnmount() {
    
    }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
    }
}
```

In the `componentDidMount` method we'll add a interval that fires a **`this.setState`** call that updates the state with the new time.

```jsx harmony
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
          date: new Date()
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

But what is this `this.setState` call and why can't we just update the `this.state.date` property directly?

> In React, both `this.props` and `this.state` represent the rendered values, i.e. what’s currently on the screen.

What we can interpret from this statement is that `this.state` might not be the actual value for the component, just the one at the moment of the lifecycle.
This is why we need to use `this.setState`.
Calls to `setState` are asynchronous - don’t rely on `this.state` to reflect the new value immediately after calling `setState`.

Think of `setState()` as a request rather than an immediate command to update the component.
For better perceived performance, React may delay it, and then update several components in a single pass.
React does not guarantee that the state changes are applied immediately.

They're two call signatures for `setState`.

First one takes an update object to shallow merge with state and to reflect the new value in `this.state` after a re-render.

```jsx harmony
constructor() {
  this.state = { hasSetState: false, user: 'me' }
}
/// ....
this.setState({
  hasSetState: true,
})
/// ....
/// New state is set applying a shallow merge with state....
// this.state === {  { hasSetState: true, user: 'me' }
```
 
Second method signature is the first argument as an `updater` function. The `updater` function has the following signature:

```jsx harmony
(prevState, props) => stateChange
```

`prevState` is a reference to the component state at the time the change is being applied.
**It should not be directly mutated.**
Instead, changes should be represented by building a new object based on the input from state and props.

For instance, suppose we wanted to increment a value in state by props.step:

```jsx harmony
this.setState((prevState, props) => {
  return {counter: prevState.counter + props.step};
});
```

There is a second parameter to `setState`, which is an optional callback function that will be executed once setState is completed and the component is re-rendered.

## References

- https://reactjs.org/docs/faq-state.html
- https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
- https://reactjs.org/docs/react-component.html#setstate
