import { connect } from "react-redux";
import Templates from "../components/Templates";
import {
  increaseAdvanced,
  decreaseAdvanced,
  increaseGiant,
  decreaseGiant
} from "../actions";

const mapStateToProps = state => ({
  advanced: state.templates.advanced,
  giant: state.templates.giant
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onIncreaseAdvancedClick: () => dispatch(increaseAdvanced),
  onDecreaseAdvancedClick: () => dispatch(decreaseAdvanced),
  onIncreaseGiantClick: () => dispatch(increaseGiant),
  onDecreaseGiantClick: () => dispatch(decreaseGiant)
});

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Templates);
