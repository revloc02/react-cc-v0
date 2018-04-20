import { connect } from "react-redux";
import Counter from "../components/Counter";

// Action
const increaseAction = { type: "increase" };

// Container
// Map Redux state to component props
const mapStateToProps = state => {
  console.log("mapStateToProps state:", state);
  return {
    value: state.count
  };
};

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
};

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// End Container
