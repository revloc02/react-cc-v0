import { connect } from "react-redux";
import Statistics from "../components/Statistics";

// Map Redux state to component props
const mapStateToProps = state => ({
  value: state.statistics
});

// Connected Component
export default connect(mapStateToProps)(Statistics);
