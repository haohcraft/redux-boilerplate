import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import style from './style.css';

export default class XAxis extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        transform: PropTypes.string
    };
    componentDidMount() {
        const { xScale, yScale } = this.props;
        const el = ReactDOM.findDOMNode(this);
        const height = yScale.range()[0];
        const xaxis = d3.axisBottom().scale(xScale)
                    .tickSizeInner(-height)
                    .tickSizeOuter(0)
                    .tickPadding(10);
        d3.select(el).call(xaxis).attr('class', `x ${style.axis}`);
    }
    render() {
        return <g ref='xaxis' transform={this.props.transform}></g>;
    }
}
