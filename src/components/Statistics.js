import React, { Component } from "react";
import Stack from "../layout/Stack";
import Stat from "./Stat";
// import AttributeList from "./AttributeList";

class Statistics extends Component {
  render() {
    const statistics = this.props.stats;
    return (
      <Stack gapSize="0">
        <h3 className="sectionHeading">Statistics</h3>
        <div>
          <Stat name="Str" val={statistics.str} />
          <Stat name="Dex" val={statistics.dex} />
          <Stat name="Con" val={statistics.con} />
          <Stat name="Int" val={statistics.int} />
          <Stat name="Wis" val={statistics.wis} />
          <Stat name="Cha" val={statistics.cha} />
        </div>
        <div>
          {/* <Stat name="Base Atk" val={statistics.bab} />
          <Stat name="CMB" val={statistics.cmb} />
          <Stat name="CMD" val={statistics.cmd} /> */}
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
