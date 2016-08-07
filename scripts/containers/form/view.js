import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import style from './style.css';
import Input from 'components/input';
import { formFields } from './constants';
import * as Actions from './actions';

const Form = (props) => {
    const { form, actions } = props;
    return <div styleName="form">
        {
            formFields.map((f, k) => {
                const { name, ...rest } = f;
                return <Input key={k}
                    name={name}
                    change={actions[name]}
                    data={form[name]}
                    {...rest}
                />;
            })
        }
    </div>;
};

Form.propTypes = {
    form: PropTypes.object,
    actions: PropTypes.object
};

export default connect(
    (state) => (state),
    (dispatch) => ({
        actions: {
            first: (v) => dispatch(Actions.changeFirst(v)),
            last: (v) => dispatch(Actions.changeLast(v)),
            phone: (v) => dispatch(Actions.changePhone(v)),
            email: (v) => dispatch(Actions.changeEmail(v)),
            request: (v) => dispatch(Actions.changeRequest(v))
        }
    })
)(CSSModules(style)(Form));

