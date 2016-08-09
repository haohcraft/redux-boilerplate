import Info from 'components/info';
import { connect } from 'react-redux';
const connectedInfo = connect(
    (state) => ({ choice: state.choice })
)(Info);
export default connectedInfo;
