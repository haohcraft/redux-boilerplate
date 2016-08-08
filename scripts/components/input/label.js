import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import * as style from './label.css';
import Icon from 'components/icon';

const Label = (props) => (<div styleName="label">
    <Icon name={props.name} styles={{
        icon: props.name === 'sucess' ? props.styles.sucess : props.styles.error
    }}/>
</div>);

Label.propTypes = {
    name: PropTypes.string,
    styles: PropTypes.object
};

export default CSSModules(style)(Label);
