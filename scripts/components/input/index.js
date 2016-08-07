import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';

@CSSModules(style)
export default class Input extends Component {
    static propTypes = {
        validate: PropTypes.object,
        placeholder: PropTypes.string,
        data: PropTypes.object,
        change: PropTypes.func
    };
    static defaultProps = {
        validate: {
            content: 'error',
            func: () => (false)
        },
        data: { value: 'Hao', isValid: true },
        placeholder: 'First Name'
    };
    render() {
        const { validate, data, placeholder } = this.props;
        return <div styleName="input">
            {!data.isValid && <div styleName="error">{validate.content}</div>}
            <input
                type="text"
                onChange={::this.onChange}
                onBlur={::this.onBlur}
                placeholder={placeholder}
                value={data.value}
            />
        </div>;
    }
    onChange(evt) {
        const { value } = evt.target;
        const { change, data } = this.props;
        change({
            ...data,
            value
        });
    }
    onBlur(evt) {
        const { value } = evt.target;
        const { change, validate, data } = this.props;
        change({
            ...data,
            isValid: validate.func(value)
        });
    }
}
