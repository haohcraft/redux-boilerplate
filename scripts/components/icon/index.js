import React, { PropTypes } from 'react';
import style from 'css/fontello.css';
import CSSModules from 'react-css-modules';
const iconMap = {
    clock: style['icon-reserve_widget_icon_10'],
    clock2: style['icon-reserve_widget_icon_04'],
    people: style['icon-reserve_widget_icon_08'],
    calendar: style['icon-reserve_widget_icon_09'],
    sucess: style['icon-reserve_widget_icon_11'],
    error: style['icon-reserve_widget_icon_03'],
    restaurant: style['icon-reserve_widget_icon_06'],
    request: style['icon-reserve_widget_icon_02']
};
const Icon = (props) => (<span className={`${props.styles.icon} ${iconMap[props.name]}`}></span>);
Icon.propTypes = {
    name: PropTypes.string,
    styles: PropTypes.object
};

export default CSSModules({})(Icon);
