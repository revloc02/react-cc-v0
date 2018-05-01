import React, { Component } from "react";
import PropTypes from "prop-types";

class AttributeList extends Component {
  render() {
    const { name, list } = this.props;
    return (
      <span>
        {name ? <strong>{name}:</strong> : ""}
        {list.map((entry, i) => (
          <React.Fragment key={i}>
            {!!i && ", "}
            {entry}
          </React.Fragment>
        ))}
      </span>
    );
  }
}

AttributeList.propTypes = {
  name: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default AttributeList;
