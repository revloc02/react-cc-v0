import React, { Component } from 'react'

// React component
export default class Counter extends Component {
    render() {
      const { value, onIncreaseClick, onDecreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>+</button>
          <button onClick={onDecreaseClick}>-</button>
        </div>
      )
    }
  }
  
  // Counter.propTypes = {
  //   value: PropTypes.number.isRequired,
  //   onIncreaseClick: PropTypes.func.isRequired
  // }