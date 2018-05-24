import { connect } from "react-redux";
import Statistics from "../components/Statistics";

// Map Redux state to component props
const mapStateToProps = state => ({
  // stats: state.creature.statistics
  stats: getStats(state)
});

// Connected Component
export default connect(mapStateToProps, null)(Statistics);


const getStats = state => {
  const str = state.baseStats.str + (state.templates.advanced * 4);
  const dex = state.baseStats.dex + (state.templates.advanced * 4);
  const con = state.baseStats.con + (state.templates.advanced * 4);
  return {str,dex,con}
}