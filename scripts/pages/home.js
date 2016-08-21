import React, { PropTypes, Component } from 'react';
import AutoComplete from 'containers/autocomplete';
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    render() {
        return <div ref="test">
            <AutoComplete />
        </div>;
    }
}
