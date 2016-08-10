import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';


const Line = (props) => (<div styleName="line"></div>);

export default CSSModules(style)(Line);
