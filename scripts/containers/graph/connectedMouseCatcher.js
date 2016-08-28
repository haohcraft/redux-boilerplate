import { PropTypes } from 'react';
import { connect } from 'react-redux';
import MouseCatcher from 'components/graph/mouseCatcher';
import { getHoverTime, selectRange, resetSelectRange } from './actions';
@connect(
    null,
    (dispatch) => ({
        getHoverTime: (time) => (dispatch(getHoverTime(time))),
        selectRange: (selected) => (dispatch(selectRange(selected))),
        resetSelectRange: () => (dispatch(resetSelectRange()))
    })
)
export default class ConnectedMouseCatcher extends MouseCatcher {
    static propTypes = {
        getHoverTime: PropTypes.func
    };
}

