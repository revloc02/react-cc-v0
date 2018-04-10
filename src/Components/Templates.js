import React, { Component } from "react";
import Grid from "../Layout/Grid";
import Incrementor from "./Incrementor";

class Templates extends Component {
  render() {
    return (
      <Grid gapSize="8" columns="6">
        <Incrementor label="Advanced" />
        <Incrementor label="Giant" />
        <Incrementor label="Young" />
        <span>
          <input
            name="RacialHitDice"
            type="text"
            size="2"
            value="0"
            maxlength="2"
            readonly="true"
          />
        </span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>
          <input name="Dire" type="checkbox" />Dire
        </span>
        <span>
          <input name="Mighty" type="checkbox" />Mighty
        </span>
      </Grid>
    );
  }
}

export default Templates;
