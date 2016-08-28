import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import * as d3 from 'd3';
import XYAxis from 'components/graph/xyAxis';
import Labels from 'components/graph/labels';
import ConnectedHealthIndicator from './connectedHealthIndicator';
import ConnectedLineWithPoints from './lineWithPoints';
import ConnectedTooltip from './tooltip';
import ConnectedXIndicator from './connectedXIndicator';
import ConnectedMouseCatcher from './connectedMouseCatcher';
import ConnectedRangeCover from './connectedRangeCover';
import ConnectedRangeSelector from './connectedRangeSelector';
import ConnectedFilteredList from './connectedFilteredList';
import { getXScale, getYScale } from 'components/graph/utils';
import style from './style.css';

const Graph = (props) => {
    const width = 650;
    const height = 250;
    const { minX, maxX, minY, maxY } = props;
    const xScale = getXScale({ maxW: width, minX, maxX });
    const yScale = getYScale({ maxH: height, minY, maxY });
    return <div styleName='cross-filter' style={{ position: 'relative', width: '100%' }}>
        <div styleName='title'>
            <div styleName='label'>Graph
                <span styleName='sub-label'> (load over the past 10 minutes) </span>
            </div>
        </div>
        <svg styleName='graph' width={width} height={height}>
            <XYAxis xScale={xScale} yScale={yScale}/>
            <ConnectedHealthIndicator xScale={xScale} yScale={yScale}/>
            <ConnectedXIndicator xScale={xScale} yScale={yScale} />
            <ConnectedMouseCatcher xScale={xScale} yScale={yScale}/>
            <ConnectedLineWithPoints
                xScale={xScale}
                yScale={yScale}
                data={props.data} />
            <ConnectedRangeCover xScale={xScale} yScale={yScale}/>
        </svg>
        <ConnectedRangeSelector xScale={xScale} yScale={yScale}/>
        <Labels />
        <ConnectedFilteredList />
        <ConnectedTooltip />
    </div>;
};

Graph.propTypes = {
    data: PropTypes.array,
    minX: PropTypes.number,
    maxX: PropTypes.number,
    minY: PropTypes.number,
    maxY: PropTypes.number,
};


export default connect(
    (state) => {
        const loadavg = _.get(state, 'timer.loadAvgData');
        const minX = _.get(loadavg, 'data.0.timestamp');
        const maxX = _.get(loadavg.data.slice(-1), '0.timestamp');
        const minY = d3.min(_.get(loadavg, 'data'), (d) => (d.loadAvg)) * 0.9;
        const maxY = d3.max(_.get(loadavg, 'data'), (d) => (d.loadAvg)) * 1.1;
        return {
            data: loadavg.data,
            minX,
            maxX,
            minY,
            maxY
        };
    }
)(CSSModules(style)(Graph));
