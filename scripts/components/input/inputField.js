import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Label from './label';
import _ from 'lodash';
import cx from 'classnames';
@CSSModules(style)
export default class InputField extends Component {
    static propTypes = {
        name: PropTypes.string,
        validate: PropTypes.object,
        placeholder: PropTypes.string,
        data: PropTypes.object,
        change: PropTypes.func
    };
    static defaultProps = {
        name: 'first',
        validate: {
            content: 'error',
            func: () => (false)
        },
        data: { value: '', isValid: true, temp: 'hao' },
        placeholder: 'First Name'
    };
    render() {
        const { validate, data, placeholder, name } = this.props;
        const Field = name === 'request' ? 'textarea' : 'input';
        const inputcn = cx(_.get(style, `${name}`), {
            [style['input-error']]: !data.isValid
        });
        const labelName = cx({
            sucess: !!data.value && data.isValid,
            error: !data.isValid
        });
        return <div styleName="input">
            {!data.isValid && <div styleName="error">{validate.content}</div>}
            <Field
                className={inputcn}
                type="text"
                onChange={::this.onChange}
                onBlur={::this.onBlur}
                placeholder={placeholder}
                value={data.temp}
            />
            <span>sd</span>
            <Label name={labelName} />
        </div>;
    }
    onChange(evt) {
        const { value } = evt.target;
        const { change, data } = this.props;
        change({
            ...data,
            temp: value
        });
    }
    onBlur(evt) {
        const { value } = evt.target;
        const { change, validate, data } = this.props;
        change({
            ...data,
            value,
            temp: value,
            isValid: validate.func(value)
        });
    }
}
