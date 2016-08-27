import React, { PropTypes } from 'react';
import XIndicator from 'components/graph/xIndicator';
import { connect } from 'react-redux';
import _ from 'lodash';
const ConnectedXIndicator = (props) => {
    if (!props.hoverTime) return null;
    return <XIndicator {...props} />;
};
ConnectedXIndicator.propTypes = {
    hoverTime: PropTypes.number
};
export default connect(
    (state) => ({ hoverTime: _.get(state, 'graph.hoverTime') })
)(ConnectedXIndicator);
