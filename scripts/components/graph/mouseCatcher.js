import React, { Component, PropTypes } from 'react';
import { MARGIN } from './utils';
import _ from 'lodash';
export default class MouseCatcher extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        getHoverTime: PropTypes.func,
        selectRange: PropTypes.func,
        resetSelectRange: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedRangeStart: 0,
            selectedRangeEnd: 0
        };
    }
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
                onMouseUp={::this.onMouseUp}
                onMouseDown={::this.onMouseDown}
                onMouseEnter={::this.onMouseMove}
                onMouseMove={::this.onMouseMove}
                onMouseLeave={::this.onMouseLeave}
                onClick={::this.onClick}
                style={style}>
            </rect>
        );
    }
    onMouseDown(evt) {
        const { xScale } = this.props;
        const graphOffset = _.get(evt.currentTarget.ownerSVGElement.getScreenCTM(), 'e', 0);
        const start = xScale.invert(evt.clientX - graphOffset).getTime();
        this.props.resetSelectRange();
        this.setState({
            selectedRangeStart: start
        });
    }
    onMouseUp(evt) {
        const { xScale } = this.props;
        const graphOffset = _.get(evt.currentTarget.ownerSVGElement.getScreenCTM(), 'e', 0);
        const end = xScale.invert(evt.clientX - graphOffset).getTime();
        if (Math.abs(this.state.selectedRangeStart - end) > 1000 * 1) {
            this.props.selectRange({
                start: Math.min(this.state.selectedRangeStart, end),
                end: Math.max(this.state.selectedRangeStart, end)
            });
        }
        this.setState({
            selectedRangeEnd: end
        });
    }
    onMouseMove(evt) {
        const xPos = evt.clientX - _.get(evt.currentTarget.ownerSVGElement.getScreenCTM(), 'e', 0);
        const timestamp = this.props.xScale.invert(xPos);
        this.props.getHoverTime(timestamp.getTime());
        if (this.state.selectedRangeStart) {
            // this.props.selectRange({
            //     start: this.state.selectedRangeStart,
            //     end: timestamp
            // });
        }
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
