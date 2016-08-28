import React, { Component, PropTypes } from 'react';
import { MARGIN } from './utils';
export default class RangeCover extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        start: PropTypes.number,
        end: PropTypes.number,
        resetSelectRange: PropTypes.func
    };
    render() {
        const { xScale, yScale, start, end } = this.props;
        const width = xScale.range()[1];
        const height = yScale.range()[0] - MARGIN.bottom;
        const coverStart = xScale.range()[0];
        return <g className='range-cover' transform='translate(0, 0)'>
            <rect className="non-selected"
                x={coverStart} y={MARGIN.bottom}
                width={Math.max(start - coverStart, 0)}
                height={height}
                fill="rgba(50,50,50,.75)"
                onClick={::this.onClick}></rect>
            <rect className="non-selected"
                x={end}
                y={MARGIN.bottom} width={width - end} height={height}
                fill="rgba(50,50,50,.75)"
                onClick={::this.onClick}></rect>
        </g>;
    }
    onClick() {
        this.props.resetSelectRange();
        /*eslint-disable*/
        // console.log("non-selected clicked");
        /*eslint-enable*/
    }
}

