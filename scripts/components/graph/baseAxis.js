import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import style from './style.css';
export default class BaseAxis extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        transform: PropTypes.string
    };
    componentWillReceiveProps() {
        this.update();
    }
    componentDidMount() {
        /*eslint-disable*/
        // debugger;
        /*eslint-enable*/
        this.update();
    }
    render() {
        return <g transform={this.props.transform}></g>;
    }
    update() {
        const axis = this.getAxis();
        if (axis) {
            const el = ReactDOM.findDOMNode(this);
            d3.select(el).call(axis).attr('class', `x ${style.axis}`);
        }
    }
    getAxis() {
        return null;
    }
}
