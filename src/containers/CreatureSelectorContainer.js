import { connect } from "react-redux";
import CreatureSelector from "../components/CreatureSelector";
import { selectCreature, storeCreatureData } from "../actions";

// Container
// Map Redux state to component props
// const mapStateToProps = state => ({
//   value: state.decount
// });

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  didMount: creatures => dispatch(storeCreatureData(creatures)),
  handleChange: creature => dispatch(selectCreature(creature))
});

// Connected Component
export default connect(null, mapDispatchToProps)(CreatureSelector);
// End Container