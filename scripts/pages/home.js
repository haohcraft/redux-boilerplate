import React, { Component } from 'react';
import SearchContainer from '../containers';
import './home.css';

export default class HomePage extends Component {
    render() {
        return <div className='home'>
            <SearchContainer />
        </div>;
    }
}
