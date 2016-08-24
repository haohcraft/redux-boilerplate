import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import style from './style.css';

export default class YAxis extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        transform: PropTypes.string
    };
    componentDidMount() {
        const { yScale, xScale } = this.props;
        const el = ReactDOM.findDOMNode(this);
        const width = xScale.range()[1];
        const xaxis = d3.axisLeft().scale(yScale)
                    .tickSizeInner(-width)
                    .tickSizeOuter(0);
        d3.select(el).call(xaxis).attr('class', `y ${style.axis}`);
    }
    render() {
        return <g ref='yaxis' transform={this.props.transform}></g>;
    }
}
