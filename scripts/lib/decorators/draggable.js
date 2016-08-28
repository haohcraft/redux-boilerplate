import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import hoistStatics from 'hoist-non-react-statics';
const createDraggable = (DecoratedComponent) => {
    class Draggable extends Component {
        static propTypes = {
            onMouseMove: PropTypes.func,
            onMouseDown: PropTypes.func,
            onMouseUp: PropTypes.func
        };
        constructor(props) {
            super(props);
            this.state = {
                isMouseDown: false,
                translateY: 0,
                leftOffset: 0
            };
            this.topOffset = 0;
        }
        componentDidMount() {
            this.calculateTopOffset();
        }
        componentDidUpdate() {
            this.calculateTopOffset();
        }
        render() {
            const style = {
                position: this.state.isMouseDown ? 'fixed' : 'absolute',
                top: '0',
                left: '0',
                padding: '0',
                margin: '0',
                pointerEvents: this.state.isMouseDown ? 'all' : 'none',
                zIndex: this.state.isMouseDown ? 2 : 0
            };
            const styleDec = {
                pointerEvents: 'all'
            };
            return <svg width="100%"
                    height="100%"
                    style={style}
                    onMouseUp={::this.onMouseUp}
                    onMouseMove={::this.onMouseMove}>
                    <DecoratedComponent {...this.props}
                        style={styleDec}
                        onMouseDown={::this.onMouseDown}
                        leftOffset={this.state.leftOffset}
                        translateY={this.state.translateY} />
            </svg>;
        }
        calculateTopOffset() {
            const el = ReactDOM.findDOMNode(this);
            const { top } = el.getBoundingClientRect();
            this.topOffset = top;
        }
        onMouseMove(evt) {
            evt.preventDefault();
            if (this.state.isMouseDown && this.props.onMouseMove) {
                this.props.onMouseMove(evt);
            }
        }
        onMouseDown(evt) {
            evt.preventDefault();
            const el = ReactDOM.findDOMNode(this);
            const { left } = el.getBoundingClientRect();
            this.setState({
                isMouseDown: true,
                translateY: this.topOffset,
                leftOffset: left
            });
            if (this.props.onMouseDown) this.props.onMouseDown(evt);
        }
        onMouseUp(evt) {
            evt.preventDefault();
            this.setState({
                isMouseDown: false,
                translateY: 0,
                leftOffset: 0
            });
            if (this.props.onMouseUp) this.props.onMouseUp(evt);
        }
    }

    return hoistStatics(Draggable, DecoratedComponent);
};

export default createDraggable;
