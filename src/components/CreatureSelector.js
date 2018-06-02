import React, { Component } from "react";
import data from "../data/creatures.json";

class CreatrueSelector extends Component {
  render() {
    const statistics = this.props.stats;
    return (
      <label>
        Select Creature:
        {/* <select value={this.state.value} onChange={this.handleChange}> */}
        <select>
          {data.map(creature => (
            <option key={creature.Name} value={creature.Name}>
              {creature.Name}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default CreatrueSelector;
