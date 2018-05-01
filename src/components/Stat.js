import React, { Component } from "react";
import PropTypes from "prop-types";

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

Stat.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired
};

export default Stat;
