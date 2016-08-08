import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
const Thank = (props) => (<div className="thank">
    <div>{`Thank you, ${props.name}`}</div>
    <div>Your reservation is confirmed.</div>
</div>);

Thank.propTypes = {
    name: PropTypes.string
};

export default connect(
    (state) => ({
        name: _.get(state, 'form.first.value')
    })
)(Thank);
