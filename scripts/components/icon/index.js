import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';

const Icon = (props) => (<div className={`${style.icon} ${props.name}`}></div>);

Icon.propTypes = {
    name: PropTypes.string
};

export default CSSModules(style)(Icon);
