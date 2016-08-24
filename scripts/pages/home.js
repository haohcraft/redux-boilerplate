import React, { PropTypes, Component } from 'react';
import Graph from 'components/graph';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
        <Graph />
        </div>;
    }
}
