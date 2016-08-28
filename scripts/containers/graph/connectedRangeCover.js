import React, { PropTypes } from 'react';
import RangeCover from 'components/graph/rangeCover';
import { connect } from 'react-redux';
import { resetSelectRange } from './actions';
import _ from 'lodash';

const ConnectedRangeCover = (props) => {
    const { xScale, selectedStart, selectedEnd } = props;
    const start = xScale(selectedStart);
    const end = xScale(selectedEnd);

    if (!selectedEnd ||
        !selectedStart ||
        start > xScale.range()[1] || end < xScale.range()[0]) return null;
    return <RangeCover {...props} start={start} end={end} />;
};

ConnectedRangeCover.propTypes = {
    selectedStart: PropTypes.number,
    selectedEnd: PropTypes.number,
    xScale: PropTypes.func
};

export default connect(
    (state) => ({
        selectedStart: _.get(state, 'graph.selectedRange.start'),
        selectedEnd: _.get(state, 'graph.selectedRange.end')
    }),
    (dispatch) => ({ resetSelectRange: () => (dispatch(resetSelectRange())) })
)(ConnectedRangeCover);
