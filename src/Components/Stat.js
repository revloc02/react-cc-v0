import React, { Component } from "react";

class Stat extends Component {
  render() {
    const { name, value } = this.props;
    return (
      <span>
        {name ? <strong>{name}:</strong> : ""}
        {value}
      </span>
    );
  }
}

export default Stat;
