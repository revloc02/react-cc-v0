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
        <select onChange={event => handleChange(event.target.value)}>
          {data.map((creature, index) => (
            <option key={index} value={creature.Name}>
              {creature.Name} CR {creature.CR}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default CreatureSelector;
