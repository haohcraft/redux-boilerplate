import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Notation from './notation';
import _ from 'lodash';
const style = {
    marginTop: '30px'
};
const Thank = (props) => {
    const content = (<div>
        <div>{`Thank you, ${props.name}`}</div>
        <div>Your reservation is confirmed.</div>
    </div>);
    return <div style={style} ><Notation content={content} icon="sucess" /></div>;
};

Thank.propTypes = {
    name: PropTypes.string
};

export default connect(
    (state) => ({
        name: _.get(state, 'form.first.value')
    })
)(Thank);
