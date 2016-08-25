import React, { PropTypes } from 'react';
import XYAxis from './xyAxis';
import LineWithPoints from './lineWithPoints';
import { getXScale, getYScale } from './utils';
const Graph = (props) => {
    const width = 900;
    const height = 200;
    const { minX, maxX, minY, maxY } = props;
    const xScale = getXScale({ maxW: width, minX, maxX });
    const yScale = getYScale({ maxH: height, minY, maxY });

    return <svg width={width} height={height}>
        <XYAxis xScale={xScale} yScale={yScale} />
        <LineWithPoints xScale={xScale} yScale={yScale} data={props.data} />
    </svg>;
};

Graph.propTypes = {
    data: PropTypes.array,
    minX: PropTypes.number,
    maxX: PropTypes.number,
    minY: PropTypes.number,
    maxY: PropTypes.number
};

export default Graph;
