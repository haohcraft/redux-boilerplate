import React, { Component, PropTypes } from 'react';
import { MARGIN } from './utils';
import _ from 'lodash';
export default class MouseCatcher extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        getHoverTime: PropTypes.func
    };
    render() {
        const style = {
            cursor: 'crosshair',
            pointerEvents: 'all'
        };
        const { xScale, yScale } = this.props;
        const width = xScale.range()[1] - MARGIN.left;
        const height = yScale.range()[0];
        return (
            <rect className="mouse-catcher"
                fill='none'
                transform={`translate(${MARGIN.left},0)`}
                width={width}
                height={height}
                onMouseEnter={::this.onMouseMove}
                onMouseMove={::this.onMouseMove}
                onMouseLeave={::this.onMouseLeave}
                onClick={::this.onClick}
                style={style}>
            </rect>
        );
    }
    onMouseMove(evt) {
        const xPos = evt.clientX - _.get(evt.currentTarget.ownerSVGElement.getScreenCTM(), 'e', 0);
        const timestamp = this.props.xScale.invert(xPos);
        this.props.getHoverTime(timestamp.getTime());
    }
    onMouseLeave() {
        this.props.getHoverTime(0);
    }
    onClick() {}
    getCursorX(evt) {
        const offsetX = evt.currentTarget.ownerSVGElement.getScreenCTM().e;
        const cursorX = _.get(evt, 'clientX', 0) - offsetX;
        return cursorX;
    }
}
