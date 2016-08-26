import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import Graph from 'containers/graph';
import Timer from 'containers/timer';
import Alerts from 'containers/alerts';
import style from './style.css';
@CSSModules(style)
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    componentDidMount() {
    }
    render() {
        return <div>
            <div styleName="container">
                <Graph />
                <Alerts />
            </div>
            <Timer />
        </div>;
    }
}
