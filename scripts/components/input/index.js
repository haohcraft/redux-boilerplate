import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import InputField from './inputField';
import Label from './label';
import cx from 'classnames';

const Input = (props) => {
    const { data } = props;
    const labelName = cx({
        sucess: !!data.value && data.isValid,
        error: !data.isValid
    });
    return <div styleName="input-container">
        <InputField {...props} />
        <Label name={labelName} />
    </div>;
};

Input.propTypes = InputField.propTypes;

export default CSSModules(style)(Input);
