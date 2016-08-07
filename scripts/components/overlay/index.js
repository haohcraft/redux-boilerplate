import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';

const Overlay = CSSModules(style)(() => (<div styleName="overlay"></div>));
Overlay.styles = style;
export default Overlay;
