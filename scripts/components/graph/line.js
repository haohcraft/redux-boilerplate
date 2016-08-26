import React, { PropTypes } from 'react';
import * as d3 from 'd3';
import style from './style.css';
const Line = (props) => {
    const { xScale, yScale, data } = props;
    const path = d3.line()
            .x((d) => xScale(d.timestamp))
            .y((d) => yScale(d.loadAvg));
    return <g transform='translate(5, 0)'>
        <path
            className={`${style.line}`}
            d={path(data)}></path>
    </g>;
};
Line.propTypes = {
    xScale: PropTypes.func,
    yScale: PropTypes.func,
    data: PropTypes.array
};
export default Line;

