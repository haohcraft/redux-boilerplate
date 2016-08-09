import React from 'react';
import Banner from './banner';
import Thank from './thank';
import Location from './location';
import Request from './request';
import Choice from './choice';
const style = {
    fontSize: '24px',
    textAlign: 'center'
};
const Confirm = () => (
    <div style={style}>
        <Banner />
        <Thank />
        <Choice />
        <Location />
        <Request />
    </div>
);

export default Confirm;
