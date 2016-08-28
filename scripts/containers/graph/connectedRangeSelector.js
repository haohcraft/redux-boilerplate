import React, { PropTypes, Component } from 'react';
import RangeSelector from 'components/graph/rangeSelector';
import createDraggable from 'lib/decorators/draggable';
import { connect } from 'react-redux';
import { selectRange } from './actions';
import _ from 'lodash';

const DraggableRangeSelector = createDraggable(RangeSelector);

@connect(
    (state) => ({
        selectedStart: _.get(state, 'graph.selectedRange.start'),
        selectedEnd: _.get(state, 'graph.selectedRange.end')
    }),
    (dispatch) => ({ selectRange: (selected) => (dispatch(selectRange(selected))) })
)
export default class ConnectedRangeSelector extends Component {
    static propTypes = {
        selectedStart: PropTypes.number,
        selectedEnd: PropTypes.number,
        xScale: PropTypes.func,
        selectRange: PropTypes.func
    };
    render() {
        const {
            selectedStart,
            selectedEnd,
        } = this.props;
        if (!selectedEnd || !selectedStart) return null;

        return <DraggableRangeSelector {...this.props}
            onMouseDown={::this.onMouseDown}
            onMouseMove={::this.onMouseMove}
            onMouseUp={::this.onMouseUp} />;
    }
    onMouseDown(evt) {
        this.initialMouseX = evt.clientX;
    }
    onMouseUp() {
        this.initialMouseX = 0;
    }
    onMouseMove(evt) {
        const {
            selectedStart,
            selectedEnd,
            xScale
        } = this.props;
        const start = xScale(selectedStart);
        const end = xScale(selectedEnd);
        const diff = evt.clientX - this.initialMouseX;
        const newStart = Math.min(Math.max(start + diff, xScale.range()[0]), xScale.range()[1]);
        const newEnd = Math.max(Math.min(end + diff, xScale.range()[1]), xScale.range()[0]);
        this.initialMouseX = evt.clientX;
        this.props.selectRange({
            start: xScale.invert(newStart).getTime(),
            end: xScale.invert(newEnd).getTime()
        });
    }
}
