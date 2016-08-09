import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Notation from './notation';
const Location = (props) => {
    const { restaurant } = props;
    const content = (<div>
        <div>{restaurant.name}</div>
        <div>{restaurant.location}</div>
        <div>{restaurant.phone}</div>
        <a href={restaurant.link}>Get Directions ></a>
    </div>);
    return <Notation content={content} icon="restaurant"/>;
};
Location.propTypes = {
    restaurant: PropTypes.object
};

export default connect(
    (state) => ({ restaurant: state.restaurant })
)(Location);
