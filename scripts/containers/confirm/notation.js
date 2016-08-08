import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './notation.css';
import Icon from 'components/icon';


const Notation = (props) => (<div styleName="notation">
    <Icon name={props.icon} styles={{ icon: props.styles.sucess }}/>
    <div styleName="content">{props.content}</div>
</div>);

Notation.propTypes = {
    icon: PropTypes.string,
    content: PropTypes.string,
    styles: PropTypes.object
};

export default CSSModules(style)(Notation);
