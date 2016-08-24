import React, { PropTypes, Component } from 'react';
import * as d3 from 'd3';
import style from './style.css';
import data from './data';
export default class Line extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func
    };
    componentDidMount() {
    }
    render() {
        const { xScale, yScale } = this.props;
        const path = d3.line()
                .x((d) => xScale(d.timestamp))
                .y((d) => yScale(d.loadAvg));

        return <path
                className={`${style.line}`}
                transform='translate(5, 0)'
                d={path(data.loadavgData)}></path>;
    }
}
