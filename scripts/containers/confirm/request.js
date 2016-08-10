import React, { PropTypes } from 'react';
import Line from 'components/line';
import { connect } from 'react-redux';
import Notation from './notation';
const style = {
    marginBottom: '30px'
};
const Request = (props) => {
    if (!props.request || !props.request.length) return null;
    const content = (
        <div>
            <div>Special Requests</div>
            <div>{props.request}</div>
        </div>
    );
    return <div style={style}>
        <Line />
        <Notation icon="request" content={content}/>
    </div>;
};
Request.propTypes = {
    request: PropTypes.string
};

export default connect(
    (state) => ({ request: state.form.request.value })
)(Request);
