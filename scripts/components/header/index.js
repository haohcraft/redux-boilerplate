import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';

import Overlay from 'components/overlay';

const Header = (props) => (<div styleName="header">
    <Overlay />
    <div styleName="title">
        <Overlay />
        <div styleName="title-content">Book a Reservation</div>
    </div>
    <div styleName="name">{props.name}</div>
</div>);

Header.propTypes = {
    name: PropTypes.string.isRequired
};

export default CSSModules(style)(Header);
