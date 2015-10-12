import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increase } from '../actions';

console.log(increase())

class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <h1>Hello Nukosmeet</h1>
        <p>Current counter is {value}</p>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  onIncreaseClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increase())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);