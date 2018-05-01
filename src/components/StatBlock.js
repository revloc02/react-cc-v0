import React, { Component } from "react";
import Stack from "../layout/Stack";
import Title from "./Title";
import Defense from "./Defense";
import Offense from "./Offense";
import Tactics from "./Tactics";
import Statistics from "./Statistics";

class StatBlock extends Component {
  render() {
    const creature = this.props.creature;
    return (
      <Stack gapSize="4">
        <Title title={creature.title}/>
        <Defense defense={creature.defense}/>
        <Offense offense={creature.offense}/>
        <Tactics  tactics={creature.tactics}/>
        <Statistics  statistics={creature.statistics}/>
      </Stack>
    );
  }
}

export default StatBlock;
