import React, { Component } from "react";
import Stack from "../layout/Stack";
import Stat from "./Stat";
import AttributeList from "./AttributeList";

class Offense extends Component {
  render() {
    const offense = this.props.offense;
    return (
      <Stack gapSize="0">
        <h3 className="sectionHeading">Offense</h3>
        <div>
          <Stat name="Speed" value={offense.speed} />
        </div>
        <div>
          <Stat name="Space" value={offense.space} />
        </div>
        <div>
          <AttributeList name="Special Attacks" list={offense.specialAttacks} />
        </div>
      </Stack>
    );
  }
}

export default Offense;
