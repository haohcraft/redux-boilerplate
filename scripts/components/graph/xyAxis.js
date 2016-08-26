import React, { Component, PropTypes } from 'react';
import XAxis from './xAxis';
import YAxis from './yAxis';


export default class XYAxis extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func
    };
    componentDidMount() {
    }
    render() {
        const { xScale, yScale } = this.props;
        const transformYAxis = `translate(${xScale.range()[0]}, 0)`;
        return (
            <g className="axis-container" transform="translate(0,0)">
                <XAxis xScale={xScale}
                    yScale={yScale}
                    transform={`translate(5, ${yScale.range()[0]})`}/>
                <YAxis yScale={yScale}
                    xScale={xScale}
                transform={transformYAxis}/>
            </g>
        );
    }
}
