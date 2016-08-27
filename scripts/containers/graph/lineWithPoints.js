import React from 'react';
import Line from 'components/graph/line';
import ConnectedPoints from './connectedPoints';

const LineWithPoints = (props) => (
    <g>
        <Line {...props}/>
        <ConnectedPoints {...props} />
    </g>
);

export default LineWithPoints;
