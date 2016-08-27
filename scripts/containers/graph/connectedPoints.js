import { connect } from 'react-redux';
import Points from 'components/graph/points';
import { highlightPoint } from './actions';
import _ from 'lodash';

const ConnectedPoints = connect(
    (state) => ({ hoverTime: _.get(state, 'graph.hoverTime') }),
    (dispatch) => ({ highlightPoint: (obj) => (dispatch(highlightPoint(obj))) })
)(Points);
export default ConnectedPoints;
