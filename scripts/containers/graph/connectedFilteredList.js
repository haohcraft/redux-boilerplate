import React, { PropTypes } from 'react';
import List from 'components/list';
import { connect } from 'react-redux';
import _ from 'lodash';
import { highlightLoadItem } from './actions';
const ConnectedFilteredList = (props) => (<List {...props} />);
ConnectedFilteredList.propTypes = {
    data: PropTypes.array
};
export default connect(
    (state) => {
        const { start, end } = state.graph.selectedRange;
        const loadAvgData = _.get(state, 'timer.loadAvgData.data', []);
        const data = _.filter(loadAvgData, (item) => (
            item.timestamp >= start && item.timestamp <= end
        )).reverse();
        return {
            data
        };
    },
    (dispatch) => ({
        highlightLoadItem: (time) => (dispatch(highlightLoadItem(time)))
    })
)(ConnectedFilteredList);
