# `render`

`render` is one method that we have already encountered. `render` is part of the lifecycle methods of React, which we'll see more on later.

The `render()` method is the only required method in a class component.

When called, it should examine `this.props` and `this.state` and return one of the following types:

- React elements. Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
- Arrays and fragments. Let you return multiple elements from render.
- Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
- String and numbers. These are rendered as text nodes in the DOM.
- Booleans or null. Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)

```jsx harmony
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <ToDoInput value="Hola" className="todo-input" />
      </div>
    );
  }
}
```

The `render` function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
This means that no call to `this.setState` should me made in this method, as this would:
1) Break with the pattern of the method being pure.
2) Could trigger an infinite loop of the component trying to render.

## References

- https://reactjs.org/docs/react-component.html#render
