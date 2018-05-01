import React, { Component } from "react";
import styled from "styled-components";

const IncDecrement = styled.input`
  font-size: 0.9em;
  text-align: center;
  border-radius: 4px;
  margin: 0px 3px;
`;

const InputIncDec = styled.input`
  text-align: center;
  width: 30px;
`;

class Incrementor extends Component {
  render() {
    return (
      <div>
        {this.props.label}:<IncDecrement
          name="decrement"
          type="button"
          value="-"
        />
        <InputIncDec
          name={this.props.label}
          type="text"
          value="0"
          maxlength="2"
          readonly="true"
        />
        <IncDecrement name="increment" type="button" value="+" />
      </div>
    );
  }
}

export default Incrementor;
