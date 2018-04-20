import { connect } from "react-redux";
import Decrease from "../components/Decrease";

// Action
const decreaseAction = { type: "decrease" };

// Container
// Map Redux state to component props
const mapStateToProps = state => {
  return {
    value: state.decount
  };
};

// Map Redux actions to component props
const mapDispatchToProps = dispatch => {
  return {
    onDecreaseClick: () => dispatch(decreaseAction)
  };
};

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Decrease);
// End Container
