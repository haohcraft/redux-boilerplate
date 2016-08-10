import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Notation from './notation';
import Line from 'components/line';
const styleLink = {
    color: '#AC9456',
    textDecoration: 'none'
};
const Location = (props) => {
    const { restaurant } = props;
    const content = (<div>
        <div>{restaurant.name}</div>
        <div>{restaurant.location}</div>
        <div>{restaurant.phone}</div>
        <a href={restaurant.link} style={styleLink} target="__blank">Get Directions ></a>
    </div>);
    return <div>
        <Line />
        <Notation content={content} icon="restaurant"/>
    </div>;
};
Location.propTypes = {
    restaurant: PropTypes.object
};

export default connect(
    (state) => ({ restaurant: state.restaurant })
)(Location);
