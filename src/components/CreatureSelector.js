import React, { Component } from "react";
import data from "../data/creatures.json";

class CreatureSelector extends Component {
  // this componentDidMount is temporary
  componentDidMount() {
    this.props.didMount(data);
  }
  render() {
    const {handleChange} = this.props;
    return (
      <label>
        Select Creature:
        {/* <select value={this.state.value} onChange={this.handleChange}> */}
        <select onChange={handleChange}>
          {data.map(creature => (
            <option key={creature.Name + " " + creature.Source}>
              {creature.Name} CR {creature.CR}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default CreatureSelector;
