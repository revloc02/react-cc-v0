import React, { Component } from 'react'

// React component
export default class Decrease extends Component {
    render() {
      const { value, onDecreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onDecreaseClick}>Decrease</button>
        </div>
      )
    }
  }
  
  // Decrease.propTypes = {
  //   value: PropTypes.number.isRequired,
  //   onIncreaseClick: PropTypes.func.isRequired
  // }