import React, { PropTypes, Component } from 'react';
import style from './style.css';
export default class Points extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func,
        data: PropTypes.array,
        hoverTime: PropTypes.number,
        highlightPoint: PropTypes.func
    };
    render() {
        const { data } = this.props;
        return <g className='points'>
            {this.getPoints(data)}
        </g>;
    }
    getPoints(dataArr) {
        const { xScale, yScale, highlightPoint, hoverTime } = this.props;
        return dataArr.map((d, k) => {
            const x = xScale(d.timestamp);
            const y = yScale(d.loadAvg);
            const scaledTransform = `translate(-${x - 1},-${y - 1}),scale(2)`;
            const defaultTransform = d.timestamp === hoverTime ?
                scaledTransform : 'translate(0, 0)';
            const meta = {
                onMouseEnter: (evt) => {
                    evt.target.setAttribute('transform', scaledTransform);
                    if (highlightPoint) {
                        highlightPoint({
                            ...d,
                            target: evt.target
                        });
                    }
                },
                onMouseOut: (evt) => {
                    evt.target.setAttribute('transform', defaultTransform);
                    if (highlightPoint) {
                        highlightPoint({
                            ...d,
                            target: null
                        });
                    }
                }
            };
            return <circle
                className={`${style.point}`}
                transform={defaultTransform}
                key={k} cx={x} cy={y} r='3'
                {...meta}
                strokeWidth="0.5px"></circle>;
        });
    }
}

