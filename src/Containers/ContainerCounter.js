import { connect } from 'react-redux';
import Counter from "../Components/Counter";

// Action
const increaseAction = { type: "increase" };

// Container
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// End Container
