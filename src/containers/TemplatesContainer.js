import { connect } from "react-redux";
import Templates from "../components/Templates";
import { increaseAdvanced, decreaseAdvanced } from "../actions";

const mapStateToProps = state => ({
  advanced: state.templates.advanced
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onIncreaseAdvancedClick: () => dispatch(increaseAdvanced),
  onDecreaseAdvancedClick: () => dispatch(decreaseAdvanced)
});

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Templates);
