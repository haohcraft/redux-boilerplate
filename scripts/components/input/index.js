import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import InputField from './inputField';

const Input = (props) => (<div styleName="input-container">
    <InputField {...props} />
</div>);

Input.propTypes = InputField.propTypes;

export default CSSModules(style)(Input);
