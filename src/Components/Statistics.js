import React, { Component } from "react";
import Stack from "../layout/Stack";
import Stat from "./Stat";

class Statistics extends Component {
  render() {
    const statistics = this.props.statistics;
    return (
      <Stack gapSize="0">
        <h3 className="sectionHeading">Statistics</h3>
        <div>
          <Stat name="Str" value={statistics.abilityScores.str} />
          <Stat name="Dex" value={statistics.abilityScores.dex} />
          <Stat name="Con" value={statistics.abilityScores.con} />
          <Stat name="Int" value={statistics.abilityScores.int} />
          <Stat name="Wis" value={statistics.abilityScores.wis} />
          <Stat name="Cha" value={statistics.abilityScores.cha} />
        </div>
        <div>
          <Stat name="Base Atk" value={statistics.bab} />
          <Stat name="CMB" value={statistics.cmb} />
          <Stat name="CMD" value={statistics.cmd} />
        </div>
        <ul>
          Feats{" "}
          {statistics.feats.map((feat, index) => <li key={index}>{feat}</li>)}
        </ul>
        <p>Feats {statistics.feats.toString()}</p>
        <p>Skills</p>
      </Stack>
    );
  }
}

export default Statistics;
