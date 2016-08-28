import moment from 'moment';
import React, { PropTypes } from 'react';
import { MARGIN } from './utils';
import { FULL_DATE } from 'components/constants';
const XIndicator = (props) => {
    const x = props.xScale(props.hoverTime);
    const y = props.yScale.range()[0];
    const textWidth = 95;
    const textHeight = 15;
    const offsetY = 2;
    const offsetX = textWidth / 2;
    return <g className="xIndicator" transform="translate(0,0)">
        <rect fill="black" className="bar" x={x} y={MARGIN.bottom}
            rx="2" ry="2" width="1" height={ y - MARGIN.bottom }
            style={{ pointerEvents: 'none', cursor: 'crosshair' }}></rect>
        <rect
            fill="#444"
            transform={
                `translate(
                    ${x - textWidth / 2}, ${y + offsetY * 3}
                )`
            }
            width={textWidth} height={textHeight}></rect>
        <text
            fill="white"
            dy={`-${offsetY}`}
            dx={`-${offsetX}`}
            style={{ fontSize: '11px' }}
            transform={
                `translate(
                    ${x},${y + MARGIN.bottom}
                )`
            }>
            {moment(props.hoverTime).format(FULL_DATE)}
        </text>
    </g>;
};

XIndicator.propTypes = {
    xScale: PropTypes.func,
    yScale: PropTypes.func,
    hoverTime: PropTypes.number
};

export default XIndicator;
