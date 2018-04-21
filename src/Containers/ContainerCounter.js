import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increaseAction, decreaseAction } from "../actions";

// Container
// Map Redux state to component props
const mapStateToProps = state => ({
  value: state.count
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increaseAction),
  onDecreaseClick: () => dispatch(decreaseAction)
});

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// End Container
