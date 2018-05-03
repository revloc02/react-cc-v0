import { connect } from "react-redux";
import Templates from "../components/Templates";
import { increaseAdvanced, decreaseAdvanced } from "../actions";

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
//   onMightyCheck: () => dispatch(addMighty),
//   onMightyUncheck: () => dispatch(removeMighty),
  onIncreaseAdvancedClick: () => dispatch(increaseAdvanced),
  onDecreaseAdvancedClick: () => dispatch(decreaseAdvanced)
});

// Connected Component
export default connect(mapDispatchToProps)(Templates);
