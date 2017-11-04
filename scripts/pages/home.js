import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './test.css';

export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div className='home' ref="test">
            {this.props.title }
            <div className='subtitle'>
                {this.props.title }
            </div>
        </div>;
    }
}
