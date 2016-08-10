import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Router = (props) => {
    const { pages, currentIndex } = props;
    const Current = pages[currentIndex];
    return <div className="Router">
        <Current />
    </div>;
};

Router.propTypes = {
    pages: PropTypes.array.isRequired,
    currentIndex: PropTypes.number
};

export default connect(
    (state) => ({ currentIndex: state.router.currentIndex })
)(Router);

