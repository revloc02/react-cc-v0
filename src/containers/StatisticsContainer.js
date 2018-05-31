import { connect } from "react-redux";
import Statistics from "../components/Statistics";
import {getStats} from "../selectors/index";

// Map Redux state to component props
const mapStateToProps = state => ({
  // stats: state.creature.statistics
  stats: getStats(state)
});

// Connected Component
export default connect(mapStateToProps, null)(Statistics);
