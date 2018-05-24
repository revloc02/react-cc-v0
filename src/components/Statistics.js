import React, { Component } from "react";
import Stack from "../layout/Stack";
import Stat from "./Stat";
import AttributeList from "./AttributeList";

class Statistics extends Component {
  render() {
    console.log("Statistics", this.props)
    const statistics = this.props.stats;
    return (
      <Stack gapSize="0">
        <h3 className="sectionHeading">Statistics</h3>
        <div>
          <Stat name="Str" value={statistics.str} />
          <Stat name="Dex" value={statistics.dex} />
          <Stat name="Con" value={statistics.con} />
          {/* <Stat name="Int" value={statistics.abilityScores.int} />
          <Stat name="Wis" value={statistics.abilityScores.wis} />
          <Stat name="Cha" value={statistics.abilityScores.cha} /> */}
        </div>
        <div>
          {/* <Stat name="Base Atk" value={statistics.bab} />
          <Stat name="CMB" value={statistics.cmb} />
          <Stat name="CMD" value={statistics.cmd} /> */}
        </div>
        <div>
          {/* <AttributeList name="Feats" list={statistics.feats} /> */}
        </div>
        <div>
          {/* <AttributeList name="Skills" list={statistics.skills} /> */}
        </div>
        <div>
          {/* <AttributeList name="Languages" list={statistics.languages} /> */}
        </div>
      </Stack>
    );
  }
}

export default Statistics;
