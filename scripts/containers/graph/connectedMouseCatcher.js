import { PropTypes } from 'react';
import { connect } from 'react-redux';
import MouseCatcher from 'components/graph/mouseCatcher';
import { getHoverTime } from './actions';
@connect(
    null,
    (dispatch) => ({ getHoverTime: (time) => (dispatch(getHoverTime(time))) })
)
export default class ConnectedMouseCatcher extends MouseCatcher {
    static propTypes = {
        getHoverTime: PropTypes.func
    };
}

