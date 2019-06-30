# Async and React

When you start asking about AJAX and React, the first thing the experts will tell you is that React is a view library and React has no networking/AJAX features.

It's good to know, but not very helpful when you just want to get data from the server into your React components.

The truth is, there are a ton of ways to do it. You probably have thought of a couple ways yourself, but if you choose the wrong way, your code could get messy.

## All-in-One Components

![Root Components](https://www.javascriptstuff.com/static/root-component-1fa553fabd4565dc7b609e96b03600b9-15c43.png)

This is the usual strategy for how to do components that make asynchronous calls. We have an asynchronous action that we are going to call after a specific event, action or lifecycle method is called.
After the call is successful we use the result of the async call and update our state and display the results to the user.


```javascript
class CommentList extends React.Component {
  this.state = { comments: [] };

  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    );
  }
}
```

This component is responsible for both fetching data and presenting it. This is fine, but it doesn't take full advantage of the composable nature of React. At this point this component cannot be reutilized in another place to fetch data and display a different view, or to just display the same with with different data.

## Container Components

Your markup components should state expectations of the data they require. PropTypes are great for this.

Our component is opinionated about data structure but has no way of expressing those opinions. This component will break silently if the json endpoint change.

We find that we can do a division on this component into two principles:

- Data fetching and how the data structure looks.
- How the information is presented to the user.

Using this we can have a clear divide, using what are called __Container Components__ and __Presentational Components__.

### Container Components

![Container Component](https://www.javascriptstuff.com/static/container-components-c6a751e5d87e77850812d8ed915f1755-7dd21.png)

A container component _"provides the data and behavior to presentational or other container components."_

Container Components:

Are concerned with how things work.
- May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
- Provide the data and behavior to presentational or other container components.
- Call Flux actions and provide these as callbacks to the presentational components.
- Are often stateful, as they tend to serve as data sources.
- Are usually generated using higher order components such as `connect()` from React Redux, `createContainer()` from Relay, or `Container.create()` from Flux Utils, rather than written by hand.

Using the previous example as a guide, here's how our Container component would look like:

```javascript
class CommentListContainer extends React.Component {
  state = { comments: [] };
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
```

### Presentational Components

Presentational components are concerned about how data is displayed to the user.

They:

- Are concerned with how things look.
- May contain both presentational and container components inside, and usually have some DOM markup and styles of their own.
- Often allow containment via `this.props.children`.
- Have no dependencies on the rest of the app, such as Flux actions or stores.
- Don’t specify how the data is loaded or mutated.
- Receive data and callbacks exclusively via props.
- Rarely have their own state (when they do, it’s UI state rather than data).
- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

The presentational component for our previous example would be:

```javascript
const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>
```
