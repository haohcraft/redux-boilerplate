import React from 'react';
import Graph from 'components/graph';
import { connect } from 'react-redux';
import _ from 'lodash';
// import data from './data';
const GraphContainer = (props) => (<div className="graphContainer">
    <Graph {...props}/>
</div>);

export default connect(
    (state) => {
        const loadavg = _.get(state, 'timer.loadAvgData');
        const minX = _.get(loadavg, 'data.0.timestamp');
        const maxX = _.get(loadavg.data.slice(-1), '0.timestamp');
        const minY = _.get(loadavg, 'min');
        const maxY = _.get(loadavg, 'max');
        return {
            data: loadavg.data,
            minX,
            maxX,
            minY,
            maxY
        };
    }
)(GraphContainer);
// export default GraphContainer;
