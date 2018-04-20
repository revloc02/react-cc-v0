import { connect } from "react-redux";
import Decounter from "../components/Decounter";

// Action
const decountAction = { type: "DECOUNT" };

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
    onDecountClick: () => dispatch(decountAction)
  };
};

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Decounter);
// End Container
