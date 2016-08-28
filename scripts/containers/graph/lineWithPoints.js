import React from 'react';
import Line from 'components/graph/line';
import ConnectedPoints from './connectedPoints';

const LineWithPoints = (props) => (
    <g className="line-with-points">
        <Line {...props}/>
        <ConnectedPoints {...props} />
    </g>
);

export default LineWithPoints;
