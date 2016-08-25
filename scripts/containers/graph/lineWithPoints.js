import React from 'react';
import Line from 'components/graph/line';
import Points from './points';

const LineWithPoints = (props) => (
    <g>
        <Line {...props}/>
        <Points {...props} />
    </g>
);

export default LineWithPoints;
