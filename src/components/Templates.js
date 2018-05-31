import React, { Component } from "react";
import Grid from "../layout/Grid";
import Incrementor from "./Incrementor";

class Templates extends Component {
  render() {
    const {
      advanced,
      giant,
      onIncreaseAdvancedClick,
      onDecreaseAdvancedClick,
      onIncreaseGiantClick,
      onDecreaseGiantClick
    } = this.props;
    return (
      <Grid gapSize="8" columns="6">
        <Incrementor
          label="Advanced"
          val={advanced}
          onIncreaseClick={onIncreaseAdvancedClick}
          onDecreaseClick={onDecreaseAdvancedClick}
        />
        <Incrementor
          label="Giant"
          val={giant}
          onIncreaseClick={onIncreaseGiantClick}
          onDecreaseClick={onDecreaseGiantClick}
        />
        <Incrementor label="Young" />
        <span>
          <input
            name="RacialHitDice"
            type="text"
            size="2"
            value="0"
            maxLength="2"
            readOnly="true"
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
