import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "./Data/InitialState";
import rootReducer from './Reducers'

// Reducer
function counter(state = {count: 0}, action) {
  const count = state.count;
  switch (action.type) {
    case "increase":
      return { count: count + 1 };
    default:
      return state;
  }
}

// Reducer
function decounter(state = initialState, action) {
  const decount = state.decount;
  switch (action.type) {
    case "decrease":
      return { decount: decount + 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
