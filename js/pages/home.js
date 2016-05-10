import React, { PropTypes, Component } from 'react';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">{this.props.title}</div>;
    }
}
