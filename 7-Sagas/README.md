# Redux Sagas

**redux-saga** is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects.

## Sagas vs Thunks

- Thunks can never act in response to an action.
- Easier to test.
- Allows you to keep your action creators clean.

## Example

sagas.js

```js
import { call, put, takeEvery } from "redux-saga/effects";
import Api from "...";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
```

store.js

```js
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
```
