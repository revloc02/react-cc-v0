import React, { Component } from "react";
import Split from "./layout/Split";
import StatBlock from "./components/StatBlock";
import TemplatesContainer from "./containers/TemplatesContainer";
import initialState from "./data/InitialState";
import ContainerCounter from "./containers/ContainerCounter";
import "./App.css";
import ContainerDecouter from "./containers/ContainerDecounter";
import CreatureSelectorContainer from "./containers/CreatureSelectorContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Creature Creator</h1>
          <Split gapSize="8" ratio="1/3">
            <div>
              <CreatureSelectorContainer />
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
