import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Action
const increaseAction = { type: 'increase' }
const initialState = {
  count: 0,
  thisThing: "that"
}
// Reducer
function counter(state = initialState, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
	  console.log(state);
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const Ap = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

ReactDOM.render(
  <Provider store={store}>
    <Ap />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
