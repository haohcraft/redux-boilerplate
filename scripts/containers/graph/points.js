import { connect } from 'react-redux';
import Points from 'components/graph/points';
import { highlightPoint } from './actions';

const ConnectedPoints = connect(
    null,
    (dispatch) => ({ highlightPoint: (obj) => (dispatch(highlightPoint(obj))) })
)(Points);
export default ConnectedPoints;
