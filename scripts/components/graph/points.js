import React, { PropTypes, Component } from 'react';
import data from './data';
import style from './style.css';
export default class Points extends Component {
    static propTypes = {
        xScale: PropTypes.func,
        yScale: PropTypes.func
    };
    componentDidMount() {
    }
    render() {
        return <g className='points'>
            {this.getPoints(data.loadavgData)}
        </g>;
    }
    getPoints(dataArr) {
        const { xScale, yScale } = this.props;
        return dataArr.map((d, k) => {
            const x = xScale(d.timestamp);
            const y = yScale(d.loadAvg);
            const defaultTransform = 'translate(5, 0)';
            const meta = {
                onMouseEnter: (evt) => {
                    evt.target.setAttribute('transform', `translate(-${x - 4},-${y}),scale(2)`);
                },
                onMouseOut: (evt) => {
                    evt.target.setAttribute('transform', defaultTransform);
                }
            };
            return <circle
                className={`${style.point}`}
                transform={defaultTransform}
                key={k} cx={x} cy={y} r='3'
                data-timestamp={x}
                data-loadavg={y}
                {...meta}
                strokeWidth="0.5px"></circle>;
        });
    }
}

