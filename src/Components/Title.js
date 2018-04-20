import React, { Component } from "react";
import Stack from "../layout/Stack";
import Stat from "./Stat";

class Title extends Component {
  render() {
    const title = this.props.title;
    return (
      <Stack gapSize="0">
        <h2 className="sectionHeading">
          {title.name} {title.cr}
        </h2>
        <div>
          <Stat name="XP" value={title.xp.toLocaleString("en")} />
        </div>
        <div>
          <Stat value={title.alignment} />
          <Stat value={title.size} />
          <Stat value={title.type} />
          <Stat value={title.subType} />
        </div>
        <div>
          <Stat name="Init" value={title.init} />
          <Stat name="Senses" value={title.senses} />
        </div>
      </Stack>
    );
  }
}

export default Title;
