import React from 'react';
import XYAxis from './xyAxis';
import Line from './line';
import Points from './points';
import { getXScale, getYScale } from './utils';
const Graph = () => {
    const width = 900;
    const height = 200;
    const xScale = getXScale({ maxW: width });
    const yScale = getYScale({ maxH: height });

    return <svg width={width} height={height}>
        <XYAxis xScale={xScale} yScale={yScale} />
        <Line xScale={xScale} yScale={yScale} />
        <Points xScale={xScale} yScale={yScale} />
    </svg>;
};

export default Graph;
