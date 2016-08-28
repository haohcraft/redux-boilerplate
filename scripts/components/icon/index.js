import React, { PropTypes } from 'react';
import style from './style.css';
import _ from 'lodash';
const iconMap = {
    decrease: style['ion-arrow-left-b'],
    increase: style['ion-arrow-right-b'],
    circle: style['ion-record'],
    line: style['ion-minus']
};
const Icon = (props) => (
    <span
        className={
            `${_.get(props, 'styles.icon')} ${iconMap[props.name]} ${style.icon}`
        } onClick={!!props.onClick && props.onClick}>
    </span>
);
Icon.propTypes = {
    name: PropTypes.string,
    styles: PropTypes.object,
    onClick: PropTypes.func
};

export default Icon;
