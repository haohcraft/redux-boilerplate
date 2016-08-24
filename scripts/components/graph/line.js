import React, { PropTypes, Component } from 'react';
// import ReactDOM from 'react-dom';
import * as d3 from 'd3';
// import style from './style.css';
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
        const style = {
            stroke: 'rgb(49, 130, 189)',
            fill: 'transparent'
        };
        const path = d3.line()
                .x((d) => xScale(d.timestamp))
                .y((d) => yScale(d.loadAvg));

        return <path
                transform='translate(5, 0)'
                style={style}
                d={path(data.loadavgData)}></path>;
    }
}
