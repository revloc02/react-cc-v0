import React, { Component } from 'react'

// React component
export default class Decounter extends Component {
    render() {
      const { value, onDecountClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onDecountClick}>Decount</button>
        </div>
      )
    }
  }
  
  // Decount.propTypes = {
  //   value: PropTypes.number.isRequired,
  //   onIncreaseClick: PropTypes.func.isRequired
  // }