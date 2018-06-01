import React, { Component } from "react";
import PropTypes from "prop-types";

class Stat extends Component {
  render() {
    const { name, val } = this.props;
    return (
      <span>
        {name ? <strong>{name}:</strong> : ""}
        {val}
      </span>
    );
  }
}

Stat.propTypes = {
  name: PropTypes.string,
  val: PropTypes.isRequired
};

export default Stat;
