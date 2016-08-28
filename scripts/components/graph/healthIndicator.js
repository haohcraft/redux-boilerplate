import React, { PropTypes } from 'react';
import { MARGIN } from './utils';
import { ALERT_TYPE } from 'containers/alerts/constants';
const HealthIndicator = (props) => {
    const { xScale, yScale } = props;
    return <g transform={`translate(0, ${MARGIN.bottom})`} className="healthIndicator">
        {
            !!props.highlightAlert && !!props.highlightAlert.timestamp &&
            <rect
                x={xScale(props.highlightAlert.timestamp)}
                y='0'
                width={1}
                height={yScale.range()[0] - MARGIN.bottom}
                fill={props.highlightAlert.type === ALERT_TYPE.WARNING ? '#d63d2e' : '#5c4'}></rect>
        }
        <rect
            x={xScale.range()[0]}
            y='0'
            width={Math.max(xScale.range()[1] - xScale.range()[0], 0)}
            height={3}
            fill='#5c4'></rect>
        {!!props.alertRange && !!props.alertRange.length && props.alertRange.map((range, k) => (
            <rect key={k}
                x={xScale(range[0])}
                y='0'
                width={Math.max(xScale(range[1]) - xScale(range[0]), 0)}
                height={3}
                fill='#d63d2e'></rect>
        ))}
    </g>;
};

HealthIndicator.propTypes = {
    xScale: PropTypes.func,
    yScale: PropTypes.func,
    alertRange: PropTypes.array,
    highlightAlert: PropTypes.shape({
        timestamp: PropTypes.number,
        type: PropTypes.string
    })
};

export default HealthIndicator;
