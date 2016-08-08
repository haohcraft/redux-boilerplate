import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import cx from 'classnames';


const Button = (props) => {
    const cn = cx(style.button, props.styles.btn, {
        [style.active]: props.isActive
    });
    return <div className={cn} onClick={props.onClick}>{props.name}</div>;
};

Button.propTypes = {
    name: PropTypes.string,
    cn: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    styles: PropTypes.object
};

export default CSSModules(style)(Button);
