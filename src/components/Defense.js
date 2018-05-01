import React, { Component } from "react";
import Stack from "../layout/Stack";
import Stat from "./Stat";
import AttributeList from "./AttributeList";
import PropTypes from "prop-types";

class Defense extends Component {
  render() {
    const defense = this.props.defense;
    return (
      <Stack gapSize="0">
        <h3 className="sectionHeading">Defense</h3>
        <div>
          <Stat name="AC" value={defense.ac.ac} />
          <Stat name="Touch" value={defense.ac.touch} />
          <Stat name="Flat-footed" value={defense.ac.flatFooted} />
        </div>
        <div>
          <Stat name="hp" value={defense.hp} />
        </div>
        <div>
          <Stat name="Fort" value={defense.saves.fort} />
          <Stat name="Ref" value={defense.saves.ref} />
          <Stat name="Will" value={defense.saves.will} />
        </div>
        <div>
          {/* <Stat name="DR" value={defense.dr} /> */}
          <AttributeList name="Immune" list={defense.immune} />
          <Stat name="SR" value={defense.sr} />
        </div>
      </Stack>
    );
  }
}

Defense.propTypes = {
  defense: PropTypes.object.isRequired
};

export default Defense;
