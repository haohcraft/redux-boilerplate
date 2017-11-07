import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../constants';

export default class Giphy extends Component {
    static propTypes = {
        onUnmount: PropTypes.func.isRequired,
        onMounted: PropTypes.func.isRequired,
        styleOpt: PropTypes.shape({
            left: PropTypes.number,
            top: PropTypes.number,
            width: PropTypes.number
        }),
        webp: PropTypes.string.isRequired
    }
    getStyle = ({ left = 0, top = 0, width = 0, height = 0 }) => {
        const ridx = Math.floor(Math.random(10) * 10) % 4;
        const color = COLORS[ridx];

        const transform = `translate(${left}px, ${top}px)`;
        return {
            display: 'block',
            position: 'absolute',
            backgroundColor: color,
            top: 0,
            left: 0,
            transform,
            WebkitTransform: transform,
            width: `${width}px`,
            height: `${height}px`,
        };
    };
    componentDidMount() {
        this.props.onMounted(this);
    }
    componentWillUnmount() {
        this.props.onUnmount(this);
    }
    render() {
        const { styleOpt = {}, webp } = this.props;
        return (
            <div className="giphy" style={this.getStyle(styleOpt)}>
                <img src={ webp } alt="" />
            </div>
        );
    }
}
