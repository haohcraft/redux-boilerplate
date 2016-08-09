import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Notation from './notation';
import _ from 'lodash';
const Thank = (props) => {
    const content = (<div>
        <div>{`Thank you, ${props.name}`}</div>
        <div>Your reservation is confirmed.</div>
    </div>);
    return <Notation content={content} icon="sucess" />;
};

Thank.propTypes = {
    name: PropTypes.string
};

export default connect(
    (state) => ({
        name: _.get(state, 'form.first.value')
    })
)(Thank);
