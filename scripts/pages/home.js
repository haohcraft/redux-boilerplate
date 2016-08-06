import React, { PropTypes, Component } from 'react';
import Header from 'components/header';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <Header />
        </div>;
    }
}
