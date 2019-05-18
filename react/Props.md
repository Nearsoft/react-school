# Props

Props are the way that React component receive outside data. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.

```jsx harmony
import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        <Greeting greeting={greeting} />
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return <h1>{this.props.greeting}</h1>;
  }
}

export default App;
```

Props are passed in the same way for all components, through a HTML-like tag attributes.

```jsx harmony
<Element reactProp= "1" />

class Element extends Component {
  render() {
    return <h1>{this.props.reactProp}</h1>;
  }
}
```

We can also pass in props without using JSX, using the second parameter of `React.CreateElement` function.

```jsx harmony
// Using React.CreateElement
React.createElement(Hello, { alertNumber : 1 }, null);

// Using JSX
<Hello alertNumber = "1" />
```

## Accessing Props

Props can be accessed in two ways, depending on the type of component we are using.

For _Class Components_ `props` is attached to the `this` context. We can use `this.props` to read props.

```jsx harmony
class Element extends Component {
  render() {
    return <h1>{this.props.reactProp}</h1>;
  }
}
``` 

For _Function Components_ `props` is passed in as the first parameter of the function component.

```jsx harmony
function Element(props) {
  return <h1>{props.reactProp}</h1>;
}
```

## Passing functions using `props`

For the previous examples we have only passed in primitive values into components, but one common pattern in react is passing in functions as props.

You may remember that data binding is one-way in React, which means that data only flows from parents to children.
So how can we let know our parent component that something has changed? We can use a function `prop` to do this.
Let's view an example of how we can do this:

Let’s use a simple example, say an app that allows you to create a list of tasks. In this app, the list of tasks is contained in the App component, which is the parent component. The Todo component will be the child in this scenario, and its sole job will be to list each task that gets created.

```jsx harmony

let todoCounter = 1;

class App extends React.Component {
  state = {
    list: [],
    item: ""
  };

  handleInputChange = event => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const item = {
      id: todoCounter++,
      value: this.state.item.slice()
    };
    this.setState({
      list: this.state.list.concat(item),
      item: ""
    });
  };

  handleRemove = id => {
    this.setState({
      list: this.state.list.filter(c => c.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h2>Add Todo</h2>
        <div>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>
        <div>
          <h3>Lists</h3>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <Todo {...item} removeTodo={this.handleRemove} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
```

So here we have to create a `<Todo />` Component that utilizes this `removeTodo` function prop to remove an item.

What we do is to the "X" button `onClick` event, we fire a callback that in turn executes the `removeTodo` prop, passing it the Todo's `id` prop.

```jsx harmony
class Todo extends React.Component {
  deleteTodo = id => {
    this.props.removeTodo(id);
  };
  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={() => this.deleteTodo(this.props.id)}>X</button>
      </div>
    );
  }
}
```

In this example we can see that we have created a way for letting the parent component when a Todo has been deleted without having to pass data directly up.

## References

- https://css-tricks.com/props-and-proptypes-in-react/
