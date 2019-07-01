# React for First Times

React is a JavaScript library for building user interfaces
![Declarative](images/1.png "Declarative")

## Start up

It hooks into an html element, this element will be the root of the application

_index.js_

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

_index.html_

```html
<html>
  <body id="root">
    <!-- Our React app will live here -->
  </body>
</html>
```
