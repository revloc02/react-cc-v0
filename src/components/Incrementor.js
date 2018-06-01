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
    const { label, val, onIncreaseClick, onDecreaseClick } = this.props;
    return (
      <div>
        {label}:<IncDecrement
          name="decrement"
          type="button"
          value="-"
          onClick={onDecreaseClick}
        />
        <InputIncDec
          name={label}
          type="text"
          value={val}
          maxLength="2"
          readOnly="true"
        />
        <IncDecrement
          name="increment"
          type="button"
          value="+"
          onClick={onIncreaseClick}
        />
      </div>
    );
  }
}

export default Incrementor;
