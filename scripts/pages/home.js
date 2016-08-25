import React, { PropTypes, Component } from 'react';
import Graph from 'containers/graph';
import Timer from 'containers/timer';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <Graph />
            <Timer />
        </div>;
    }
}
