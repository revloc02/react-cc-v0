import React, { Component } from "react";
import Split from "./layout/Split";
import StatBlock from "./components/StatBlock";
import Templates from "./components/Templates";
import TemplatesContainer from "./containers/TemplatesContainer";
import initialState from "./data/InitialState";
import ContainerCounter from "./containers/ContainerCounter";
import "./App.css";
import ContainerDecouter from "./containers/ContainerDecounter";

// const actionCreature = (state = initialState, action) => {
//   if (typeof state === "undefined") {
//     return initialState;
//   }
//   switch (action.type) {
//     case "GET_CREATURE":
//       return state;
//     default:
//       return state;
//   }
// };

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
              <ContainerDecouter />
            </div>
            <TemplatesContainer />
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
