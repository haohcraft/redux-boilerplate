import React, { PropTypes, Component } from 'react';
import AutoComplete from 'containers/autocomplete';
import Map from 'containers/map';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <AutoComplete />
            <Map />
        </div>;
    }
}
