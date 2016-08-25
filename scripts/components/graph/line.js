import React, { PropTypes, Component } from 'react';
import * as d3 from 'd3';
import style from './style.css';
export default class Line extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        data: PropTypes.array
    };
    componentDidMount() {
    }
    render() {
        const { xScale, yScale, data } = this.props;
        /*eslint-disable*/
        // debugger;
        /*eslint-enable*/
        const path = d3.line()
                .x((d) => xScale(d.timestamp))
                .y((d) => yScale(d.loadAvg));
        return <g transform='translate(5, 0)'>
            <path
                className={`${style.line}`}
                d={path(data)}></path>
        </g>;
    }
}
