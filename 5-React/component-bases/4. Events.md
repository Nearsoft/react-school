# Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

```jsx harmony
function ActionLink() {
  function activateLasers(e) {
    e.preventDefault();
    console.log('The laser was activated.');
  }

  return (
    <button onClick={activateLasers}>
      Activate Lasers
    </button>
  );
}
```

We can see that we have an `e` event. Here, `e` is a synthetic event.
React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility.

## Context Binding

When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. 

For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

```jsx harmony
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

When we execute this code if you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be `undefined` when the function is actually called.

**This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without `()` after it, such as `onClick={this.handleClick}`, you should bind that method.**

You can get around doing this manual binding by using [public class field syntax](https://babeljs.io/docs/plugins/transform-class-properties/) to correctly bind callbacks, though it should be noted that this is experimental syntax.

```jsx harmony
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is no longer necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

## Passing Arguments to Event Handlers

Inside a loop it is common to want to pass an extra parameter to an event handler.
For example, if `id` is the row ID, either of the following would work:

```jsx harmony
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

n both cases, the `e` argument representing the React event will be passed as a second argument after the ID.
With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

## References

- https://reactjs.org/docs/handling-events.html
