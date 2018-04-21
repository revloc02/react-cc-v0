import { connect } from "react-redux";
import Decounter from "../components/Decounter";
import { decountAction } from "../actions";

// Container
// Map Redux state to component props
const mapStateToProps = state => ({
  value: state.decount
});

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  onDecountClick: () => dispatch(decountAction)
});

// Connected Component
export default connect(mapStateToProps, mapDispatchToProps)(Decounter);
// End Container
