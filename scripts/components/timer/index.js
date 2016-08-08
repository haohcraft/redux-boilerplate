import React, { PropTypes, Component } from 'react';
import CSSModules from 'react-css-modules';
import style from './style.css';
import Icon from 'components/icon';
@CSSModules(style)
export default class Timer extends Component {
    static propTypes = {
        interval: PropTypes.number,
        callback: PropTypes.func
    };
    static defaultProps = {
        interval: 1000 * 60 * 5
    };
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            interval: props.interval
        };
    }
    componentDidMount() {
        this.timer = setInterval(::this.tick, 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        const { interval } = this.state;
        const formated = this.getFormattedTime(interval);
        return <div styleName="timer">
            <Icon name="clock2" />
            <div styleName="content">Reservation on holde for {formated.min}m {formated.sec}s</div>
        </div>;
    }
    tick() {
        this.setState({
            interval: this.state.interval - 1000
        });
        if (this.state.interval < 0) {
            /*eslint-disable*/
            alert("Your reservation has expired");
            /*eslint-enable*/
            this.props.callback();
            this.setState({
                interval: this.props.interval
            });
        }
    }
    getFormattedTime(milliseconds) {
        const totalSeconds = Math.round(milliseconds / 1000);
        return {
            sec: parseInt(totalSeconds % 60, 10),
            min: parseInt(totalSeconds / 60, 10) % 60
        };
    }

}
