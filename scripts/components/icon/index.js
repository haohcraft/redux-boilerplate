import React, { PropTypes } from 'react';
import style from 'css/fontello.css';
const iconMap = {
    clock: style['icon-reserve_widget_icon_04'],
    people: style['icon-reserve_widget_icon_08'],
    calendar: style['icon-reserve_widget_icon_09'],
};
const Icon = (props) => (<span className={`icon ${iconMap[props.name]}`}></span>);
Icon.propTypes = {
    name: PropTypes.string
};

export default Icon;
