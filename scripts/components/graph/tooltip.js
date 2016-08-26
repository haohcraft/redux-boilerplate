import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import moment from 'moment';


const Tooltip = (props) => {
    const { timestamp, loadAvg, target } = props;
    if (!target) return null;
    const pos = target.getBoundingClientRect();
    const left = pos.left + pos.width / 2 - 10;
    const top = pos.top + pos.height + 5;
    const tooltipStyle = {
        transform: `translate(${left}px, ${top}px)`
    };
    return <div styleName="tooltip" style={tooltipStyle}>
        <div styleName='time'>
            <label styleName='label'>Time:</label>
            <div styleName='content'>{moment(timestamp).format('hh:mm:ss')}</div>
        </div>
        <div styleName='load'>
            <label styleName='label'>LoadAvg:</label>
            <div styleName='content'>{loadAvg}</div>
        </div>
    </div>;
};

Tooltip.propTypes = {
    timestamp: PropTypes.number,
    loadAvg: PropTypes.number,
    target: PropTypes.object
};

export default CSSModules(style)(Tooltip);
