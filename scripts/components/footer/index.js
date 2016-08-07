import React from 'react';
import Overlay from 'components/overlay';
import CSSModules from 'react-css-modules';
import style from './style.css';
const overlayStyle = {
    overlay: `${Overlay.styles.overlay} ${style.overlay}`
};
const Footer = () => (<div styleName="footer">
    <Overlay styles={overlayStyle}/>
    <div styleName="content">powered by reserve</div>
</div>);


export default CSSModules(style)(Footer);
