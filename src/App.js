import React, { Component } from "react";
import Split from "./Layout/Split";
import StatBlock from "./Components/StatBlock";
import Templates from "./Components/Templates";
import initialState from "./Data/InitialState";
import ContainerCounter from "./Containers/ContainerCounter";
import "./App.css";
import ContainerDecrease from "./Containers/ContainerDecrease";

function actionCreature(state = initialState, action) {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case "GET_CREATURE":
      return state;
    default:
      return state;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Creature Creator</h1>
          <Split gapSize="8" ratio="1/3">
            <div>
              <p>Creature selector goes here.</p>
              <ContainerCounter />
              <ContainerDecrease />
            </div>
            <Templates />
          </Split>
        </header>
        <Split gapSize="8" ratio="1/2">
          <p className="App-intro">Adjustment panel goes here.</p>
          <StatBlock creature={initialState.creature} />
        </Split>
      </div>
    );
  }
}

export default App;
