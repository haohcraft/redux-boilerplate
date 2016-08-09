import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Notation from './notation';
const Request = (props) => {
    if (!props.request || !props.request.length) return null;
    const content = (
        <div>
            <div>Special Requests</div>
            <div>{props.request}</div>
        </div>
    );
    return <Notation icon="request" content={content}/>;
};
Request.propTypes = {
    request: PropTypes.string
};

export default connect(
    (state) => ({ request: state.form.request.value })
)(Request);
