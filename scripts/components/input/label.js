import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Icon from 'components/icon';

const Label = (props) => (<div styleName="label">
    <Icon name={props.name} />
</div>);

Label.propTypes = {
    name: PropTypes.string
};

export default CSSModules(style)(Label);
