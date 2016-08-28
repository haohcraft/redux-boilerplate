import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import Graph from 'containers/graph';
import Timer from 'containers/timer';
import Alerts from 'containers/alerts';
import Threshold from 'containers/alerts/threshold';
import UpdateTime from 'containers/timer/updateTime';
import style from './style.css';
@CSSModules(style)
export default class HomePage extends Component {
    static propTypes = {
        title: PropTypes.string
    };
    componentDidMount() {
    }
    render() {
        return <div styleName="app">
            <div styleName="title">uptime</div>
            <h5 styleName='name'>
                <span>setting</span>
            </h5>
            <div styleName='setting'>
                <Threshold />
                <UpdateTime />
            </div>
            <h5 styleName='name'>
                <span>report</span>
            </h5>
            <div styleName="report">
                <Graph />
                <Alerts />
            </div>
            <Timer />
        </div>;
    }
}
