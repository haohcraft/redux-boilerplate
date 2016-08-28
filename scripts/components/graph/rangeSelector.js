import React, { Component, PropTypes } from 'react';
export default class RangeSelector extends Component {
    static propTypes = {
        height: PropTypes.number,
        translateY: PropTypes.number,
        onMouseDown: PropTypes.func,
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        selectedStart: PropTypes.number,
        selectedEnd: PropTypes.number,
        leftOffset: PropTypes.number
    };
    componentDidMount() {
    }
    render() {
        const {
            yScale,
            xScale,
            selectedStart,
            selectedEnd,
            translateY = 0,
            onMouseDown,
            leftOffset
        } = this.props;
        const start = xScale(selectedStart);
        const end = xScale(selectedEnd);
        const height = yScale.range()[0];
        return <g className="selected"
                transform={`translate(${start + leftOffset}, ${translateY})`}
                onMouseDown={onMouseDown}>
            <rect x='0' y="0" width={end - start || 5} height={height}
                  fill="rgba(0,0,0,0)"
                  style={{ cursor: 'move', pointerEvents: 'all' }}></rect>
        </g>;
    }
}
