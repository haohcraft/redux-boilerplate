import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import XYAxis from 'components/graph/xyAxis';
import LineWithPoints from './lineWithPoints';
import { getXScale, getYScale } from 'components/graph/utils';
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
)(Graph);
