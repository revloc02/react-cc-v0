import React, { Component } from "react";
import Stack from "../layout/Stack";

class Tactics extends Component {
  render() {
    return (
      <Stack gapSize="0">
        <h3 className="sectionHeading">Tactics</h3>
        <p>Dire porcupines are passive until threatened. When faced with possible combat, the dire porcupine raises the quills on its body and spins around, smashing an opponent with its quill-covered tail. If it bites an opponent, 1d4 quills break off from its body and lodge in the opponent.</p>
      </Stack>
    );
  }
}

export default Tactics;
